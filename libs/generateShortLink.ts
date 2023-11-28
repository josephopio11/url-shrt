import { customAlphabet } from "nanoid";

export default (host: string) => {
    const nanoid = customAlphabet('0123456789abcdefghi', 10);
    const shortCode = nanoid();
    return {
        shortCode,
        shortUrl: `https://${host}/${shortCode}`,
    }
}