export default (req, res) => {
    const {
      query: { pid },
    } = req

    res.json({
      text: `from server: ${pid}`
    })
}
