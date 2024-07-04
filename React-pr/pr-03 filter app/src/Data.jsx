const category = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Watch" },
  { id: 3, name: "Airpods" },
  { id: 4, name: "Mac" },
];

const product = [
  {
    id: 1,
    name: "iphone 15 pro",
    price: 114900,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1",
    category: "Iphone"
  },
  {
    id: 2,
    name: "watch series ",
    price: 41999,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT2U3ref_VW_34FR+watch-case-41-aluminum-starlight-nc-s9_VW_34FR+watch-face-41-aluminum-starlight-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=Nk1sQzUrVmFkSWVyQnJPaHc3ZFViaDJXVW9BNEhuTURaNVlmRjZxRXZQeUtoaXQwYi9wRGFOV2FsZVA1S1dYc05HSTFvaExSMlVhL25Qcy9RR0IwRHlJVXRzYkdlWnN0a2d5L09mTHJ3RTVmSGlnNkpTM1NGVHN6YWcySEw0THduMU5rNXFEOEVYUlE4QjJTQ2RNei9ZcTZOVWs3ODQrRmtDTEZFU25DdEtDOG8vRzJ1QjU0M083ZlowMjg1N3dhZ2szdjZkUnVjaUUxYlJIUFFySWhUYTB6QjllalFrSjZZZ1VjN3NNR0F0V0gxWTlYT3RrVXhNU3hzdWxlTkdjUg==",
    category: "Watch"
  },
  {
    id: 3,
    name: "Airpods ",
    price: 129000,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4KIA3sZVdzoNeQOAjjA-cHyiHCXljYGhSZ4YHSuZW-zwaZ3EfwRB487Fb_4YaxyA-qdcXf5Pj9ZoZpoPPgamaxvaUXqtPdk-ajHiu3t97wOK0JMxajWjiGA&usqp=CAE",
    category: "Airpods"
  },
  {
    id: 4,
    name: "MacBoom air",
    price: 99900,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgbW14tEUuUqiJb3fAqixp4rOvkoI1r9YaoedixKM6IrPADbjiijefKhcrQlb_2FiJbqKPLoQzF6xOm8OszFgxQU2IniiyeyOH7CxkztIio0TlEr32cwgXWg&usqp=CAE",
    category: "Mac"
  },
  {
    id: 5,
    name: "MacBoom pro",
    price: 169900,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ76cxLIwrwmdksUFXvFSlTOc13EigV5uaRFn0Abvz16-JrXdvGHiyUotJwEvgZPFgcvh7_h1P0nPj3DMobsh0OZX7d4ahyKBU7FyibVMYV7wfFHyNG2_rSWA&usqp=CAE",
    category: "Mac"
  },
  {
    id: 6,
    name: "Airdopes 6 Pro ",
    price: 19000,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdrXUl0ICrXsAyWDHVtqzrHO29ZN5dwLNbeU6b_Zg-51ZsGXVfvQwlCSdQoK1A9uF6Z6wDOmL61Dp6sDVlELy-aIH-jyntqEF0C-ownFab1otqpiBdLLDb_Q&usqp=CAE",
    category: "Airpods"
  },
  {
    id: 7,
    name: "iPhone 14 Pro",
    price: 118701,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpCmxIYXilUwr_fujcNPyi6hEvVc1ODHLJiArPSH0Z8RrAKb8gnZ5te7sRj9mPc64GA7sxAJqISDBEpIX7e74G1u-D7EqLgEzhdIom6SUxDcJOzICBUeHrDQ&usqp=CAE",
    category: "Iphone"
  },
  {
    id: 8,
    name: "Apple Watch",
    price: 37900,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0=",
    category: "Watch"
  },
]
export { category, product }

