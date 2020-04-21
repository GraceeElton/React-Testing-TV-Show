import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";

test("Running App without an error", () => {
  render(<App />);
});

// testing data

const testData = {
  data: {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/553946",
      },
    },
  },
  id: 553946,
  url:
    "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
  name: "Chapter One: The Vanishing of Will Byers",
  season: 1,
  number: 1,
  airdate: "2016-07-15",
  airtime: "",
  airstamp: "2016-07-15T12:00:00+00:00",
  runtime: 60,
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
  },
  summary:
    "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
  _links: {
    self: {
      href: "http://api.tvmaze.com/episodes/553946",
    },
  },
};

// mosk async function

jest.mock("./api/fetchShow");
console.log({ mockFetchShow });

test("Something amazing i guess// dropDown", async () => {
  mockFetchShow.mockResolvesValueOnce(testData);

  const { getByText, queryAllByTestId } = render(<App />);

  await waitFor(() => expect(queryAllByTestId(/poster-img/i)).toHaveLength(3));
});
