const express=require('express')

const router=express.Router()

//getElementsByClassName(
router.post('/', (req, res, next)=>{

  res.status(200).json({
    message: 'hello i am all get routes'
  })
})

router.get('/', (req, res, next)=>{

  res.status(201).json({
    message: 'hello i am all post routes'
  })
})

router.get('/:id', (req, res, next)=>{

  res.send({
    message: 'I am A get router'
  })
  
})


router.put('/:id', (req, res, next)=>{

  res.json({
    message: 'I am A get router'
  })
})

router.post('/:id', (req, res, next)=>{

  res.json({
    message: 'I am A get router'
  })
})

module.exports = router
