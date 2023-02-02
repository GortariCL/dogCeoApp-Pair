import { afterEach, describe, expect, it, vi } from "vitest";
import { fetcher } from "./fetcher";


const data = {
    "message": {
        "affenpinscher": [],
        "bulldog": [
            "boston",
            "english",
            "french"
        ],
        "bullterrier": ["staffordshire"],
    },
    "status": "success",
};

describe('fetcher test suit', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })
    it("should performing the query it will return the data", async () => {
        // Arrange & Act
        global.fetch = () => Promise.resolve({
            status: 200,
            json: () => Promise.resolve(data)
        })
        const response = await fetcher("https://dog.ceo/api/breeds/list/all");
        // Assert
        expect(response).toEqual(data);
    })
    it("", async () => {
        // Arrange

        // Act

        // Assert
    })

})