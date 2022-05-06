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
            <div className='col-12 col-sm-12 col-md-6 col-lg-6  shadow-lg mt-3'>
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <h4>Node Js:</h4>
                <p>Node Js is a Javascript Runtime Environment.Basially we are using node js for server side Developement.We are for connect database client side to server side when we are using node js.</p>

                <h4>Mongodb:</h4>
                <p>MongoDB makes it easy for developers to store structured or unstructured data.Mongodb is Stored Data in Json Format.MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6  shadow-lg mt-3'>
                <h2>What is the purpose of jwt and how does it work?</h2>
                <p> JWT stands for JSON Web Token, it is an open standard used to share security information between  client and  server.</p>
                <p>JWT are differentiae from other web tokens in that they contain a set of thread. Thread are used to send information between server and client. What thread claims are depends on the use case at working position. For example, a thread may assert who issued the token, how long it is valid for, and what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blog;