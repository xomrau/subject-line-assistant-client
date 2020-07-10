import utf8Encoder from './utf8Encoder';

//format into ready-to-use utf-8-encoded subject line
const slEncoder = (str) => {
    if (str.length === 0) {
        return;
    } else {
        let [encoding, subjectLine ,closing] = ['=?utf-8?Q?', utf8Encoder(str), '?='];
        const [space, regex] = [/%20/gi, /%/gi];
        subjectLine = subjectLine.replace(space, '_').replace(regex, '=');
        return (encoding + subjectLine + closing);
    }
};

export default slEncoder;