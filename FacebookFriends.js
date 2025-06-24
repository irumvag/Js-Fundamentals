var facebookProfile={
    name:"Gad",
    friends:1,
    messages:["welcome here"],
    postMessage:function(message){
        return "message added "+facebookProfile.messages.push(message);
    },
    deleteMessage:function(index){
        if(facebookProfile.messages.length>index)
        {
            facebookProfile.messages.splice(index,1);
            return "Message deleted"
        }
        else{
            return "delete failed";
        }
    },
    addFriend:function(){
        facebookProfile.friends+=1;
        return "a friend is added";
    },
    removeFriend:function(){
        if(facebookProfile.friends>0)
        {
            facebookProfile.friends-=1;
            return "One friend removed";
        }
        else{
            return "You don't have friends";
        }
    }
};