class Hashing {
    public static void main(String[] args) {
        Hashing hashing = new Hashing();

        // Example array and value to remove
        int[] nums = { 3, 2, 2, 3 };
        int val = 3;

        // Call the removeElement method and print the result
        System.out.println(hashing.removeElement(nums, val));

    }

    public int removeElement(int[] nums, int val) {
        int index = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[index] = nums[i];
                index++;
            }
        }
        return index;
    }
}