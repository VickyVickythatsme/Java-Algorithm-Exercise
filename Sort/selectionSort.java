public class selectionSort{
    
    // find smallest item and put it at start of the list
     public static void selection(int[] list){
        int len = list.length;
        int minIndex;
        for (int i = 0; i < len-1; i++){
            minIndex = i;
            for (int j = i+1; j < len; j++){
                if (list[minIndex] > list[j])
                    minIndex = j;
            }
            int temp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = temp;
        }
    }

     public static void main(String []args){
        int[] list = {1,5,3,4,5,6,8,3,5,7,9};
        selection(list);
        for (int item: list){
            System.out.println(item);
        }
        
     }
}
