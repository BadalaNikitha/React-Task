import Monkey from "../videos/video1.mp4";
import Dog from "../videos/video2.mp4";
import Cat from "../videos/video3.mp4";
import Parrot from "../videos/video4.mp4";
import Duck from "../videos/video5.mp4";
import Lion from "../videos/video6.mp4";

export default function ImageInstering() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Animal Videos</h1>

      <div style={styles.videoContainer}>
        <div style={styles.card}>
          <h3>Monkey Video</h3>
          <video controls width="300" height="200">
            <source src={Monkey} type="video/mp4" />
          </video>
        </div>

        <div style={styles.card}>
          <h3>Dog Video</h3>
          <video controls width="300" height="200">
            <source src={Dog} type="video/mp4" />
          </video>
        </div>

        <div style={styles.card}>
          <h3>Cat Video</h3>
          <video controls width="300" height="200">
            <source src={Cat} type="video/mp4" />
          </video>
        </div>

        <div style={styles.card}>
          <h3>Parrot Video</h3>
          <video controls width="300" height="200">
            <source src={Parrot} type="video/mp4" />
          </video>
        </div>

        <div style={styles.card}>
          <h3>Duck Video</h3>
          <video controls width="300" height="200">
            <source src={Duck} type="video/mp4" />
          </video>
        </div>

        <div style={styles.card}>
          <h3>Lion Video</h3>
          <video controls width="300" height="200">
            <source src={Lion} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}



const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, rgba(240, 15, 165, 1), rgba(13, 115, 165, 1))",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
  },

  title: {
    textAlign: "center",
    color: "hsla(210, 89%, 40%, 1.00)",
    marginBottom: "30px",
    fontSize: "36px",
    fontWeight: "bold",
  },

  videoContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
  },

  text: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "18px",
    color: "rgba(3, 128, 253, 1)",
  },

  video: {
    width: "100%",
    borderRadius: "12px",
  },
};