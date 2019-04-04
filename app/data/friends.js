// starter json with four to five friends hardcoded 


var friends = [

    {
        name: "Mark",
        photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        scores:[
            5,
            4,
            3,
            2,
            1,
            1,
            2,
            3,
            4,
            5,
          ]
      },
    {
        "name":"Jean",
        "photo":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "scores":[
            5,
            4,
            3,
            2,
            1,
            1,
            2,
            3,
            4,
            4,
          ]
      },
    {
        "name":"Thomas",
        "photo":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "scores":[
            1,
            2,
            3,
            4,
            5,
            5,
            4,
            3,
            2,
            1,
          ]
      },
    {
        "name":"Michael",
        "photo":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "scores":[

            1,
            2,
            3,
            4,
            5,
            5,
            4,
            3,
            2,
            2,
          ]
      }

]
//  This makes it accessible to other files using require.
module.exports = friends;