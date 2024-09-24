import {
    Breadcrumbs,
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from '@mui/material';
  
  interface PostsRowProps {
    id: string;
    title: string;
    createdBy: string;
  }
  
  function PostsRow({ id, title, createdBy }: PostsRowProps) {
    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{createdBy}</TableCell>
      </TableRow>
    );
  }
  
  export default function PostsPage() {
    return (
      <Stack py={2}>
        <Stack px={2}>
          <Breadcrumbs>
            <Typography>게시글 관리</Typography>
            <Typography>목록</Typography>
          </Breadcrumbs>
          <Typography variant='h3'>게시글 목록</Typography>
          <Button href='/posts/create'>게시글 작성</Button>
        </Stack>
        <Stack px={2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>식별자</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>작성자</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <PostsRow id='001' title='제목' createdBy='홍길동' />
                <PostsRow id='001' title='제목' createdBy='홍길동' />
                <PostsRow id='001' title='제목' createdBy='홍길동' />
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    );
  }
  