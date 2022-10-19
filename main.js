// ====== 1 - POINT TO POINT ======
function pointToPoint() {
  var a = document.getElementById("party1");
  var A = [];
  for (i = 0; i < a.length; i++) {
    A[i] = a.elements[i].value;
  }

  var b = document.getElementById("party2");
  var B = [];
  for (i = 0; i < b.length; i++) {
    B[i] = b.elements[i].value;
  }

  var distance = Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2 + (A[2] - B[2]) ** 2)
  if (distance == 0) {
    distance = "0, da A = B"; 
  }

  document.getElementById("result").innerHTML = ">> Abstand: " + distance;
  }

// ====== 2 - POINT TO LINE ======
function pointToLine() {
  // Punkt
  var a = document.getElementById("party1");
  var A = [];
  for (i = 0; i < a.length; i++) {
    A[i] = a.elements[i].value;
  }

  // Ortsvektor S
  var b = document.getElementById("party2");
  var S = [];
  for (i = 0; i < b.length; i++) {
    S[i] = b.elements[i].value;
  }

  // Richtungsvektor V
  var c = document.getElementById("party3");
  var V = [];
  for (i = 0; i < c.length; i++) {
    V[i] = c.elements[i].value;
  }

  var numerator = A[0] * V[0] + A[1] * V[1] + A[2] * V[2] - (S[0] * V[0] + S[1] * V[1] + A[2] * V[2]);
  var denominator = V[0] ** 2 + V[1] ** 2 + V[2] ** 2;
  var t = numerator / denominator;

  var B = [S[0] + t * V[0], S[1] + t * V[1], S[2] + t * V[2]];

  var distance = Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2 + (A[2] - B[2]) ** 2);
  if (distance == 0) {
    distance = "0, da P ∈ g";
  }
  document.getElementById("result").innerHTML = ">> Abstand: " + distance;
}

// ====== 3 - POINT TO PLANE ======
function pointToPlane() {
  var e = document.getElementById("party1");
  var E = [];
  for (i = 0; i < e.length; i++) {
    E[i] = e.elements[i].value;
  }

  var p = document.getElementById("party2");
  var P = [];
  for (i = 0; i < p.length; i++) {
    P[i] = p.elements[i].value;

  }

  var numerator = Math.abs(E[0] * P[0] + E[1] * P[1] + E[2] * P[2] - E[3])
  var denominator = Math.sqrt(E[0] ** 2 + E[1] ** 2 + E[2] ** 2)
  var distance = numerator / denominator

  if (distance == 0) {
    distance = "0, da P ∈ E";
  }

  document.getElementById("result").innerHTML = ">> Abstand: " + distance;
}


// ====== 5 - PLANE TO PLANE ======
function planeToPlane() {
  var e = document.getElementById("party1");
  var E = [];
  for (i = 0; i < e.length; i++) {
    E[i] = e.elements[i].value;
  }

  var f = document.getElementById("party2");
  var F = [];
  for (i = 0; i < f.length; i++) {
    F[i] = f.elements[i].value;
  }

  

  if (E[0] != 0) {
    var t = E[0] / F[0]
  }
  else if (E[1] != 0) {
    var t = E[1] / F[1]
  }
  else {
    var t = E[2] / F[2]
  }
   
  if (E[1] == t * F[1] && E[2] == t * F[2] && E[3] == t * F[3]) {
    var distance = "0, da die Ebenen identisch sind." 
  }
  else if (E[1] != t * F[1] || E[2] != t * F[2]) {
    var distance = "=, da die Ebenen sich schneiden."
  }
  else {
    // Choose Point P on F
    var P = [0, 0, 0]
    if (F[0] != 0) {
      P[0] = F[3] / F[0]
    }
    else if (F[1] != 0) {
      P[1] = F[3] / F[1]
    }
    else {
      P[2] = F[3] / F[2]
    }

    // Calc the distance between P and E like in 3
    var numerator = Math.abs(E[0] * P[0] + E[1] * P[1] + E[2] * P[2] - E[3])
    var denominator = Math.sqrt(E[0] ** 2 + E[1] ** 2 + E[2] ** 2)
    var distance = numerator / denominator
  }

  document.getElementById("result").innerHTML = ">> Abstand: " + distance;
}