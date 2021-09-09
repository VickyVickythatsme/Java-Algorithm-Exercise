public class HelloWorld{
    
    
     public static void bubble(int[] list){
        int len = list.length;
        for (int i = 0; i < len-1; i++){
            for (int j = 0; j < len -1-i; j++){
                if(list[j] > list[j+1]){
                    int temp = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                }
            }
        }
    }

     public static void main(String []args){
        int[] list = {1,5,3,4,5,6,8,3,5,7,9};
        bubble(list);
        for (int item: list){
            System.out.println(item);
        }
        
     }
}
