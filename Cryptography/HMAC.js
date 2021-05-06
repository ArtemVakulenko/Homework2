import sha256 from 'crypto-js/sha256';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';


var key = 123
var message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, purus ultricies venenatis facilisis, metus enim iaculis eros, sit amet aliquet dolor metus a elit. Sed venenatis ultrices posuere. Donec sed turpis efficitur, tempus elit quis, efficitur nisi. Aliquam ornare orci nunc, nec congue odio ornare nec. Quisque semper nisl pharetra scelerisque luctus. Fusce sed pretium enim. Maecenas eget hendrerit enim. Nullam scelerisque quam non risus fringilla mattis. Sed aliquet quis tellus sed lacinia. Quisque sit amet velit cursus, finibus dolor in, scelerisque risus. Pellentesque aliquet vel leo ut ullamcorper. Nullam luctus nulla ut lorem pharetra ullamcorper. Quisque lacus dolor, tristique a fermentum eu, imperdiet nec velit. Integer ultrices quis nulla eu ullamcorper. Vestibulum dignissim id ante sit amet accumsan.'

const sha = sha256(message);
console.log(sha);