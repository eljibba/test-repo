'use client';

import { useState } from 'react';

import { Button, Htag, P, Rating } from './components';
import styles from './page.module.css';
import Logo from '../public/vercel.svg';
import { Tag } from './components/Tag/Tag';

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <main className={styles.main}>
      <Logo />
      <Htag tag='h1'>Текст 1</Htag>
      <Htag tag='h2'>Текст 2</Htag>
      <Htag tag='h3'>Текст 3</Htag>

      <P size='lg'>Большой</P>
      <P size='md'>Средний</P>
      <P size='base'>Обычный</P>

      <Tag href='#' size='sm'>Маленький</Tag>
      <Tag size='base' color='gray'>Обычный</Tag>
      <Tag size='md' color='primary'>Средний</Tag>

      <Rating rating={rating} setRating={setRating} isEditable />

      <Button appearance='primary' arrow='down'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
    </main>
  );
}
