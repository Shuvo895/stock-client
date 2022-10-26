import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Headers from '../Shared/Headers/Headers';
import './Blogs.css'

const Blogs = () => {
	return (
		<div>
			<Headers></Headers>
			<div style={{paddingTop:'70px'}} className='container my-4'>
				<div className='blogs-Q'>
					<h6>Q: 1. Difference between javascript and nodejs</h6>
					<p>Ans: Javascript is lightweight scripting programming language. Node js is a runtime environment that allows JavaScript to be run on the server.
					<br></br>
					It is use in client-side server.
					It is use in Server-side.
					<br />
					Javascript Framework are TypedJS, RamdaJS.
					Node js modules are Lodash, express.
					<br />
					</p>
				</div>
				<div className='blogs-Q'>
					<h6>Q:2 .When should you use nodejs and when should you use mongodb</h6>
					<p>Ans: Node js is a runtime enviroment that allows js to be run on the server. That's why we can easliy connect our fontend to server for doing server side work. Mongodb is used for store nosql data as a database. We can do operation with mongodb by node js in server-side.</p>
				</div>
				<div className='blogs-Q'>
					<h6>Q: 3.  Differences between sql and nosql databases.</h6>
					<p>Ans:
					Structured query language (sql).No declarative query language (nosql).
					<br />
					Data structured by table in sql database.Data is like a json formate in nosql database.
					<br />
					Joins are need in sql database.
					Joins are not need in nosql database.
					<br />
					</p>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;