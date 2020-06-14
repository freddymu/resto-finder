import React, { Component } from "react";

import { Pagination } from "react-bootstrap";

class MyPagination extends Component {
    constructor() {
        super();

        this.handleSelectPage = this.handleSelectPage.bind(this);
    }

    handleSelectPage(event) {
        let selectedPage = parseInt(event.target.text);
        console.log(selectedPage);

        this.setState({ page: selectedPage }, () => {
            this.props.onChangePage(selectedPage);
        });
    }


    render() {
        let pagination = [];
        let totalPage = this.props.totalPage;
        let currentPage = this.props.currentPage;

        for (let i = 0; i < totalPage; i++) {
            let page = i + 1;
            let pagingItem = (
                <Pagination.Item
                    key={i}
                    active={page === currentPage}
                    onClick={this.handleSelectPage}
                >
                    {page}
                </Pagination.Item>
            );

            pagination.push(pagingItem);
        }

        return (
            <div style={{ overflow: "auto" }}>
                <Pagination>{pagination}</Pagination>
            </div>
        );
    }
}

export default MyPagination;
