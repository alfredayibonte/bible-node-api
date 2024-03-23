import request from "supertest";

import app from "../../src/routes";

describe("GET /randomUrl", () => {
  it("should return 404", (done) => {
    request(app)
      .get("/randomUrl")
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.message).toBe("Not Found /randomUrl");
      })
      .expect(404, done);
  });
});
