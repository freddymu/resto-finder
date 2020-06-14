import React, { Component } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";

import LoadingIndicator from "./Components/LoadingIndicator";
import SearchBox from "./Components/SearchBox";
import MyPagination from "./Components/MyPagination";
import RestoList from "./Components/RestoList";

import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "kebab",
            restaurants: [],
            resultFound: 0,
            resultStart: 1,
            resultShown: 20,
            totalPage: 0,
            page: 1,
            displayLoadingIndicator: false,
        };

        this.onEnter = this.onEnter.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    findResto() {
        this.setState({ displayLoadingIndicator: true });

        let queryParams = [
            "q=" + this.state.searchKeyword,
            //'category=8,9,10',
            "lat=-6.283522",
            "lon=106.711296",
            "sort=real_distance",
            "start=" + this.state.page,
        ];

        console.log(queryParams);

        let url =
            "https://developers.zomato.com/api/v2.1/search?" +
            queryParams.join("&");

        let config = {
            headers: {
                "user-key": "e1c8adecc3c5148865875f8253a600ff",
            },
        };

        axios.get(url, config).then((response) => {
            console.log(response);

            let resultFound = response.data.results_found;
            let resultShown = response.data.results_shown;
            let totalPage = Math.ceil(resultFound / resultShown);

            this.setState({
                restaurants: response.data.restaurants,
                resultFound: resultFound,
                resultStart: response.data.results_start,
                resultShown: resultShown,
                totalPage: totalPage,
                displayLoadingIndicator: false,
            });
        });
    }

    componentWillMount() {}

    componentDidMount() {
        this.findResto();
    }

    onEnter(keyword) {
        this.setState({ searchKeyword: keyword }, () => {
            this.findResto();
        });
    }

    onChangePage(page) {
        this.setState({ page: page }, () => {
            this.findResto();
        });
    }

    render() {
        return (
            <Container>
                <LoadingIndicator
                    display={this.state.displayLoadingIndicator}
                />

                <Row>
                    <Col>
                        <h1>Resto Finder</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="mb-3">
                        <SearchBox onEnter={this.onEnter} />
                    </Col>
                </Row>

                <Row>
                    <Col className="mb-3">
                        <MyPagination
                            totalPage={this.state.totalPage}
                            currentPage={this.state.resultStart}
                            onChangePage={this.onChangePage}
                        />
                    </Col>
                </Row>

                <RestoList restaurants={this.state.restaurants} />

                <Row>
                    <Col className="mb-2">
                        <MyPagination
                            totalPage={this.state.totalPage}
                            currentPage={this.state.resultStart}
                            onChangePage={this.onChangePage}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default App;
