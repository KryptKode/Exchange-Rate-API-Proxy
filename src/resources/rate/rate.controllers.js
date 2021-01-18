export const getRate = async (req, res) => {
  try {
    res.status(200).json({ result: {} })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
