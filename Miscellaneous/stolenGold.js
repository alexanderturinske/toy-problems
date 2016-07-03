'use strict';
/**
 * Mr. Dorsey Dawson recently stole X grams of gold from ACME Jewellers. He is now on a train back home. To avoid getting caught by the police, he has to convert all the gold he has into paper money. He turns into a salesman and starts selling the gold in the train.

There are N passengers who have shown interest in buying the gold. The ith passenger agrees to buy ai grams of gold by paying $_vi_. Dawson wants to escape from the police and also maximize the profit. Can you help him maximize the profit?

Note: The ith passenger would buy exactly ai grams if the transaction is successful.

Input Format
The first line contains two space separated integers, N _X_, where N is the number of passengers who agreed to buy and X is the stolen amount of gold (in grams). 
N lines follow. Each line contains two space separated integers - vi and ai, where vi is the the value which the ith passenger has agreed to pay in exchange for ai grams of gold.

Output format:
If it's possible for Dorsey to escape, print the maximum profit he can enjoy, otherwise print "Got caught!" (quotes are for clarity)

Constraints
1 <= X <= 5000
1 <= N <= 106
all vi's and ai's are less than or equal to 106 and greater than 0.

Sample input #00

4 10
460 4
590 6
550 5
590 5
Sample output #00

1140
Sample input #01

4 9
100 5
120 10
300 2
500 3
Sample output #01

Got caught!
**/

var stolenGold = function (input) {
  var info = input
    .split('\n')
    .map(function (e) {
      return e.split(' ');
    })
    .map(function (e) {
      return [parseInt(e[0], 10), parseInt(e[1], 10)];
    });
  var gold = info[0][1];
  var profit = 0;
  var answer = 'Got caught!';
  var solution;
  var findSolution = function (transactions) {
    transactions = transactions || [];
    // base case
    if (gold < 0) {
      return;
    }
    if (gold === 0) {
      if (profit > answer || typeof answer === 'string') {
        answer = profit;
      }
    }
    // recursive case
    for (var i = 1; i < info.length; i++) {
      if (transactions.indexOf(info[i][1] + info[i][0]) < 0) {
        gold -= info[i][1];
        profit += info[i][0];
        transactions = transactions.concat(info[i][1] + info[i][0]);
        findSolution(transactions);
        gold += info[i][1];
        profit -= info[i][0];
        transactions = transactions.slice(0, -1);
      }
    }
  }
  findSolution();
  return answer;
};

console.log(stolenGold(
'4 10\n' +
'460 4\n' +
'590 6\n' +
'550 5\n' +
'590 5') === 1140);
// -> 1140
console.log(stolenGold(
'4 9\n' +
'100 5\n' +
'120 10\n' +
'300 2\n' +
'500 3') === 'Got caught!');
// -> 'Got caught!'

module.exports = {
  stolenGold: stolenGold,
};
