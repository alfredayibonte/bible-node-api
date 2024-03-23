import request from "supertest";

import app from "../../src/routes";

describe("GET /books", () => {
  it("should return all books", (done) => {
    request(app)
      .get("/books")
      .expect({ success: true, message: "Books Index" })
      .expect(201, done);
  });
});
