// https://www.codewars.com/kata/paginationhelper/train/javascript  

function createPages(arr, itemsPerPage) {
  const pageCollection = [];
  while(arr.length > 0) {
    pageCollection.push(arr.splice(0, itemsPerPage));
  }
  return pageCollection;
}

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  // this.collectionLength = collection.length;
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if(pageIndex >= this.pageCount() || pageIndex < 0) {
    return -1;
  } 

  if(pageIndex !== this.pageCount() - 1) {
    return this.itemsPerPage;
  }

  return this.collection.length % this.itemsPerPage;
  
  // return this.pageCollection[pageIndex] ? this.pageCollection[pageIndex].length : -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  /* SOLUTION 1
  let counter = -1;
  for(item of this.pageCollection) {
    for(i of item) {
      counter++;
      console.log(counter, itemIndex);
      if(counter === itemIndex) {
        return this.pageCollection.indexOf(item);
      }
    }
  }

  return -1; */

  /* SOLUTION 2 */
  if(itemIndex < 0 || itemIndex >= this.collection.length) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
}

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageItemCount(1));