import styles from './styles.module.scss';
import logoimage from '../../assets/logo.svg';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoimage} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/programecompedro.png" alt="ProgramecomPedro" />
                        </div>
                        <span>Pedrão Miguel</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/programecompedro.png" alt="ProgramecomPedro" />
                        </div>
                        <span>Pedrão Miguel</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/programecompedro.png" alt="ProgramecomPedro" />
                        </div>
                        <span>Pedrão Miguel</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}