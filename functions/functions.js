

function CheckItemInArray(post, user_id){
     for(let i= 0; i< post.likes.length; i++){
        if(post.likes[i].user_id === user_id){
           return true   
        }
     }
     return false
}


module.exports = {
  CheckItemInArray,
}