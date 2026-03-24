function PostCount({ count }) {
  return (
    <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;