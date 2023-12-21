import PilihTanggal from "./PilihTanggal";

const DeskripsiKostum = () => {
  return (
    <div className="deksripsi-kostum">
      <h3 className="title pb-2">Dayak tenun sabrina</h3>
      <p>Stok (15)</p>
      <h3 className="price">Rp 150.000,00</h3>
      <h4>Pilih warna:</h4>
      <div className="warna pb-2">
        <button type="button" class="btn btn-outline-primary me-md-2">
          Pink
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          Putih
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          Hitam
        </button>
      </div>
      <h4>Pilih Ukuran</h4>
      <div className="ukuran px-2 pb-2">
        <button type="button" class="btn btn-outline-primary me-md-2">
          S
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          M
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          L
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          XL
        </button>
        <button type="button" class="btn btn-outline-primary me-md-2">
          XXL
        </button>
      </div>
      <div>
        <h4>Tanggal Ambil</h4>
        <i class="fa-solid fa-calendar-days fa-xl"></i> <PilihTanggal />
      </div>
      <div>
        <h4>Tanggal Pengembalian</h4>
        <i class="fa-solid fa-calendar-days fa-xl"></i> <PilihTanggal />
      </div>
    </div>
  );
};

export default DeskripsiKostum;
