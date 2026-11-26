import * as readline from "readline/promises"; // modul input terminal (Node 17+)

// ============================================================
// BAGIAN GALANG: STRUKTUR DATA, FUNGSI BANTU, CREATE, MENU UTAMA
// ============================================================

// Tipe ukuran pakaian yang diperbolehkan
type Ukuran = "S" | "M" | "L" | "XL" | "XXL";

// Struktur data satu barang (entitas Barang dan Stok)
interface Barang {
  id: number; // id unik
  nama: string; // nama pakaian
  harga: number; // harga satuan
  stok: Record<Ukuran, number>; // stok untuk tiap ukuran
}

// Hasil perhitungan satu transaksi (dipakai bagian Wina dan Suci)
interface HasilHitung {
  subtotal: number;
  persenDiskon: number;
  nominalDiskon: number;
  totalBayar: number;
}

// Daftar ukuran sebagai nilai tetap
const daftarUkuran: Ukuran[] = ["S", "M", "L", "XL", "XXL"];

// Data awal (seed) disimpan di dalam memori menggunakan array
const dataBarang: Barang[] = [
  { id: 1, nama: "Kaos", harga: 50000, stok: { S: 10, M: 12, L: 8, XL: 5, XXL: 2 } },
  { id: 2, nama: "Kemeja Panjang", harga: 120000, stok: { S: 6, M: 8, L: 7, XL: 4, XXL: 1 } },
  { id: 3, nama: "Kemeja Pendek", harga: 95000, stok: { S: 5, M: 9, L: 6, XL: 3, XXL: 2 } },
  { id: 4, nama: "Celana", harga: 150000, stok: { S: 4, M: 10, L: 9, XL: 6, XXL: 3 } },
  { id: 5, nama: "Celana Pendek", harga: 70000, stok: { S: 7, M: 11, L: 8, XL: 4, XXL: 2 } },
];

// Objek untuk membaca input dari terminal
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });