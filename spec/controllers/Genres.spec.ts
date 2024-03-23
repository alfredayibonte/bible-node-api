import request from "supertest";

import app from "../../src/routes";

describe("GET /genres", () => {
  it("should return all genres", (done) => {
    request(app)
      .get("/genres")
      .expect({ success: true, message: "Genres" })
      .expect(201, done);
  });
});
