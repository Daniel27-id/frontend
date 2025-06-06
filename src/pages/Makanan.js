import React, { Component } from 'react';
import satu from '../asset/images/nasiCakalang.jpg';
import dua from '../asset/images/nasiMujair.jpg';
import tiga from '../asset/images/nasiTude.jpg';
import empat from '../asset/images/tinutuan.jpg';
import lima from '../asset/images/nasiGorengRoa.jpg';

class Makanan extends Component {
  render() {
    const makananList = [
      { nama: 'Nasi Cakalang', harga: 'Rp25.000', gambar: satu },
      { nama: 'Nasi Mujair', harga: 'Rp22.000', gambar: dua },
      { nama: 'Nasi Tude', harga: 'Rp20.000', gambar: tiga },
      { nama: 'Tinutuan', harga: 'Rp18.000', gambar: empat },
      { nama: 'Nasi Goreng Roa', harga: 'Rp23.000', gambar: lima }
    ];

    return (
      <div className="makanan-container">
        <h2>Makanan:</h2>
        <ul className="makanan-list">
          {makananList.map((makanan, index) => (
            <li key={index} className="makanan-item">
              <img src={makanan.gambar} alt={makanan.nama} className="makanan-image" />
              <div className="makanan-details">
                <span className="makanan-name">{makanan.nama}</span>
                <span className="makanan-harga">{makanan.harga}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Makanan;
