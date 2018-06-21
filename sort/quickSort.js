function quickSort(arr,l,r){
	if(l>=r) return;
	var left = l;
	var right = r;
	var tmp = arr[left];
	while(left<right){
		while(left<right && arr[right]>=tmp) right--;
		arr[left] = arr[right];
		while(left<right && arr[left]<=tmp) left++;
		arr[right] = arr[left];
	}
	arr[right] = tmp;
	quickSort(arr,l,left-1);
	quickSort(arr,right+1,r);
}
function quickSort2(arr){
	if(arr.length<=1) return arr;
	var leftArr=[];
	var rightArr=[];
	var tmp=arr[0];
	arr.forEach(function(item,index){
		if(index!==0){
			if(item<=tmp) leftArr.push(item);
			if(item>tmp)  rightArr.push(item);
		}
	})
	return quickSort2(leftArr).concat([tmp],quickSort2(rightArr));
}
var a=[1,1,5,5,9,3,6,2,8];
quickSort(a,0,a.length-1);
console.log(a);


var b=[1,1,5,5,9,3,6,2,8];
b=quickSort2(b);
console.log(b);
