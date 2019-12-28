Construct a Binary Tree from Postorder and Inorder

Let us see the process of constructing tree from inOrder[] = {4, 8, 2, 5, 1, 6, 3, 7} and postOrder[] = {8, 4, 5, 2, 6, 7, 3, 1}

1) We first find the last node in postOrder[]. The last node is “1”, we know this value is root as root always appear in the end of postorder traversal.

2) We search “1” in in[] to find left and right subtrees of root. Everything on left of “1” in inOrder[] is in left subtree and everything on right is in right subtree.

         1
       /    \
[4, 8, 2, 5]   [6, 3, 7] 
3) We recur the above process for following two.
….b) Recur for inOrder[] = {6, 3, 7} and postOrder[] = {6, 7, 3}
…….Make the created tree as right child of root.
….a) Recur for inOrder[] = {4, 8, 2, 5} and postOrder[] = {8, 4, 5, 2}.
…….Make the created tree as left child of root.

Below is the implementation of above idea. One important observation is, we recursively call for right subtree before left subtree as we decrease index of postorder index whenever we create a new node.