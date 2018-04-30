import React, {Component} from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import { Card, CardBody, CardHeader } from "../../components/ArticleCard";




class Home extends Component {
    state = {
        articles: [],
        q: "",
        start_year: "",
        end_year: "",
        message: "Search For Articles To Begin!",
        results: [],
        search: ""
    };

    componentDidMount() {
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
                this.setState({articles: res.data, title: "", snippit: "", author: "", pubdate: "", url: ""})
            )
            .catch(err => console.log(err));
    };

    createQuerySearch = () => {
        var newQuery = "&q=" + this.state.q;
        if (this.state.start_year) {

            // Add the necessary fields
            let start = this.state.start_year += "0101";

            // Add the date information to the URL
            newQuery = newQuery + "&begin_date=" + start;
        }

        if (this.state.end_year) {

            // Add the necessary fields
            let end = this.state.end_year += "0101";

            // Add the date information to the URL
            newQuery = newQuery + "&end_date=" + end;
        }

        return newQuery;
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.q);
        let query = this.createQuerySearch();
        // this.setState({ search: query});
        console.log(query);
        API.getSearchArticles(query)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>New York Times Aricle Scrubber</h1>
                            <h5>Search for Articles of Interest!</h5>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card>
                            <CardHeader>
                                <h5>Search</h5>
                            </CardHeader>
                            <CardBody>
                                <form>
                                    <Input
                                        value={this.state.q}
                                        onChange={this.handleInputChange}
                                        name="q"
                                        placeholder="Search Topic (required)"
                                    />
                                    <Input
                                        value={this.state.start_year}
                                        onChange={this.handleInputChange}
                                        name="start_year"
                                        placeholder="Start Year"
                                    />
                                    <Input
                                        value={this.state.end_year}
                                        onChange={this.handleInputChange}
                                        name="end_year"
                                        placeholder="End Year"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.q)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Search
                                    </FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card>
                            <CardBody>
                                <h5>Results</h5>
                            </CardBody>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card>
                            <CardBody>
                                <h5>Saved Aricles</h5>
                             </CardBody>
                            <CardBody>
                            {this.state.articles.length ? (
                                <List>
                                    {this.state.articles.map(article=> (
                                        <ListItem key={article._id}>
                                            <Link to={"/articles/saved/" + article._id}>
                                                <strong>
                                                    {article.title}
                                                </strong>
                                                <p>
                                                    {article.snippit} + "\n"
                                                    "By: " + {article.author} + "\n"
                                                    {article.pubdate} + "\n"
                                                    {article.url} + "\n"
                                                    {article.url}
                                                </p>
                                            </Link>
                                            <DeleteBtn onClick={()=> this.deleteArticle(article._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;