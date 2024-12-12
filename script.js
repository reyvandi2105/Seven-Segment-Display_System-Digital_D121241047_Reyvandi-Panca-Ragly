function updateDisplay() {
  // Ambil nilai input w, x, y, z
  const w = document.getElementById("w").value || "0";
  const x = document.getElementById("x").value || "0";
  const y = document.getElementById("y").value || "0";
  const z = document.getElementById("z").value || "0";

  // Gabungkan input menjadi satu string biner
  const binaryInput = `${w}${x}${y}${z}`;

  // Map biner ke segment
  const segmentMap = {
    "0000": [1, 1, 1, 1, 1, 1, 0], // 0
    "0001": [0, 1, 1, 0, 0, 0, 0], // 1
    "0010": [1, 1, 0, 1, 1, 0, 1], // 2
    "0011": [1, 1, 1, 1, 0, 0, 1], // 3
    "0100": [0, 1, 1, 0, 0, 1, 1], // 4
    "0101": [1, 0, 1, 1, 0, 1, 1], // 5
    "0110": [1, 0, 1, 1, 1, 1, 1], // 6
    "0111": [1, 1, 1, 0, 0, 0, 0], // 7
    "1000": [1, 1, 1, 1, 1, 1, 1], // 8
    "1001": [1, 1, 1, 1, 0, 1, 1], // 9
  };

  // Update segment warna
  const segments = ["A", "B", "C", "D", "E", "F", "G"];
  const activeSegments = segmentMap[binaryInput] || [0, 0, 0, 0, 0, 0, 0];

  segments.forEach((segment, index) => {
    document.getElementById(segment).style.backgroundColor = activeSegments[index] ? "red" : "black";
  });

  // Dapatkan semua baris tabel
  const rows = document.querySelectorAll("table tr");

  // Reset semua baris menjadi warna default
  rows.forEach((row, index) => {
    if (index > 1) {
      row.style.backgroundColor = "lightgrey"; // Warna default
    }
  });

  // Cari dan tandai baris yang cocok dengan input
  rows.forEach((row, index) => {
    if (index > 1) {
      const cells = row.querySelectorAll("td");
      const rowBinary = `${cells[0].innerText}${cells[1].innerText}${cells[2].innerText}${cells[3].innerText}`;
      if (rowBinary === binaryInput) {
        row.style.backgroundColor = "yellow"; // Warna penanda
      }
    }
  });
}
