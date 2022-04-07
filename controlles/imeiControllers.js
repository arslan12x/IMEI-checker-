function sumDig(n) {
  let a = 0;
  while (n > 0) {
    a = a + (n % 10);
    n = parseInt(n / 10, 10);
  }
  return a;
}

//validation checker
function validationChecker(n) {
  let s = n.toString();
  let len = s.length;

  if (len != 15) return false;

  let sum = 0;
  for (let i = len; i >= 1; i--) {
    let d = n % 10;

    // Doubling every alternate digit
    if (i % 2 == 0) d = 2 * d;

    // Finding sum of the digits
    sum += sumDig(d);
    n = parseInt(n / 10, 10);
  }

  return sum % 10 == 0;
}

const isValidIMEI = (req, res) => {
  let n = req.params.imei;

  if (validationChecker(n)) res.json({ message: "Valid Imei" });
  else res.json({ message: "Invalid Imei" });
};

module.exports = {
  isValidIMEI,
};
