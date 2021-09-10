//mergrsort
		function merge(array,l,m,r){
			const Left = [];
			const Right = [];
			n1 = m-l+1;
			n2 = r-m;
			for (let i = 0; i < n1; i++){
				Left[i] = (array[l+i]);
			}
			for (let i = 0; i < n2; i++){
				Right[i] = (array[m+1+i]);
			}
			let k1 = 0, k2 = 0, k=l;
			console.log(n1 + " " + n2);
			while (k1 < n1 && k2 < n2){
			    console.log(Left[k1] + " why " + Right[k2]);
				if (Left[k1] < Right[k2]){
					array[k] = Left[k1];
					k1 ++;
				}
				else{
					array[k] = Right[k2];
					k2 ++;
				}
				k ++;
			}
			while (k1 < n1){
				array[k] = Left[k1];
				k ++; 
				k1 ++;
			}
			while (k2 < n2){
				array[k] = Right[k2];
				k ++;
				k2 ++;
				
			}
			
		}
		function mergeSort(array,l,r){
		// find middle
			let m = l+ parseInt((r-l)/2);
			
			if (l<r){ // still dividable
				mergeSort(array, l, m);
				mergeSort(array, m+1, r);
				merge(array,l,m,r);
			}
		}
		function print(array){
			for (let i = 0; i < array.length; i++)
				console.log(array[i]);
		}
		const listMerge = [1,2,6,4,3,6,8,5,2];
		mergeSort(listMerge, 0, listMerge.length-1);
		print(listMerge);
