

function circle(n){
    var deleted=0;
    var change=2;
    var num=0;
    while(deleted<n-1){
        if(num+change<n){
            var add=Math.floor((n-num)/change);
			if(add+deleted<n){
				num=num+change*add;
				deleted=deleted+add;
			}
			else{
				num=num+change;
				deleted++;
			}
			
		}
        else{
            var new_change_len=num+change-n;
            var old_change_len=change-new_change_len;
            var now_Change=old_change_len+2*new_change_len
            num=(num+now_Change)%n;
            change=change*2;
			deleted++;
        }
       
    }
    return num+1;

}


function build(A){
    var B=new Array();
    var building=function(height){
        this.height=height;
        this.right=0
        this.left=0;
        var me=this;
        this.get_water=function(){
            return Math.max(Math.min(me.right, me.left)-height,0);
        }
    }
    var max_left=0;
    for(var i=0;i<A.length;i++){
        B[i]=new building(A[i]);
        B[i].left=max_left;
        if(  B[i].height>max_left)
            max_left=A[i];
    }
    var max_right=0;
    for(var i=A.length-1;i>=0;i--){
        B[i].right=max_right;
        if(A[i]>max_right)
            max_right=A[i];
    }
    var ans=0
    for(var i=0;i<A.length;i++){
       ans=ans+B[i].get_water();
    }
    return ans;

}
var example=[4,3,5,7,3,2,4,5,2,4];
console.log(build(example));