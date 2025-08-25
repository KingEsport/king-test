import { Flex, Text } from '@mantine/core';
import styles from './hello.module.css';

export default function Hello(){
    return(
        <Flex className={styles.helloMainFlex} direction="column">
            <Text fz='3rem' fw={300} c='white'>HELLO</Text>
        </Flex>
    );
}