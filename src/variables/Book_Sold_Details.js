// to display the bools sold in fiction and non fiction by year 
var count=[
{
  ID:1,
  Year:2009,
  Fiction:19,
  NonFiction:23,
},
{
    ID:2,
    Year:2010,
    Fiction:15,
    NonFiction:27,
  },
  {
    ID:3,
    Year:2011,
    Fiction:16,
    NonFiction:23,
  },
  {
    ID:4,
    Year:2012,
    Fiction:15,
    NonFiction:25,
  },
  {
    ID:5,
    Year:2013,
    Fiction:18,
    NonFiction:23,
  },
  {
    Year:2014,
    Fiction:25,
    NonFiction:19,
  },
  {
    ID:5,
    Year:2015,
    Fiction:15,
    NonFiction:29,
  },
  {
    ID:6,
    Year:2016,
    Fiction:15,
    NonFiction:30,
  },
  {
    ID:7,
    Year:2017,
    Fiction:21,
    NonFiction:24,
  },
  {
    ID:8,
    Year:2018,
    Fiction:19,
    NonFiction:27,
  },
  {
    ID:9,
    Year:2019,
    Fiction:17,
    NonFiction:27,
  },
]

const Book_details=["ID", "Year", "Fiction","NonFiction"];
  const fields= ()=>{
    let data=[];
    for(let val in count){
      let temp=[];
      temp.push(count[val].ID);
      temp.push(count[val].Year);
      temp.push(count[val].Fiction);
      temp.push(count[val].NonFiction);
      data.push(temp);
    }
    return data;
  };
  const TotalCount=fields();
  module.exports= {
    Book_details,
    TotalCount,
  };


