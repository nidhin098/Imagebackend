 const express = require('express')
const app = express()
const router = express.Router()
router.use(express.json())


const dataset=[  

    {"id":1 , "image_name": "flower", "image_url": "qwerty", "image_details": "2001"},
    {"id":2 , "image_name": "vegetable", "image_url": "aeiou", "image_details": "2002"},
    {"id":3 , "image_name": "angel", "image_url": "rukku", "image_details": "2020"}
]

router.get("/",(req,res)=>{
    res.send(dataset)
});

router.post("/post",(req,res)=>{
    dataset.push(req.body)
    res.send("successful")

});


router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  dataset.splice(id,1,req.body)
  res.send(dataset)
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  dataset.pop()
  res.send(dataset)
})

module.exports=router




// const express = require('express')
// const app = express()
// const router = express.Router()
// router.use(express.json())
// const dataset=[
//   { "id": 1, "image_name": "Tiya", "image_url": "tiya.jpeg", "image_details": "tiyaaphoto" },
//   { "id": 2, "image_name": "Giya", "image_url": "giya.png", "image_details": "giyapic" },
//   { "id": 3, "image_name": "Miya", "image_url": "miya.png", "image_details": "miyaphoto" },
// ]
// router.get("/",(req,res)=>{
//     res.send(dataset)
// });

// router.post("/insert",(req,res)=>{
//     dataset.push(req.body)
//     res.send("successful")

// });


// router.put("/update/:id", (req, res) => {
//   const id = req.params.id;
//   dataset.splice(id,1,req.body)
//   res.send(dataset)
// });

// router.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   dataset.pop()
//   res.send(dataset)
// })

// module.exports=router







