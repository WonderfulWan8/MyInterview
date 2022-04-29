enum Direction{
    Up = 1,
    Down,
    Left,
    Right,
}
enum FileAccess{
    None,
    Read = 1 << 2,
    Write = 1<< 2,
    ReadWrite = Read | Write,
    G = "123".length,
}