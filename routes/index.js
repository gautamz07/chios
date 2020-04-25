var express = require('express');
var router = express.Router();
const { Client } = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const connectDB = () => {
  var connectionString = "postgres://gautamfonseca:@localhost:5432/todolist";

  const client = new Client({
      connectionString: connectionString
  });

  client.connect();

  return client;
}


router.post( '/insertIT' , async ( req , res , next ) => {

  // console.log('haha received new request');

  const { task, tag } = req.body.taskDetails

  // console.log(req.body.taskDetails)
  // console.log(req.body)
  // console.log(req)
  // console.log('AFTER REQ LOG')


  const connection = connectDB();
  let retrived_task_id = null;
  
  // const SELECT_ID_QUERY = 'SELECT id from tag where tag=javascript'
  const SELECT_TAG_ID_QUERY = {
    text: 'SELECT id from tag where tag=$1',
    values: [tag],
  }

  connection.query( SELECT_TAG_ID_QUERY , (err , response) => {
    // console.log(reponse.rows)
    // console.log('=============')
    retrived_task_id = response.rows[0].id
    if (err) throw err;
    // res.send(reponse.rows);
    // connection.end()
  })

  setTimeout( () => {
    const INSERT_INTO_TASK_ID = 'INSERT INTO item(title, description, iscomplete , tag_id) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [ task , task , false, retrived_task_id ]


    connection.query( INSERT_INTO_TASK_ID, values , (err , reponse) => {
      if (err) throw err;
      res.send(reponse.rows);
      connection.end()
    })
  }, 2000 )

});


router.post( '/getlist' , ( req , res , next ) => {
  
  const connection = connectDB();

  connection.query('SELECT * from item', (err , reponse) => {
    console.log(reponse.rows)
    console.log('=============')
    if (err) throw err;
    res.send(reponse.rows);

    connection.end()

  })
});

router.post( '/getTaggedTasks' , ( req , res , next ) => {
  
  const { taskID } = req.body

  const connection = connectDB();

  const SELECT_TAGGED_TASK_QUERY = {
    text: 'SELECT * from item where tag_id=$1',
    values: [taskID],
  }

  connection.query(SELECT_TAGGED_TASK_QUERY, (err , reponse) => {
    console.log(reponse.rows)
    console.log('=============')
    if (err) throw err;
    res.send(reponse.rows);

    connection.end()

  })
});


router.post( '/gettags' , ( req , res , next ) => {
  const connection = connectDB();

  connection.query('SELECT * from tag', (err , reponse) => {
    if (err) throw err;
    res.send(reponse.rows);
    connection.end()
  })
});


demoQuery = () => {

  const connection = connectDB();

  // const SELECT_ID_QUERY = 'SELECT id from tag where tag=javascript'
  // const SELECT_TAG_ID_QUERY = {
  //   text: 'SELECT id from tag where tag=$1',
  //   values: ['javascript'],
  // }

  // connection.query( SELECT_TAG_ID_QUERY , (err , response) => {
  //   // console.log(reponse.rows)
  //   console.log('=============')
  //   console.log(response.rows[0].id)
  //   if (err) throw err;
  //   // res.send(reponse.rows);
  //   connection.end()

  // })




  const INSERT_INTO_TASK_ID = 'INSERT INTO item(title, description, iscomplete , tag_id) VALUES($1, $2, $3, $4) RETURNING *'
  const values = [ 'Hey there' , 'Why not', false, 3 ]


  connection.query(INSERT_INTO_TASK_ID, values , (err , reponse) => {
    console.log(reponse)
    console.log('=============')
    if (err) throw err;
    // res.send(reponse.rows);

    connection.end()

  })


}

demoQuery()

module.exports = router;




