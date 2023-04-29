class Main {
  public static void main(String[] args) {
    int[] heights = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int max = 0;
    int right = heights.length-1;
    int left = 0;

    while(right != left){
      int distance = right - left;
      int leftHeight = heights[left];
      int rightHeight = heights[right];

      if(leftHeight< rightHeight){
        int currentMax = leftHeight * distance;
        if(currentMax > max) max = currentMax;
        left++;
      }else{
        int currentMax = rightHeight * distance;
        if(currentMax > max) max = currentMax;
        right--;
      }

    }


    System.out.println(max);

  }
}