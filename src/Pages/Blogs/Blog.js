import React from 'react';

const Blog = () => {
    return (
        <div className='container row mx-auto'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 shadow-lg mt-3'>
                <h2>Difference between javascript and nodejs</h2>
                <h4>JavaScript:</h4>
                <p>Javascript is a programming language  its used for writing scripts got clint side. </p>
                <p>Javascript  run in the browsers only.</p>
                <p>It is mostly used on the client-side.</p>

                <h4>Node Js:</h4>
                <p>NodeJS is a Javascript runtime environment.</p>
                <p>With the help of NodeJS we can run Javascript outside the browser .</p>

                <p>It is basically used on the server-side.</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6  shadow-lg mt-3'>
                <h2>Differences between sql and nosql databases.</h2>
                <h4>SQL:</h4>
                <p>This databases works like fixed or static or predefined schema</p>
                <p>This sql databases are not suited for hierarchical data storage.</p>
                <p>Sql are vertically Scalable</p>

                <h4>NoSql:</h4>
                <p>NoSql works dynamic schema</p>
                <p>NoSql databases are best suited for hierarchical data storage.</p>
                <p>noSql are horizontally scalable</p>

            </div>
        </div>
    );
};

export default Blog;