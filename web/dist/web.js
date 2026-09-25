(() => {
  const $reinterpret_view = new DataView(new ArrayBuffer(8));
  function $i64_reinterpret_f64(a) {
    $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
    return $reinterpret_view.getFloat64(0, false);
  }
  function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
    this.mantissa_bits = param0;
    this.exponent_bits = param1;
    this.bias = param2;
  }
  function $makebytes(a, b) {
    const arr = new Uint8Array(a);
    if (b !== 0) {
      arr.fill(b);
    }
    return arr;
  }
  function $make_array_len_and_init(a, b) {
    const arr = new Array(a);
    arr.fill(b);
    return arr;
  }
  function $oob() {
    throw new Error("Index out of bounds");
  }
  function _M0TP27hustcer4fzip12UnzipOptions(param0) {
    this.verify_checksum = param0;
  }
  function _M0TP27mik1e806stlkit4Vec3(param0, param1, param2) {
    this.x = param0;
    this.y = param1;
    this.z = param2;
  }
  function _M0TP27mik1e806stlkit14PreviewOptions(param0, param1, param2, param3, param4, param5) {
    this.width = param0;
    this.height = param1;
    this.yaw = param2;
    this.pitch = param3;
    this.stroke = param4;
    this.stroke_width = param5;
  }
  function _M0DTP29Milky20183xml9EventKind5Start(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind5Start.prototype.$tag = 0;
  function _M0DTP29Milky20183xml9EventKind3End(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind3End.prototype.$tag = 1;
  function _M0DTP29Milky20183xml9EventKind5Empty(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind5Empty.prototype.$tag = 2;
  function _M0DTP29Milky20183xml9EventKind4Text(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind4Text.prototype.$tag = 3;
  function _M0DTP29Milky20183xml9EventKind5CData(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind5CData.prototype.$tag = 4;
  function _M0DTP29Milky20183xml9EventKind7Comment(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind7Comment.prototype.$tag = 5;
  function _M0DTP29Milky20183xml9EventKind2PI(param0, param1) {
    this._0 = param0;
    this._1 = param1;
  }
  _M0DTP29Milky20183xml9EventKind2PI.prototype.$tag = 6;
  function _M0DTP29Milky20183xml9EventKind4Decl(param0, param1, param2) {
    this._0 = param0;
    this._1 = param1;
    this._2 = param2;
  }
  _M0DTP29Milky20183xml9EventKind4Decl.prototype.$tag = 7;
  function _M0DTP29Milky20183xml9EventKind7DocType(param0) {
    this._0 = param0;
  }
  _M0DTP29Milky20183xml9EventKind7DocType.prototype.$tag = 8;
  function _M0DTP29Milky20183xml9EventKind3Eof() {}
  _M0DTP29Milky20183xml9EventKind3Eof.prototype.$tag = 9;
  const _M0DTP29Milky20183xml9EventKind3Eof__ = new _M0DTP29Milky20183xml9EventKind3Eof();
  function _M0DTPC16result6ResultGssE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGssE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGssE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGssE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGdsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGdsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdsE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGzsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGzsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGzsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGzsE2Ok.prototype.$tag = 1;
  function _M0TPB13StringBuilder(param0) {
    this.val = param0;
  }
  function _M0TPC16string10StringView(param0, param1, param2) {
    this.str = param0;
    this.start = param1;
    this.end = param2;
  }
  class $PanicError extends Error {}
  function $panic() {
    throw new $PanicError();
  }
  const _M0FPB12random__seed = () => {
    if (globalThis.crypto?.getRandomValues) {
      const array = new Uint32Array(1);
      globalThis.crypto.getRandomValues(array);
      return array[0] | 0; // Convert to signed 32
    } else {
      return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
    }
  };
  const _M0FPB19int__to__string__js = (x, radix) => {
    return x.toString(radix);
  };
  const _M0FPB20uint__to__string__js = (x, radix) => {
    return (x >>> 0).toString(radix);
  };
  const _M0FPB22uint64__to__string__js = (num, radix) => num.toString(radix);
  function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
    this.f = param0;
    this.size_hint = param1;
  }
  function _M0TPB4IterGcE(param0, param1) {
    this.f = param0;
    this.size_hint = param1;
  }
  function _M0TPB9ArrayViewGkE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TPB9ArrayViewGyE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TPB8MutLocalGiE(param0) {
    this.val = param0;
  }
  const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
  function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
    this.val = param0;
  }
  function _M0TPB9ArrayViewGcE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TPB9ArrayViewGRP29Milky20183xml12XmlAttributeE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TPB3MapGsuE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB3MapGiRP27mik1e806stlkit8MfObjectE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB3MapGsRPB5ArrayGUiiEEE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB3MapGssE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
    this.entries = param0;
    this.size = param1;
    this.capacity = param2;
    this.capacity_mask = param3;
    this.grow_at = param4;
    this.head = param5;
    this.tail = param6;
  }
  function _M0TPB5EntryGsuE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0TPB5EntryGsRPB5ArrayGUiiEEE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0TPB5EntryGiRP27mik1e806stlkit8MfObjectE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
    this.prev = param0;
    this.next = param1;
    this.psl = param2;
    this.hash = param3;
    this.key = param4;
    this.value = param5;
  }
  function _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None() {}
  _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None.prototype.$tag = 0;
  const _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None();
  function _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4Some(param0) {
    this._0 = param0;
  }
  _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4Some.prototype.$tag = 1;
  function _M0TPB8MutLocalGORPB5EntryGsiEE(param0) {
    this.val = param0;
  }
  function _M0TPB8MutLocalGORPB5EntryGssEE(param0) {
    this.val = param0;
  }
  const $bytes_literal$0 = new Uint8Array();
  const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
  const _M0MPB7JSArray3pop = (arr) => arr.pop();
  const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
  function _M0TPB12MutArrayViewGUdsEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TPB9ArrayViewGsE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  const _M0FPC28encoding4utf816encode__utf8__js = (() => {
     const encoder = new TextEncoder();
     return function(src, start, len, bom) {
       const end = start + len;
       const encoded = encoder.encode(src.slice(start, end));
       if (!bom) {
         return encoded;
       }
       const result = new Uint8Array(encoded.length + 3);
       result[0] = 0xEF;
       result[1] = 0xBB;
       result[2] = 0xBF;
       result.set(encoded, 3);
       return result;
     };
   })();
  const _M0FPC28encoding4utf823decode__utf8__lossy__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
     const end = start + len;
     const slice = bytes.subarray(start, end);
     const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
     return decoder.decode(slice);
   })(
     new TextDecoder("utf-8", { ignoreBOM: true }),
     new TextDecoder("utf-8", { ignoreBOM: false }),
   );
  function _M0TPC16buffer6Buffer(param0, param1) {
    this.data = param0;
    this.len = param1;
  }
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC15error5Error38hustcer_2ffzip_2eFzipError_2eFzipError(param0, param1) {
    this._0 = param0;
    this._1 = param1;
  }
  _M0DTPC15error5Error38hustcer_2ffzip_2eFzipError_2eFzipError.prototype.$tag = 8;
  function _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed.prototype.$tag = 7;
  function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 6;
  function _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt(param0, param1) {
    this._0 = param0;
    this._1 = param1;
  }
  _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt.prototype.$tag = 5;
  function _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof() {}
  _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof.prototype.$tag = 4;
  const _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__ = new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof();
  function _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax.prototype.$tag = 3;
  function _M0DTPC15error5Error45Milky2018_2fxml_2eXmlErrorKind_2eUnmatchedTag(param0, param1) {
    this._0 = param0;
    this._1 = param1;
  }
  _M0DTPC15error5Error45Milky2018_2fxml_2eXmlErrorKind_2eUnmatchedTag.prototype.$tag = 2;
  function _M0DTPC15error5Error49Milky2018_2fxml_2eXmlErrorKind_2eInvalidAttribute(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error49Milky2018_2fxml_2eXmlErrorKind_2eInvalidAttribute.prototype.$tag = 1;
  function _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
    this.exponent = param0;
    this.mantissa = param1;
    this.negative = param2;
    this.many_digits = param3;
  }
  function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function $i64_clz(a) {
    a = BigInt.asUintN(64, a);
    if (a === 0n) return 64;
    const hi = Number(a >> 32n);
    if (hi !== 0) {
      return Math.clz32(hi);
    }
    return 32 + Math.clz32(Number(a & 0xffffffffn));
  }
  function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGiRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
    this.lo = param0;
    this.hi = param1;
  }
  function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
    this.digits = param0;
    this.digits_num = param1;
    this.decimal_point = param2;
    this.negative = param3;
    this.truncated = param4;
    this.overflowed = param5;
  }
  function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function $f64_convert_i64_u(a) {
    return Number(a);
  }
  function _M0DTPC16option6OptionGdE4None() {}
  _M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
  const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
  function _M0DTPC16option6OptionGdE4Some(param0) {
    this._0 = param0;
  }
  _M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
  const $bytes_literal$1 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);
  function _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok.prototype.$tag = 1;
  function _M0TP29Milky20183xml6Reader(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16) {
    this.input = param0;
    this.pos = param1;
    this.offset = param2;
    this.line = param3;
    this.column = param4;
    this.entities = param5;
    this.entity_expansion_remaining = param6;
    this.attr_types = param7;
    this.tag_stack = param8;
    this.seen_root = param9;
    this.root_closed = param10;
    this.seen_content = param11;
    this.just_saw_decl = param12;
    this.pending_events = param13;
    this.internal_subset_events = param14;
    this.just_saw_doctype = param15;
    this.had_bom = param16;
  }
  function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TP29Milky20183xml14SourcePosition(param0, param1, param2) {
    this.offset = param0;
    this.line = param1;
    this.column = param2;
  }
  function _M0TP29Milky20183xml10SourceSpan(param0, param1) {
    this.start = param0;
    this.end = param1;
  }
  function _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0TP29Milky20183xml21EntityExpansionBudget(param0) {
    this.remaining = param0;
  }
  function _M0DTPC16result6ResultGUsiERP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUsiERP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUsiERP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUsiERP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0TP29Milky20183xml5Event(param0, param1) {
    this.kind = param0;
    this.span = param1;
  }
  function _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0TP29Milky20183xml12XmlAttribute(param0, param1, param2, param3, param4) {
    this.name = param0;
    this.value = param1;
    this.span = param2;
    this.name_span = param3;
    this.value_span = param4;
  }
  function _M0TP29Milky20183xml10XmlElement(param0, param1) {
    this.name = param0;
    this.attributes = param1;
  }
  function _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0TP27hustcer4fzip12InflateState(param0, param1, param2, param3, param4, param5, param6, param7) {
    this.lm = param0;
    this.dm = param1;
    this.lbt = param2;
    this.dbt = param3;
    this.final_ = param4;
    this.pos = param5;
    this.bt = param6;
    this.i = param7;
  }
  function _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0TP27hustcer4fzip13ZipEntrySizes(param0, param1, param2) {
    this.compressed = param0;
    this.uncompressed = param1;
    this.local_offset = param2;
  }
  function _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0TP27hustcer4fzip14ZipEntryHeader(param0, param1, param2, param3, param4, param5, param6) {
    this.compression = param0;
    this.crc = param1;
    this.compressed_size = param2;
    this.uncompressed_size = param3;
    this.name = param4;
    this.next_offset = param5;
    this.local_offset = param6;
  }
  function _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0TP27hustcer4fzip9ZipCdInfo(param0, param1, param2, param3) {
    this.entries = param0;
    this.offset = param1;
    this.size = param2;
    this.zip64 = param3;
  }
  function _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4None() {}
  _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4None.prototype.$tag = 0;
  const _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4None__ = new _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4None();
  function _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4Some(param0) {
    this._0 = param0;
  }
  _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4Some.prototype.$tag = 1;
  function _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4None() {}
  _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4None.prototype.$tag = 0;
  const _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4None__ = new _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4None();
  function _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4Some(param0) {
    this._0 = param0;
  }
  _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4Some.prototype.$tag = 1;
  function $i32_reinterpret_f32(a) {
    $reinterpret_view.setFloat32(0, a, true);
    return $reinterpret_view.getInt32(0, true);
  }
  function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TP27mik1e806stlkit10WeldResult(param0, param1) {
    this.ids = param0;
    this.unique_count = param1;
  }
  function _M0TPB9ArrayViewGUsRPB5ArrayGUiiEEEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TP27mik1e806stlkit13WindingReport(param0, param1, param2) {
    this.flipped_faces = param0;
    this.consistent = param1;
    this.signed_volume = param2;
  }
  function _M0TP27mik1e806stlkit4Mesh(param0) {
    this.triangles = param0;
  }
  function _M0TP27mik1e806stlkit8Triangle(param0, param1, param2, param3) {
    this.normal = param0;
    this.a = param1;
    this.b = param2;
    this.c = param3;
  }
  function _M0TP27mik1e806stlkit16ValidationReport(param0, param1, param2, param3, param4, param5, param6) {
    this.triangle_count = param0;
    this.raw_vertex_count = param1;
    this.unique_vertex_count = param2;
    this.boundary_edge_count = param3;
    this.non_manifold_edge_count = param4;
    this.degenerate_count = param5;
    this.wrong_normal_count = param6;
  }
  function _M0TPC15bytes9BytesView(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0DTPC16result6ResultGisE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGisE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGisE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGisE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGOAdsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGOAdsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGOAdsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGOAdsE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE2Ok.prototype.$tag = 1;
  function _M0TP27mik1e806stlkit8MfObject(param0, param1, param2) {
    this.vertices = param0;
    this.triangles = param1;
    this.components = param2;
  }
  function _M0TPB9ArrayViewGUiRP27mik1e806stlkit8MfObjectEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function $f32_reinterpret_i32(a) {
    $reinterpret_view.setInt32(0, a, true);
    return $reinterpret_view.getFloat32(0, true);
  }
  function _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE2Ok.prototype.$tag = 1;
  function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TP27mik1e806stlkit13RepairOptions(param0, param1, param2, param3, param4, param5) {
    this.tolerance = param0;
    this.drop_degenerate = param1;
    this.drop_duplicates = param2;
    this.fill_holes = param3;
    this.recompute_normals = param4;
    this.unify_winding = param5;
  }
  function _M0TPB9ArrayViewGUsuEE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0TP27mik1e806stlkit12RepairResult(param0, param1, param2, param3, param4, param5, param6) {
    this.mesh = param0;
    this.removed_degenerate = param1;
    this.removed_duplicates = param2;
    this.filled_holes = param3;
    this.added_triangles = param4;
    this.recomputed_normals = param5;
    this.flipped_faces = param6;
  }
  function _M0TP27mik1e806stlkit4Aabb(param0, param1) {
    this.min = param0;
    this.max = param1;
  }
  function _M0DTPC16result6ResultGRPB5ArrayGsEsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGsEsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPB5ArrayGsEsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPB5ArrayGsEsE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE2Ok.prototype.$tag = 1;
  const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
  const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
  const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
  const _M0MPB4Iter4nextN6constrS9909GRPC16string10StringViewE = 0;
  const _M0MPB4Iter4nextN6constrS9910GRPC16string10StringViewE = 0;
  const _M0MPB4Iter4nextN6constrS9909GcE = 0;
  const _M0MPB4Iter4nextN6constrS9910GcE = 0;
  const _M0MPB4Iter3newN6constrS9917GRPC16string10StringViewE = 0;
  const _M0MPB4Iter3newN6constrS9917GcE = 0;
  const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
  const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
  const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
  const _M0FPC28internal7strconv14base__err__str = "invalid base";
  const _M0FPC28internal7strconv15range__err__str = "value out of range";
  const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
  const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
  const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
  const _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681 = "";
  const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
  const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
  const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
  const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
  const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
  const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
  const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022 = { _0: 0, _1: "" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 1, _1: "5" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "25" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 2, _1: "625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "3125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "15625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 3, _1: "78125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "1953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 4, _1: "9765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "48828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "244140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "1220703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 5, _1: "6103515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "30517578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "152587890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 6, _1: "762939453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "3814697265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "19073486328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 7, _1: "95367431640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "476837158203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "2384185791015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "11920928955078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 8, _1: "59604644775390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "298023223876953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "1490116119384765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 9, _1: "7450580596923828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "37252902984619140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "186264514923095703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 10, _1: "931322574615478515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "4656612873077392578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "23283064365386962890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "116415321826934814453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 11, _1: "582076609134674072265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "2910383045673370361328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "14551915228366851806640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 12, _1: "72759576141834259033203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "363797880709171295166015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "1818989403545856475830078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 13, _1: "9094947017729282379150390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "45474735088646411895751953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "227373675443232059478759765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "1136868377216160297393798828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 14, _1: "5684341886080801486968994140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "28421709430404007434844970703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "142108547152020037174224853515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 15, _1: "710542735760100185871124267578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "3552713678800500929355621337890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "17763568394002504646778106689453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 16, _1: "88817841970012523233890533447265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "444089209850062616169452667236328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "2220446049250313080847263336181640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "11102230246251565404236316680908203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 17, _1: "55511151231257827021181583404541015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "277555756156289135105907917022705078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
  const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082];
  const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
  const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const _M0FPC28internal7strconv12checked__mulN6constrS1163 = 0n;
  const _M0FP29Milky20183xml14decode__entityN7_2abindS1496 = "&#";
  const _M0FP29Milky20183xml14decode__entityN7_2abindS1497 = ";";
  const _M0FP29Milky20183xml17decode__char__refN7_2abindS1611 = "&#";
  const _M0FP29Milky20183xml17decode__char__refN7_2abindS1612 = ";";
  const _M0MP29Milky20183xml6Reader17read__attr__valueN7_2abindS2054 = "#";
  const _M0FP27hustcer4fzip15error__messages = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", "invalid header", "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data", "unknown compression method", "invalid checksum", "zip64 value too large for sync API"];
  const _M0FP27hustcer4fzip4fdeb = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  const _M0FP27hustcer4fzip4fleb = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  const _M0FP27hustcer4fzip4clim = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  const _M0FP27hustcer4fzip3fdt = $makebytes(32, 5);
  const t = $make_array_len_and_init(32768, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 32768) {
      let x = (i & 43690) >> 1 | (i & 21845) << 1;
      x = (x & 52428) >> 2 | (x & 13107) << 2;
      x = (x & 61680) >> 4 | (x & 3855) << 4;
      if (i >>> 0 < t.length) {
        t[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip3rev = t;
  const t$2 = $makebytes(288, 0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 144) {
      if (i >>> 0 < t$2.length) {
        t$2[i] = 8;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = 144;
  while (true) {
    const i = _tmp$3;
    if (i < 256) {
      if (i >>> 0 < t$2.length) {
        t$2[i] = 9;
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = 256;
  while (true) {
    const i = _tmp$4;
    if (i < 280) {
      if (i >>> 0 < t$2.length) {
        t$2[i] = 7;
      } else {
        $oob();
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$5 = 280;
  while (true) {
    const i = _tmp$5;
    if (i < 288) {
      if (i >>> 0 < t$2.length) {
        t$2[i] = 8;
      } else {
        $oob();
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip3flt = t$2;
  const t$3 = $make_array_len_and_init(256, 0);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < 256) {
      let c = i;
      let _tmp$7 = 0;
      while (true) {
        const _k = _tmp$7;
        if (_k < 8) {
          c = (c & 1) !== 0 ? -306674912 ^ (c >>> 1 | 0) : c >>> 1 | 0;
          _tmp$7 = _k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i >>> 0 < t$3.length) {
        t$3[i] = c;
      } else {
        $oob();
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip4crct = t$3;
  const _M0MP27hustcer4fzip12UnzipOptions7defaultN6recordS2604 = new _M0TP27hustcer4fzip12UnzipOptions(false);
  const _M0FP27mik1e806stlkit18write__stl__binaryN6headerS745 = "stlkit - 由 MoonBit 生成";
  const _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS951 = "\\";
  const _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS952 = "\\";
  const _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS953 = "/";
  const _M0FP27mik1e806stlkit11local__nameN7_2abindS974 = ":";
  const _M0FP27mik1e806stlkit21normalize__part__pathN7_2abindS975 = "/";
  const _M0FP27mik1e806stlkit19rels__model__targetN7_2abindS977 = "/3dmodel";
  const _M0FP27mik1e806stlkit17find__model__partN7_2abindS1013 = ".model";
  const _M0FP27mik1e806stlkit20attribute__transformN7_2abindS1062 = " ";
  const _M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1140 = "3dmanufacturing/core";
  const _M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1141 = "xmlns:";
  const _M0FP27mik1e806stlkit10prefix__ofN7_2abindS1146 = ":";
  const _M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1595 = "\n";
  const _M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1514 = " ";
  const _M0FP27mik1e806stlkit16parse__face__refN7_2abindS1632 = "/";
  const _M0FP27mik1e806stlkit10parse__objN7_2abindS1738 = "\n";
  const _M0FP27mik1e806stlkit10parse__objN7_2abindS1684 = " ";
  const _M0FP27mik1e806stlkit11fill__holesN7_2abindS1785 = ">";
  const _M0FP27mik1e806stlkit11render__svgN7_2abindS1918 = "";
  const _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009 = new _M0TP27mik1e806stlkit4Vec3(0, 0, 0);
  const _M0MP27mik1e806stlkit14PreviewOptions7defaultN6recordS2030 = new _M0TP27mik1e806stlkit14PreviewOptions(480, 480, 35, 30, "#1f2430", 0.6);
  const _M0FP37mik1e806stlkit3web7analyzeN7_2abindS81 = "\n";
  const _M0FP37mik1e806stlkit3web11fix__reportN7_2abindS124 = "\n";
  const t$4 = $make_array_len_and_init(256, 0);
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[i] : $oob();
      const _tmp$8 = c & 255;
      if (i >>> 0 < t$4.length) {
        t$4[i] = (_tmp$8 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$8] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct1 = t$4;
  const t$5 = $make_array_len_and_init(256, 0);
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$8;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct1.length ? _M0FP27hustcer4fzip5crct1[i] : $oob();
      const _tmp$9 = c & 255;
      if (i >>> 0 < t$5.length) {
        t$5[i] = (_tmp$9 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$9] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct2 = t$5;
  const t$6 = $make_array_len_and_init(256, 0);
  let _tmp$9 = 0;
  while (true) {
    const i = _tmp$9;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct2.length ? _M0FP27hustcer4fzip5crct2[i] : $oob();
      const _tmp$10 = c & 255;
      if (i >>> 0 < t$6.length) {
        t$6[i] = (_tmp$10 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$10] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$9 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct3 = t$6;
  const t$7 = $make_array_len_and_init(256, 0);
  let _tmp$10 = 0;
  while (true) {
    const i = _tmp$10;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct3.length ? _M0FP27hustcer4fzip5crct3[i] : $oob();
      const _tmp$11 = c & 255;
      if (i >>> 0 < t$7.length) {
        t$7[i] = (_tmp$11 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$11] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$10 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct4 = t$7;
  const t$8 = $make_array_len_and_init(256, 0);
  let _tmp$11 = 0;
  while (true) {
    const i = _tmp$11;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct4.length ? _M0FP27hustcer4fzip5crct4[i] : $oob();
      const _tmp$12 = c & 255;
      if (i >>> 0 < t$8.length) {
        t$8[i] = (_tmp$12 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$12] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$11 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct5 = t$8;
  const t$9 = $make_array_len_and_init(256, 0);
  let _tmp$12 = 0;
  while (true) {
    const i = _tmp$12;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct5.length ? _M0FP27hustcer4fzip5crct5[i] : $oob();
      const _tmp$13 = c & 255;
      if (i >>> 0 < t$9.length) {
        t$9[i] = (_tmp$13 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$13] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$12 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct6 = t$9;
  const t$10 = $make_array_len_and_init(256, 0);
  let _tmp$13 = 0;
  while (true) {
    const i = _tmp$13;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct6.length ? _M0FP27hustcer4fzip5crct6[i] : $oob();
      const _tmp$14 = c & 255;
      if (i >>> 0 < t$10.length) {
        t$10[i] = (_tmp$14 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$14] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$13 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct7 = t$10;
  const t$11 = $make_array_len_and_init(256, 0);
  let _tmp$14 = 0;
  while (true) {
    const i = _tmp$14;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct7.length ? _M0FP27hustcer4fzip5crct7[i] : $oob();
      const _tmp$15 = c & 255;
      if (i >>> 0 < t$11.length) {
        t$11[i] = (_tmp$15 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$15] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$14 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct8 = t$11;
  const t$12 = $make_array_len_and_init(256, 0);
  let _tmp$15 = 0;
  while (true) {
    const i = _tmp$15;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct8.length ? _M0FP27hustcer4fzip5crct8[i] : $oob();
      const _tmp$16 = c & 255;
      if (i >>> 0 < t$12.length) {
        t$12[i] = (_tmp$16 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$16] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$15 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip5crct9 = t$12;
  const t$13 = $make_array_len_and_init(256, 0);
  let _tmp$16 = 0;
  while (true) {
    const i = _tmp$16;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip5crct9.length ? _M0FP27hustcer4fzip5crct9[i] : $oob();
      const _tmp$17 = c & 255;
      if (i >>> 0 < t$13.length) {
        t$13[i] = (_tmp$17 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$17] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$16 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct10 = t$13;
  const t$14 = $make_array_len_and_init(256, 0);
  let _tmp$17 = 0;
  while (true) {
    const i = _tmp$17;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip6crct10.length ? _M0FP27hustcer4fzip6crct10[i] : $oob();
      const _tmp$18 = c & 255;
      if (i >>> 0 < t$14.length) {
        t$14[i] = (_tmp$18 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$18] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$17 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct11 = t$14;
  const t$15 = $make_array_len_and_init(256, 0);
  let _tmp$18 = 0;
  while (true) {
    const i = _tmp$18;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip6crct11.length ? _M0FP27hustcer4fzip6crct11[i] : $oob();
      const _tmp$19 = c & 255;
      if (i >>> 0 < t$15.length) {
        t$15[i] = (_tmp$19 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$19] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$18 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct12 = t$15;
  const t$16 = $make_array_len_and_init(256, 0);
  let _tmp$19 = 0;
  while (true) {
    const i = _tmp$19;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip6crct12.length ? _M0FP27hustcer4fzip6crct12[i] : $oob();
      const _tmp$20 = c & 255;
      if (i >>> 0 < t$16.length) {
        t$16[i] = (_tmp$20 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$20] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$19 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct13 = t$16;
  const t$17 = $make_array_len_and_init(256, 0);
  let _tmp$20 = 0;
  while (true) {
    const i = _tmp$20;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip6crct13.length ? _M0FP27hustcer4fzip6crct13[i] : $oob();
      const _tmp$21 = c & 255;
      if (i >>> 0 < t$17.length) {
        t$17[i] = (_tmp$21 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$21] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$20 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct14 = t$17;
  const t$18 = $make_array_len_and_init(256, 0);
  let _tmp$21 = 0;
  while (true) {
    const i = _tmp$21;
    if (i < 256) {
      const c = i >>> 0 < _M0FP27hustcer4fzip6crct14.length ? _M0FP27hustcer4fzip6crct14[i] : $oob();
      const _tmp$22 = c & 255;
      if (i >>> 0 < t$18.length) {
        t$18[i] = (_tmp$22 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$22] : $oob()) ^ (c >>> 8 | 0);
      } else {
        $oob();
      }
      _tmp$21 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _M0FP27hustcer4fzip6crct15 = t$18;
  const _M0FP27hustcer4fzip4fdrm = _M0FP27hustcer4fzip6h__map(_M0FP27hustcer4fzip3fdt, 5, 1);
  const _M0FP27hustcer4fzip4flrm = _M0FP27hustcer4fzip6h__map(_M0FP27hustcer4fzip3flt, 9, 1);
  const _bind = _M0FP27hustcer4fzip4freb(_M0FP27hustcer4fzip4fdeb, 0);
  const _M0FP27hustcer4fzip2fd = _bind._0;
  const _bind$2 = _M0FP27hustcer4fzip4freb(_M0FP27hustcer4fzip4fleb, 2);
  const _b = _bind$2._0;
  if (28 >>> 0 < _b.length) {
    _b[28] = 258;
  } else {
    $oob();
  }
  undefined;
  const _M0FP27hustcer4fzip2fl = _b;
  const _M0MPC16string10StringView4findN6constrS9919 = 0;
  const _M0FPB4seed = _M0FPB12random__seed();
  const _M0MP29Milky20183xml6Reader20skip__quoted__stringN6constrS2457 = 34;
  const _M0MP29Milky20183xml6Reader20skip__quoted__stringN6constrS2458 = 39;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2449 = 41;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2450 = 35;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2451 = 124;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2452 = 35;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2453 = 41;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2454 = 40;
  const _M0FP29Milky20183xml20parse__content__specN6constrS2455 = 35;
  const _M0FP29Milky20183xml20parse__element__declN6constrS2456 = 62;
  const _M0FP29Milky20183xml13parse__attdefN6constrS2448 = 40;
  const _M0MP29Milky20183xml6Reader23parse__internal__subsetN6constrS2459 = 62;
  const _M0MP29Milky20183xml6Reader10read__textN6constrS2460 = 10;
  const _M0MP29Milky20183xml6Reader10read__textN6constrS2461 = new _M0DTP29Milky20183xml9EventKind4Text("");
  const _M0FP27mik1e806stlkit17find__model__partN6constrS2010 = new _M0DTPC16result6ResultGssE3Err("这个 ZIP 里没有 3D 模型部件（找不到 .model 文件），不是 3MF 文件");
  const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
  const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
  const _M0FP27mik1e806stlkit13build__objectN6constrS2011 = new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err("3MF 的对象引用套得太深（超过 32 层），可能是循环引用");
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2013 = new _M0DTPC16result6ResultGdsE2Ok(0.001);
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2014 = new _M0DTPC16result6ResultGdsE2Ok(1);
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2015 = new _M0DTPC16result6ResultGdsE2Ok(10);
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2016 = new _M0DTPC16result6ResultGdsE2Ok(25.4);
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2017 = new _M0DTPC16result6ResultGdsE2Ok(304.8);
  const _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2018 = new _M0DTPC16result6ResultGdsE2Ok(1000);
  const _M0FP27mik1e806stlkit20detect__core__prefixN6constrS2012 = "";
  const _M0FP27mik1e806stlkit17parse__model__xmlN6constrS2019 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这个 3MF 的 build 里没有列任何对象，没有东西可以打印");
  const _M0FP27mik1e806stlkit17parse__model__xmlN6constrS2020 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这个 3MF 的 build 引用的对象里没有三角形——可能是空对象，也可能是几何写在扩展元素里的对象（比如 beam lattice，本工具只处理三角网格）");
  const _M0FP27mik1e806stlkit17parse__stl__asciiN6constrS2026 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这个 ASCII STL 里一个三角形都没有，可能不是 STL 文件");
  const _M0FP27mik1e806stlkit18parse__stl__binaryN6constrS2027 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这个二进制 STL 里一个三角形都没有");
  const _M0FP27mik1e806stlkit10parse__stlN6constrS2028 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这是一个 3MF 文件（ZIP 包），不是 STL——请用 parse_mesh 或 parse_3mf");
  const _M0FP27mik1e806stlkit10parse__objN6constrS2029 = new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err("这个 OBJ 里一个面都没有，可能不是 OBJ 文件");
  const _M0FP37mik1e806stlkit3web6decodeN6constrS150 = new _M0DTPC16result6ResultGzsE3Err("没有收到文件内容");
  const _M0FP37mik1e806stlkit3web6decodeN6constrS151 = new _M0DTPC16result6ResultGzsE3Err("文件内容解码失败，可能上传时出错了");
  function _M0MPB6Logger13write__objectGRP29Milky20183xml12XmlErrorKindE(self, obj) {
    _M0IP29Milky20183xml12XmlErrorKindPB4Show6output(obj, self);
  }
  function _M0MPB6Logger13write__objectGiE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGiE(obj, self);
  }
  function _M0MPB6Logger13write__objectGsE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGsE(obj, self);
  }
  function _M0FPB13consume4__acc(acc, input) {
    const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
    const _p$2 = 17;
    return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
  }
  function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
    if (dst === src && dst_offset < src_offset) {
      let _tmp$22 = 0;
      while (true) {
        const i = _tmp$22;
        if (i < len) {
          const _tmp$23 = dst_offset + i | 0;
          const _tmp$24 = src_offset + i | 0;
          if (_tmp$23 >>> 0 < dst.length) {
            dst[_tmp$23] = _tmp$24 >>> 0 < src.length ? src[_tmp$24] : $oob();
          } else {
            $oob();
          }
          _tmp$22 = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      let _tmp$22 = len - 1 | 0;
      while (true) {
        const i = _tmp$22;
        if (i >= 0) {
          const _tmp$23 = dst_offset + i | 0;
          const _tmp$24 = src_offset + i | 0;
          if (_tmp$23 >>> 0 < dst.length) {
            dst[_tmp$23] = _tmp$24 >>> 0 < src.length ? src[_tmp$24] : $oob();
          } else {
            $oob();
          }
          _tmp$22 = i - 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
  function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
    if (dst === src && dst_offset < src_offset) {
      let _tmp$22 = 0;
      while (true) {
        const i = _tmp$22;
        if (i < len) {
          const _tmp$23 = dst_offset + i | 0;
          const _tmp$24 = src_offset + i | 0;
          if (_tmp$23 >>> 0 < dst.length) {
            dst[_tmp$23] = _tmp$24 >>> 0 < src.length ? src[_tmp$24] : $oob();
          } else {
            $oob();
          }
          _tmp$22 = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      let _tmp$22 = len - 1 | 0;
      while (true) {
        const i = _tmp$22;
        if (i >= 0) {
          const _tmp$23 = dst_offset + i | 0;
          const _tmp$24 = src_offset + i | 0;
          if (_tmp$23 >>> 0 < dst.length) {
            dst[_tmp$23] = _tmp$24 >>> 0 < src.length ? src[_tmp$24] : $oob();
          } else {
            $oob();
          }
          _tmp$22 = i - 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
  function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
    _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
  }
  function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
    const dst = new Uint8Array(allocate_len);
    _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
    return dst;
  }
  function _M0MPB13StringBuilder13write__objectGbE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGbE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGRP29Milky20183xml8XmlErrorE(self, obj) {
    _M0IP29Milky20183xml8XmlErrorPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGjE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGjE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGmE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGmE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
    const _p = { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger };
    _p.method_table.method_2(_p.self, obj);
  }
  function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
    return new _M0TPB13StringBuilder("");
  }
  function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
    self.val = `${self.val}${String.fromCodePoint(ch)}`;
  }
  function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
    self.val = `${self.val}${str}`;
  }
  function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
    return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
  }
  function _M0MPC16string6String16unsafe__char__at(self, index) {
    const c1 = self.charCodeAt(index);
    if (c1 >= 55296 && c1 <= 56319) {
      const c2 = self.charCodeAt(index + 1 | 0);
      return _M0FPB32code__point__of__surrogate__pair(c1, c2);
    } else {
      return c1;
    }
  }
  function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
    const len = self.end - self.start | 0;
    let lo = start < 0 ? 0 : start > len ? len : start;
    let hi;
    if (end === undefined) {
      hi = len;
    } else {
      const _Some = end;
      const _e = _Some;
      hi = _e < 0 ? 0 : _e > len ? len : _e;
    }
    const str = self.str;
    const base = self.start;
    let _tmp$22;
    if (lo > 0) {
      let _tmp$23;
      if (lo < len) {
        let _tmp$24;
        const _p = str.charCodeAt(base + lo | 0);
        if (_p >= 56320 && _p <= 57343) {
          const _p$2 = str.charCodeAt((base + lo | 0) - 1 | 0);
          _tmp$24 = _p$2 >= 55296 && _p$2 <= 56319;
        } else {
          _tmp$24 = false;
        }
        _tmp$23 = _tmp$24;
      } else {
        _tmp$23 = false;
      }
      _tmp$22 = _tmp$23;
    } else {
      _tmp$22 = false;
    }
    if (_tmp$22) {
      lo = lo + 1 | 0;
    }
    let _tmp$23;
    if (hi > 0) {
      let _tmp$24;
      if (hi < len) {
        let _tmp$25;
        const _p = str.charCodeAt(base + hi | 0);
        if (_p >= 56320 && _p <= 57343) {
          const _p$2 = str.charCodeAt((base + hi | 0) - 1 | 0);
          _tmp$25 = _p$2 >= 55296 && _p$2 <= 56319;
        } else {
          _tmp$25 = false;
        }
        _tmp$24 = _tmp$25;
      } else {
        _tmp$24 = false;
      }
      _tmp$23 = _tmp$24;
    } else {
      _tmp$23 = false;
    }
    if (_tmp$23) {
      hi = hi - 1 | 0;
    }
    return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
  }
  function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.end - self.start | 0;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
      return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
    } else {
      return $panic();
    }
  }
  function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
    return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
  }
  function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
    return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
  }
  function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
    return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
  }
  function _M0FPB14avalanche__acc(acc) {
    let acc$2 = acc;
    acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
    acc$2 = Math.imul(acc$2, -2048144777) | 0;
    acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
    acc$2 = Math.imul(acc$2, -1028477379) | 0;
    acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
    return acc$2;
  }
  function _M0FPB13finalize__acc(acc) {
    return _M0FPB14avalanche__acc(acc);
  }
  function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
    show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
    show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
    const len = self.length;
    let lo = start < 0 ? 0 : start > len ? len : start;
    let hi;
    if (end === undefined) {
      hi = len;
    } else {
      const _Some = end;
      const _e = _Some;
      hi = _e < 0 ? 0 : _e > len ? len : _e;
    }
    let _tmp$22;
    if (lo > 0) {
      let _tmp$23;
      if (lo < len) {
        let _tmp$24;
        const _p = self.charCodeAt(lo);
        if (_p >= 56320 && _p <= 57343) {
          const _p$2 = self.charCodeAt(lo - 1 | 0);
          _tmp$24 = _p$2 >= 55296 && _p$2 <= 56319;
        } else {
          _tmp$24 = false;
        }
        _tmp$23 = _tmp$24;
      } else {
        _tmp$23 = false;
      }
      _tmp$22 = _tmp$23;
    } else {
      _tmp$22 = false;
    }
    if (_tmp$22) {
      lo = lo + 1 | 0;
    }
    let _tmp$23;
    if (hi > 0) {
      let _tmp$24;
      if (hi < len) {
        let _tmp$25;
        const _p = self.charCodeAt(hi);
        if (_p >= 56320 && _p <= 57343) {
          const _p$2 = self.charCodeAt(hi - 1 | 0);
          _tmp$25 = _p$2 >= 55296 && _p$2 <= 56319;
        } else {
          _tmp$25 = false;
        }
        _tmp$24 = _tmp$25;
      } else {
        _tmp$24 = false;
      }
      _tmp$23 = _tmp$24;
    } else {
      _tmp$23 = false;
    }
    if (_tmp$23) {
      hi = hi - 1 | 0;
    }
    return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
  }
  function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
    _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
  }
  function _M0IP016_24default__implPB4Show6outputGbE(self, logger) {
    logger.method_table.method_0(logger.self, self ? "true" : "false");
  }
  function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
  }
  function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
    logger.method_table.method_0(logger.self, self);
  }
  function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
  }
  function _M0IP016_24default__implPB4Show6outputGjE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC14uint4UIntPB4Show10to__string(self));
  }
  function _M0IP016_24default__implPB4Show6outputGmE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC16uint646UInt64PB4Show10to__string(self));
  }
  function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
    const _func = self.f;
    const result = _func();
    const _bind$3 = self.size_hint;
    if (result === undefined) {
      self.size_hint = _M0MPB4Iter4nextN6constrS9910GRPC16string10StringViewE;
    } else {
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _n = _Some;
        self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GRPC16string10StringViewE;
      }
    }
    return result;
  }
  function _M0MPB4Iter4nextGcE(self) {
    const _func = self.f;
    const result = _func();
    const _bind$3 = self.size_hint;
    if (result === -1) {
      self.size_hint = _M0MPB4Iter4nextN6constrS9910GcE;
    } else {
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _n = _Some;
        self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GcE;
      }
    }
    return result;
  }
  function _M0MPC13int3Int18to__string_2einner(self, radix) {
    return _M0FPB19int__to__string__js(self, radix);
  }
  function _M0MPC14uint4UInt18to__string_2einner(self, radix) {
    return _M0FPB20uint__to__string__js(self, radix);
  }
  function _M0MPC16uint646UInt6418to__string_2einner(self, radix) {
    return _M0FPB22uint64__to__string__js(self, radix);
  }
  function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
    let size_hint$2;
    if (size_hint === undefined) {
      size_hint$2 = undefined;
    } else {
      const _Some = size_hint;
      const _n = _Some;
      size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GRPC16string10StringViewE;
    }
    return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
  }
  function _M0MPB4Iter3newGcE(f, size_hint) {
    let size_hint$2;
    if (size_hint === undefined) {
      size_hint$2 = undefined;
    } else {
      const _Some = size_hint;
      const _n = _Some;
      size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GcE;
    }
    return new _M0TPB4IterGcE(f, size_hint$2);
  }
  function _M0MPC15array10FixedArray21clamped__view_2einnerGkE(self, start, end) {
    const len = self.length;
    const lo = start < 0 ? 0 : start > len ? len : start;
    let hi;
    if (end === undefined) {
      hi = len;
    } else {
      const _Some = end;
      const _end = _Some;
      hi = _end < 0 ? 0 : _end > len ? len : _end;
    }
    const count = hi > lo ? hi - lo | 0 : 0;
    const _bind$3 = self;
    return new _M0TPB9ArrayViewGkE(_bind$3, lo, lo + count | 0);
  }
  function _M0MPC15array10FixedArray21clamped__view_2einnerGyE(self, start, end) {
    const len = self.length;
    const lo = start < 0 ? 0 : start > len ? len : start;
    let hi;
    if (end === undefined) {
      hi = len;
    } else {
      const _Some = end;
      const _end = _Some;
      hi = _end < 0 ? 0 : _end > len ? len : _end;
    }
    const count = hi > lo ? hi - lo | 0 : 0;
    const _bind$3 = self;
    return new _M0TPB9ArrayViewGyE(_bind$3, lo, lo + count | 0);
  }
  function _M0MPC16string10StringView11code__units(self) {
    const _p = self.str.length;
    let _tmp$22;
    if (_p <= 0) {
      _tmp$22 = [];
    } else {
      const _p$2 = 0;
      const _p$3 = $make_array_len_and_init(_p, self.str.charCodeAt(_p$2));
      let _tmp$23 = 1;
      while (true) {
        const _p$4 = _tmp$23;
        if (_p$4 < _p) {
          if (_p$4 >>> 0 < _p$3.length) {
            _p$3[_p$4] = self.str.charCodeAt(_p$4);
          } else {
            $oob();
          }
          _tmp$23 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$22 = _p$3;
    }
    return _M0MPC15array10FixedArray21clamped__view_2einnerGkE(_tmp$22, self.start, self.end);
  }
  function _M0MPC16string10StringView9to__owned(self) {
    return self.str.substring(self.start, self.end);
  }
  function _M0MPC16string10StringView4iter(self) {
    const start = self.start;
    const end = self.end;
    const index = new _M0TPB8MutLocalGiE(start);
    return _M0MPB4Iter3newGcE(() => {
      if (index.val < end) {
        const c1 = self.str.charCodeAt(index.val);
        if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
          const c2 = self.str.charCodeAt(index.val + 1 | 0);
          if (c2 >= 56320 && c2 <= 57343) {
            index.val = index.val + 2 | 0;
            return _M0FPB32code__point__of__surrogate__pair(c1, c2);
          }
        }
        index.val = index.val + 1 | 0;
        return c1;
      } else {
        return -1;
      }
    }, undefined);
  }
  function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < len) {
        const _p = self.charCodeAt(self_off + i | 0);
        const _p$2 = other.charCodeAt(other_off + i | 0);
        if (_p === _p$2) {
        } else {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
    const len = self.end - self.start | 0;
    if (len === (other.end - other.start | 0)) {
      if (self.str === other.str && self.start === other.start) {
        return true;
      }
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
    } else {
      return false;
    }
  }
  function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    let _tmp$22 = start_offset;
    let _tmp$23 = 0;
    while (true) {
      const index = _tmp$22;
      const count = _tmp$23;
      if (index < end_offset$2 && count < len) {
        const c1 = self.charCodeAt(index);
        if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(index + 1 | 0);
          if (c2 >= 56320 && c2 <= 57343) {
            _tmp$22 = index + 2 | 0;
            _tmp$23 = count + 1 | 0;
            continue;
          } else {
            $panic();
          }
        }
        _tmp$22 = index + 1 | 0;
        _tmp$23 = count + 1 | 0;
        continue;
      } else {
        return count >= len;
      }
    }
  }
  function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
    let _tmp$22 = end_offset;
    let _tmp$23 = 0;
    while (true) {
      const utf16_offset = _tmp$22;
      const char_count = _tmp$23;
      if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset - 1 | 0);
        if (c >= 56320 && c <= 57343) {
          _tmp$22 = utf16_offset - 2 | 0;
          _tmp$23 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$22 = utf16_offset - 1 | 0;
          _tmp$23 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
      }
    }
  }
  function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
    if (start_offset >= 0 && start_offset <= end_offset) {
      let _tmp$22 = start_offset;
      let _tmp$23 = 0;
      while (true) {
        const utf16_offset = _tmp$22;
        const char_count = _tmp$23;
        if (utf16_offset < end_offset && char_count < n) {
          const c = self.charCodeAt(utf16_offset);
          if (c >= 55296 && c <= 56319) {
            _tmp$22 = utf16_offset + 2 | 0;
            _tmp$23 = char_count + 1 | 0;
            continue;
          } else {
            _tmp$22 = utf16_offset + 1 | 0;
            _tmp$23 = char_count + 1 | 0;
            continue;
          }
        } else {
          return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
        }
      }
    } else {
      return $panic();
    }
  }
  function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
  }
  function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
      return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
    } else {
      return $panic();
    }
  }
  function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
    self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
  }
  function _M0MPB13StringBuilder5reset(self) {
    self.val = "";
  }
  function _M0FPB19kmp__failure__table(pattern) {
    const m = pattern.end - pattern.start | 0;
    const table = $make_array_len_and_init(m, 0);
    let k = 0;
    let _tmp$22 = 1;
    while (true) {
      const i = _tmp$22;
      if (i < m) {
        const c = pattern.str.charCodeAt(pattern.start + i | 0);
        while (true) {
          let _tmp$23;
          if (k > 0) {
            const _p = pattern.str.charCodeAt(pattern.start + k | 0);
            _tmp$23 = c !== _p;
          } else {
            _tmp$23 = false;
          }
          if (_tmp$23) {
            const _tmp$24 = k - 1 | 0;
            k = _tmp$24 >>> 0 < table.length ? table[_tmp$24] : $oob();
            continue;
          } else {
            break;
          }
        }
        const _p = pattern.str.charCodeAt(pattern.start + k | 0);
        if (c === _p) {
          k = k + 1 | 0;
        }
        if (i >>> 0 < table.length) {
          table[i] = k;
        } else {
          $oob();
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return table;
  }
  function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
    const n = target.end - target.start | 0;
    const m = pattern.end - pattern.start | 0;
    const table = _M0FPB19kmp__failure__table(pattern);
    let k = 0;
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < n) {
        const c = target.str.charCodeAt(target.start + i | 0);
        while (true) {
          let _tmp$23;
          if (k > 0) {
            const _p = pattern.str.charCodeAt(pattern.start + k | 0);
            _tmp$23 = c !== _p;
          } else {
            _tmp$23 = false;
          }
          if (_tmp$23) {
            const _tmp$24 = k - 1 | 0;
            k = _tmp$24 >>> 0 < table.length ? table[_tmp$24] : $oob();
            continue;
          } else {
            break;
          }
        }
        const _p = pattern.str.charCodeAt(pattern.start + k | 0);
        if (c === _p) {
          k = k + 1 | 0;
        }
        if (k === m) {
          return (i - m | 0) + 1 | 0;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
    let _tmp$22 = start;
    while (true) {
      const pos = _tmp$22;
      if (pos < candidate_end) {
        let _tmp$23;
        const _p = data.charCodeAt(pos);
        if (_p === first) {
          const _p$2 = data.charCodeAt(pos + last_offset | 0);
          _tmp$23 = _p$2 === last;
        } else {
          _tmp$23 = false;
        }
        if (_tmp$23) {
          return pos;
        }
        _tmp$22 = pos + 1 | 0;
        continue;
      } else {
        return -1;
      }
    }
  }
  function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
    return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
  }
  function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < length) {
        const _p = left.charCodeAt(left_start + i | 0);
        const _p$2 = right.charCodeAt(right_start + i | 0);
        if (_p !== _p$2) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0FPB22find__by__two__anchors(target, pattern) {
    const target_len = target.end - target.start | 0;
    const pattern_len = pattern.end - pattern.start | 0;
    const target_start = target.start;
    const pattern_start = pattern.start;
    const last_offset = pattern_len - 1 | 0;
    const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
    const first = pattern.str.charCodeAt(pattern.start);
    const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
    const middle_len = last_offset - 1 | 0;
    let _tmp$22 = target_start;
    let _tmp$23 = 0;
    while (true) {
      const pos = _tmp$22;
      const failures = _tmp$23;
      if (pos < candidate_end) {
        const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
        if (found < 0) {
          return undefined;
        }
        if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
          return found - target_start | 0;
        }
        const failures$2 = failures + 1 | 0;
        const scanned = found - target_start | 0;
        if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
          return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
        }
        _tmp$22 = found + 1 | 0;
        _tmp$23 = failures$2;
        continue;
      } else {
        return undefined;
      }
    }
  }
  function _M0FPB24find__code__unit__scalar(data, start, end, code) {
    let _tmp$22 = start;
    while (true) {
      const pos = _tmp$22;
      if (pos < end) {
        const _p = data.charCodeAt(pos);
        if (_p === code) {
          return pos;
        }
        _tmp$22 = pos + 1 | 0;
        continue;
      } else {
        return -1;
      }
    }
  }
  function _M0FPB30find__code__unit__from__string(data, start, end, code) {
    return _M0FPB24find__code__unit__scalar(data, start, end, code);
  }
  function _M0FPB28find__code__unit__from__view(target, start, end, code) {
    const target_start = target.start;
    const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
    return found < 0 ? -1 : found - target_start | 0;
  }
  function _M0MPC16string10StringView4find(self, str) {
    const pattern_len = str.end - str.start | 0;
    switch (pattern_len) {
      case 0: {
        return _M0MPC16string10StringView4findN6constrS9919;
      }
      case 1: {
        const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
        return found < 0 ? undefined : found;
      }
      default: {
        return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
      }
    }
  }
  function _M0MPC16string6String4find(self, str) {
    return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
  }
  function _M0MPC16string6String8find__by(self, pred) {
    const _p = new _M0TPC16string10StringView(self, 0, self.length);
    const _p$2 = _p.str;
    const _p$3 = _p.start;
    const _p$4 = _p.end;
    let _tmp$22 = _p$3;
    let _tmp$23 = 0;
    while (true) {
      const _p$5 = _tmp$22;
      const _p$6 = _tmp$23;
      if (_p$5 < _p$4) {
        let _p$7;
        let _p$8;
        _L: {
          const _p$9 = _p$2.charCodeAt(_p$5);
          if (_p$9 >= 55296 && _p$9 <= 56319 && (_p$5 + 1 | 0) < _p$4) {
            const _p$10 = _p$2.charCodeAt(_p$5 + 1 | 0);
            if (_p$10 >= 56320 && _p$10 <= 57343) {
              const _tmp$24 = _p$5 + 2 | 0;
              const _p$11 = (((Math.imul(_p$9 - 55296 | 0, 1024) | 0) + _p$10 | 0) - 56320 | 0) + 65536 | 0;
              _p$7 = _tmp$24;
              _p$8 = _p$11;
              break _L;
            } else {
              const _tmp$24 = _p$5 + 1 | 0;
              const _p$11 = _p$9;
              _p$7 = _tmp$24;
              _p$8 = _p$11;
              break _L;
            }
          } else {
            const _tmp$24 = _p$5 + 1 | 0;
            const _p$10 = _p$9;
            _p$7 = _tmp$24;
            _p$8 = _p$10;
            break _L;
          }
        }
        if (pred(_p$8)) {
          return _p$6;
        }
        _tmp$22 = _p$7;
        const _p$9 = _p$8;
        _tmp$23 = _p$6 + (_p$9 <= 65535 ? 1 : 2) | 0;
        continue;
      } else {
        return undefined;
      }
    }
  }
  function _M0MPC16string10StringView11has__suffix(self, str) {
    const self_len = self.end - self.start | 0;
    const str_len = str.end - str.start | 0;
    if (str_len <= self_len) {
      const start = self_len - str_len | 0;
      let _tmp$22;
      if (str_len === 0) {
        _tmp$22 = true;
      } else {
        const _p = self.str.charCodeAt(self.start + start | 0);
        const _p$2 = str.str.charCodeAt(str.start);
        _tmp$22 = _p === _p$2;
      }
      if (_tmp$22) {
        return _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function _M0MPC16string6String11has__suffix(self, str) {
    return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
  }
  function _M0MPC16string10StringView11has__prefix(self, str) {
    const str_len = str.end - str.start | 0;
    if (str_len <= (self.end - self.start | 0)) {
      let _tmp$22;
      if (str_len === 0) {
        _tmp$22 = true;
      } else {
        const _p = self.str.charCodeAt(self.start);
        const _p$2 = str.str.charCodeAt(str.start);
        _tmp$22 = _p === _p$2;
      }
      if (_tmp$22) {
        return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function _M0MPC16string6String11has__prefix(self, str) {
    return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
  }
  function _M0MPC15array5Array4pushGsE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGyE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGiE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGRPB5ArrayGiEE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGbE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGdE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGcE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        const _p = str.charCodeAt(i);
        if (_p === code) {
          return true;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FPB28string__contains__code__unit(str, start, end, code) {
    return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
  }
  function _M0MPC16string10StringView20contains__code__unit(self, code) {
    return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
  }
  function _M0MPC16string10StringView8contains(self, str) {
    const _bind$3 = str.end - str.start | 0;
    switch (_bind$3) {
      case 0: {
        return true;
      }
      case 1: {
        return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
      }
      default: {
        const _bind$4 = _M0MPC16string10StringView4find(self, str);
        return !(_bind$4 === undefined);
      }
    }
  }
  function _M0MPC16string6String8contains(self, str) {
    return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
  }
  function _M0MPC16string6String4iter(self) {
    const len = self.length;
    const index = new _M0TPB8MutLocalGiE(0);
    return _M0MPB4Iter3newGcE(() => {
      if (index.val < len) {
        const c1 = self.charCodeAt(index.val);
        if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < len) {
          const c2 = self.charCodeAt(index.val + 1 | 0);
          if (c2 >= 56320 && c2 <= 57343) {
            const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
            index.val = index.val + 2 | 0;
            return c;
          }
        }
        index.val = index.val + 1 | 0;
        return c1;
      } else {
        return -1;
      }
    }, undefined);
  }
  function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
    return new _M0TPB4IterGRPC16string10StringViewE(() => {
      const _bind$3 = _M0MPB4Iter4nextGcE(self);
      if (_bind$3 === -1) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        return f(_x);
      }
    }, self.size_hint);
  }
  function _M0IPC14char4CharPB4Show10to__string(self) {
    return String.fromCodePoint(self);
  }
  function _M0MPC16string10StringView5split(self, sep) {
    const sep_len = sep.end - sep.start | 0;
    if (sep_len === 0) {
      return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
    }
    const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
    return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
      const _bind$3 = remaining.val;
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _view = _Some;
        const _bind$4 = _M0MPC16string10StringView4find(_view, sep);
        if (_bind$4 === undefined) {
          remaining.val = undefined;
          return _view;
        } else {
          const _Some$2 = _bind$4;
          const _end = _Some$2;
          remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
          return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
        }
      }
    }, undefined);
  }
  function _M0MPC16string6String5split(self, sep) {
    return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
  }
  function _M0MPC16string6String12replace__all(self, old, new_) {
    const len = self.length;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
    const old_len = old.end - old.start | 0;
    const new$2 = _M0MPC16string10StringView9to__owned(new_);
    if (old_len === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
      const _bind$3 = self.length;
      let _tmp$22 = 0;
      while (true) {
        const _string_index = _tmp$22;
        if (_string_index < _bind$3) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$4 = self.charCodeAt(_string_index);
            if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
              const _bind$5 = self.charCodeAt(_string_index + 1 | 0);
              if (_bind$5 >= 56320 && _bind$5 <= 57343) {
                const _tmp$23 = _string_index + 2 | 0;
                const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              } else {
                const _tmp$23 = _string_index + 1 | 0;
                const _p = _bind$4;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              }
            } else {
              const _tmp$23 = _string_index + 1 | 0;
              const _p = _bind$4;
              _decoded_next_string_index = _tmp$23;
              _decoded_char = _p;
              break _L;
            }
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
          _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
          _tmp$22 = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    } else {
      const first_end = _M0MPC16string6String4find(self, old);
      if (first_end === undefined) {
        return self;
      } else {
        const _Some = first_end;
        const _end = _Some;
        let _tmp$22 = new _M0TPC16string10StringView(self, 0, self.length);
        let _tmp$23 = _end;
        while (true) {
          const view = _tmp$22;
          const end = _tmp$23;
          const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
          _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, seg.str, seg.start, seg.end - seg.start | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
          if ((end + old_len | 0) <= len) {
            const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
            const _bind$3 = _M0MPC16string10StringView4find(next_view, old);
            if (_bind$3 === undefined) {
              _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, next_view.str, next_view.start, next_view.end - next_view.start | 0);
              break;
            } else {
              const _Some$2 = _bind$3;
              const _next_end = _Some$2;
              _tmp$22 = next_view;
              _tmp$23 = _next_end;
              continue;
            }
          } else {
            break;
          }
        }
        return buf.val;
      }
    }
  }
  function _M0MPC14char4Char20is__ascii__uppercase(self) {
    return self >= 65 && self <= 90;
  }
  function _M0MPC16string6String9to__lower(self) {
    const _bind$3 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
    if (_bind$3 === undefined) {
      return self;
    } else {
      const _Some = _bind$3;
      const _idx = _Some;
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
      const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
      _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
      const _bind$4 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
      const _bind$5 = _bind$4.str;
      const _bind$6 = _bind$4.start;
      const _bind$7 = _bind$4.end;
      let _tmp$22 = _bind$6;
      while (true) {
        const _string_index = _tmp$22;
        if (_string_index < _bind$7) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$8 = _bind$5.charCodeAt(_string_index);
            if (_bind$8 >= 55296 && _bind$8 <= 56319 && (_string_index + 1 | 0) < _bind$7) {
              const _bind$9 = _bind$5.charCodeAt(_string_index + 1 | 0);
              if (_bind$9 >= 56320 && _bind$9 <= 57343) {
                const _tmp$23 = _string_index + 2 | 0;
                const _p = (((Math.imul(_bind$8 - 55296 | 0, 1024) | 0) + _bind$9 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              } else {
                const _tmp$23 = _string_index + 1 | 0;
                const _p = _bind$8;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              }
            } else {
              const _tmp$23 = _string_index + 1 | 0;
              const _p = _bind$8;
              _decoded_next_string_index = _tmp$23;
              _decoded_char = _p;
              break _L;
            }
          }
          if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
          }
          _tmp$22 = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
  function _M0MPC14char4Char20is__ascii__lowercase(self) {
    return self >= 97 && self <= 122;
  }
  function _M0MPC16string6String9to__upper(self) {
    const _bind$3 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
    if (_bind$3 === undefined) {
      return self;
    } else {
      const _Some = _bind$3;
      const _idx = _Some;
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
      const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
      _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
      const _bind$4 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
      const _bind$5 = _bind$4.str;
      const _bind$6 = _bind$4.start;
      const _bind$7 = _bind$4.end;
      let _tmp$22 = _bind$6;
      while (true) {
        const _string_index = _tmp$22;
        if (_string_index < _bind$7) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$8 = _bind$5.charCodeAt(_string_index);
            if (_bind$8 >= 55296 && _bind$8 <= 56319 && (_string_index + 1 | 0) < _bind$7) {
              const _bind$9 = _bind$5.charCodeAt(_string_index + 1 | 0);
              if (_bind$9 >= 56320 && _bind$9 <= 57343) {
                const _tmp$23 = _string_index + 2 | 0;
                const _p = (((Math.imul(_bind$8 - 55296 | 0, 1024) | 0) + _bind$9 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              } else {
                const _tmp$23 = _string_index + 1 | 0;
                const _p = _bind$8;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              }
            } else {
              const _tmp$23 = _string_index + 1 | 0;
              const _p = _bind$8;
              _decoded_next_string_index = _tmp$23;
              _decoded_char = _p;
              break _L;
            }
          }
          if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
          }
          _tmp$22 = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
  function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
    return new _M0TPC16string10StringView(self, 0, self.length);
  }
  function _M0MPC16string6String9to__array(self) {
    const _p = _M0MPC16string6String4iter(self);
    const _p$2 = [];
    let _p$3 = _p$2;
    while (true) {
      const _p$4 = _M0MPB4Iter4nextGcE(_p);
      if (_p$4 === -1) {
        break;
      } else {
        const _p$5 = _p$4;
        const _p$6 = _p$5;
        const _p$7 = _p$3;
        _M0MPC15array5Array4pushGcE(_p$7, _p$6);
        _p$3 = _p$7;
        continue;
      }
    }
    return _p$3;
  }
  function _M0IPC13int3IntPB4Show10to__string(self) {
    return _M0MPC13int3Int18to__string_2einner(self, 10);
  }
  function _M0IPC14uint4UIntPB4Show10to__string(self) {
    return _M0MPC14uint4UInt18to__string_2einner(self, 10);
  }
  function _M0IPC16uint646UInt64PB4Show10to__string(self) {
    return _M0MPC16uint646UInt6418to__string_2einner(self, 10);
  }
  function _M0MPC15array9ArrayView4iterGcE(self) {
    const i = new _M0TPB8MutLocalGiE(0);
    const len = self.end - self.start | 0;
    return _M0MPB4Iter3newGcE(() => {
      if (i.val < len) {
        const elem = self.buf[self.start + i.val | 0];
        i.val = i.val + 1 | 0;
        return elem;
      } else {
        return -1;
      }
    }, len);
  }
  function _M0MPC15array9ArrayView4iterGRP29Milky20183xml12XmlAttributeE(self) {
    const i = new _M0TPB8MutLocalGiE(0);
    const len = self.end - self.start | 0;
    return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
      if (i.val < len) {
        const elem = self.buf[self.start + i.val | 0];
        i.val = i.val + 1 | 0;
        return elem;
      } else {
        return undefined;
      }
    }, len);
  }
  function _M0MPC15array5Array4iterGcE(self) {
    return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
  }
  function _M0MPC15array5Array4iterGRP29Milky20183xml12XmlAttributeE(self) {
    return _M0MPC15array9ArrayView4iterGRP29Milky20183xml12XmlAttributeE(new _M0TPB9ArrayViewGRP29Milky20183xml12XmlAttributeE(self, 0, self.length));
  }
  function _M0MPC15array9ArrayView21clamped__view_2einnerGkE(self, start, end) {
    const len = self.end - self.start | 0;
    const lo = start < 0 ? 0 : start > len ? len : start;
    let hi;
    if (end === undefined) {
      hi = len;
    } else {
      const _Some = end;
      const _end = _Some;
      hi = _end < 0 ? 0 : _end > len ? len : _end;
    }
    const count = hi > lo ? hi - lo | 0 : 0;
    const _bind$3 = self.buf;
    const _bind$4 = self.start + lo | 0;
    return new _M0TPB9ArrayViewGkE(_bind$3, _bind$4, _bind$4 + count | 0);
  }
  function _M0MPC15array9ArrayView4joinGsE(self, separator) {
    if ((self.end - self.start | 0) === 0) {
      return "";
    } else {
      const _hd = self.buf[self.start];
      const _x_buf = self.buf;
      const _x_start = 1 + self.start | 0;
      const _x_end = self.end;
      const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
      const _bind$3 = _x_end - _x_start | 0;
      let size_hint;
      let _tmp$22 = 0;
      let _tmp$23 = hd.end - hd.start | 0;
      while (true) {
        const _ = _tmp$22;
        const size_hint$2 = _tmp$23;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          _tmp$22 = _ + 1 | 0;
          const _bind$4 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _tmp$23 = (size_hint$2 + (_bind$4.end - _bind$4.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
          continue;
        } else {
          size_hint = size_hint$2;
          break;
        }
      }
      const size_hint$2 = size_hint << 1;
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
      _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
      if ((separator.end - separator.start | 0) === 0) {
        const _bind$4 = _x_end - _x_start | 0;
        let _tmp$24 = 0;
        while (true) {
          const _ = _tmp$24;
          if (_ < _bind$4) {
            const s = _x_buf[_x_start + _ | 0];
            const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
            _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
            _tmp$24 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        const _bind$4 = _x_end - _x_start | 0;
        let _tmp$24 = 0;
        while (true) {
          const _ = _tmp$24;
          if (_ < _bind$4) {
            const s = _x_buf[_x_start + _ | 0];
            const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
            _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
            _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
            _tmp$24 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      return buf.val;
    }
  }
  function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
    if (self === -1) {
      return other === -1;
    } else {
      const _Some = self;
      const _x = _Some;
      if (other === -1) {
        return false;
      } else {
        const _Some$2 = other;
        const _y = _Some$2;
        return _x === _y;
      }
    }
  }
  function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
    if (self === undefined) {
      return other === undefined;
    } else {
      const _Some = self;
      const _x = _Some;
      if (other === undefined) {
        return false;
      } else {
        const _Some$2 = other;
        const _y = _Some$2;
        return _x === _y;
      }
    }
  }
  function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
    if (self === undefined) {
      return default_;
    } else {
      const _Some = self;
      const _t = _Some;
      return _t;
    }
  }
  function _M0MPC13int3Int20next__power__of__two(self) {
    if (self >= 0) {
      if (self <= 1) {
        return 1;
      }
      if (self > 1073741824) {
        return 1073741824;
      }
      return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
    } else {
      return $panic();
    }
  }
  function _M0FPB8new__mapGsuE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGsuE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB8new__mapGsiE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGsiE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB8new__mapGiRP27mik1e806stlkit8MfObjectE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGiRP27mik1e806stlkit8MfObjectE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB8new__mapGsRPB5ArrayGUiiEEE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGsRPB5ArrayGUiiEEE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB8new__mapGssE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGssE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB8new__mapGsbE(capacity) {
    const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
    const _bind$3 = capacity$2 - 1 | 0;
    const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
    const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
    const _bind$6 = undefined;
    return new _M0TPB3MapGsbE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
  }
  function _M0FPB21capacity__for__length(length) {
    let capacity = _M0MPC13int3Int20next__power__of__two(length);
    const _p = capacity;
    if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
      capacity = Math.imul(capacity, 2) | 0;
    }
    return capacity;
  }
  function _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUiiEEE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map20add__entry__to__tailGiRP27mik1e806stlkit8MfObjectE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
    const _bind$3 = self.tail;
    if (_bind$3 === -1) {
      self.head = entry;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry;
    }
    self.tail = idx;
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  function _M0MPB3Map10set__entryGsuE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10set__entryGsRPB5ArrayGUiiEEE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10set__entryGiRP27mik1e806stlkit8MfObjectE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10set__entryGssE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
    const _bind$3 = entry.next;
    if (_bind$3 === undefined) {
      self.tail = new_idx;
    } else {
      const _Some = _bind$3;
      const _next = _Some;
      _next.prev = new_idx;
    }
    self.entries[new_idx] = entry;
  }
  function _M0MPB3Map10push__awayGsuE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map10push__awayGsRPB5ArrayGUiiEEE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGUiiEEE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGsRPB5ArrayGUiiEEE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map10push__awayGiRP27mik1e806stlkit8MfObjectE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP27mik1e806stlkit8MfObjectE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGiRP27mik1e806stlkit8MfObjectE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map10push__awayGssE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
    let _tmp$22 = entry.psl + 1 | 0;
    let _tmp$23 = idx + 1 & self.capacity_mask;
    let _tmp$24 = entry;
    while (true) {
      const psl = _tmp$22;
      const idx$2 = _tmp$23;
      const entry$2 = _tmp$24;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        return;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (psl > _curr_entry.psl) {
          entry$2.psl = psl;
          _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
          _tmp$22 = _curr_entry.psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          _tmp$24 = _curr_entry;
          continue;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx$2 + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGsuE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGsuE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGsiE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGUiiEEE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUiiEEE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGsRPB5ArrayGUiiEEE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUiiEEE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGiRP27mik1e806stlkit8MfObjectE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP27mik1e806stlkit8MfObjectE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGiRP27mik1e806stlkit8MfObjectE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGiRP27mik1e806stlkit8MfObjectE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGssE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGssE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
    const hash = outer.hash;
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr = _Some;
        if (psl > _curr.psl) {
          _M0MPB3Map10push__awayGsbE(self, idx, _curr);
          outer.psl = psl;
          outer.prev = self.tail;
          _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
          return undefined;
        } else {
          _tmp$22 = psl + 1 | 0;
          _tmp$23 = idx + 1 & self.capacity_mask;
          continue;
        }
      }
    }
  }
  function _M0MPB3Map4growGsuE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGsuE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map4growGsiE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGsiE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map4growGsRPB5ArrayGUiiEEE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGsRPB5ArrayGUiiEEE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map4growGiRP27mik1e806stlkit8MfObjectE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGiRP27mik1e806stlkit8MfObjectE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map4growGssE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGssE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map4growGsbE(self) {
    const old_head = self.head;
    const new_capacity = self.capacity << 1;
    self.entries = $make_array_len_and_init(new_capacity, undefined);
    self.capacity = new_capacity;
    self.capacity_mask = new_capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.head = undefined;
    self.tail = -1;
    let _tmp$22 = old_head;
    while (true) {
      const x = _tmp$22;
      if (x === undefined) {
        return;
      } else {
        const _Some = x;
        const _e = _Some;
        const next_in_chain = _e.next;
        _e.next = undefined;
        _M0MPB3Map20rehash__place__entryGsbE(self, _e);
        _tmp$22 = next_in_chain;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGsuE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsuE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsuE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGsuE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGsuE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGsuE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGsiE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGsiE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGsRPB5ArrayGUiiEEE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGUiiEEE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGUiiEEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUiiEEE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGsRPB5ArrayGUiiEEE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGsRPB5ArrayGUiiEEE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGsRPB5ArrayGUiiEEE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUiiEEE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGiRP27mik1e806stlkit8MfObjectE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP27mik1e806stlkit8MfObjectE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGiRP27mik1e806stlkit8MfObjectE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP27mik1e806stlkit8MfObjectE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGiRP27mik1e806stlkit8MfObjectE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGiRP27mik1e806stlkit8MfObjectE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGiRP27mik1e806stlkit8MfObjectE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGiRP27mik1e806stlkit8MfObjectE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGssE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const psl = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp$22 = 0;
          _tmp$23 = hash & self.capacity_mask;
          continue;
        }
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          _curr_entry.value = value;
          return undefined;
        }
        if (psl > _curr_entry.psl) {
          if (self.size >= self.grow_at) {
            _M0MPB3Map4growGsbE(self);
            _tmp$22 = 0;
            _tmp$23 = hash & self.capacity_mask;
            continue;
          }
          _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
          const _bind$4 = self.tail;
          const _bind$5 = undefined;
          const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
          _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
          return undefined;
        }
        _tmp$22 = psl + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map3setGsuE(self, key, value) {
    _M0MPB3Map15set__with__hashGsuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPB3Map3setGsiE(self, key, value) {
    _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPB3Map3setGsRPB5ArrayGUiiEEE(self, key, value) {
    _M0MPB3Map15set__with__hashGsRPB5ArrayGUiiEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPB3Map3setGiRP27mik1e806stlkit8MfObjectE(self, key, value) {
    _M0MPB3Map15set__with__hashGiRP27mik1e806stlkit8MfObjectE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
  }
  function _M0MPB3Map3setGssE(self, key, value) {
    _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPB3Map3setGsbE(self, key, value) {
    _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPB3Map3MapGsuE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGsuE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGsuE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3MapGsiE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGsiE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGsiE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3MapGiRP27mik1e806stlkit8MfObjectE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGiRP27mik1e806stlkit8MfObjectE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGiRP27mik1e806stlkit8MfObjectE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3MapGsRPB5ArrayGUiiEEE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGsRPB5ArrayGUiiEEE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGsRPB5ArrayGUiiEEE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3MapGssE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGssE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGssE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3MapGsbE(arr, capacity) {
    const length = arr.end - arr.start | 0;
    let capacity$2;
    if (capacity === undefined) {
      capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      const _p = _M0FPB21capacity__for__length(length);
      capacity$2 = _capacity > _p ? _capacity : _p;
    }
    const m = _M0FPB8new__mapGsbE(capacity$2);
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const e = arr.buf[arr.start + _ | 0];
        _M0MPB3Map3setGsbE(m, e._0, e._1);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return m;
  }
  function _M0MPB3Map3getGsiE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return _entry.value;
        }
        if (i > _entry.psl) {
          return undefined;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map3getGsRPB5ArrayGUiiEEE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None__;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return new _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4Some(_entry.value);
        }
        if (i > _entry.psl) {
          return _M0DTPC16option6OptionGRPB5ArrayGUiiEEE4None__;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map3getGiRP27mik1e806stlkit8MfObjectE(self, key) {
    const hash = _M0IPC13int3IntPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return _entry.value;
        }
        if (i > _entry.psl) {
          return undefined;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map3getGssE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return _entry.value;
        }
        if (i > _entry.psl) {
          return undefined;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map8containsGsuE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return true;
        }
        if (i > _entry.psl) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map8containsGsiE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return true;
        }
        if (i > _entry.psl) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map8containsGssE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return true;
        }
        if (i > _entry.psl) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map8containsGsbE(self, key) {
    const hash = _M0IPC16string6StringPB4Hash4hash(key);
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          return true;
        }
        if (i > _entry.psl) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map13remove__entryGsbE(self, entry) {
    const _bind$3 = entry.prev;
    if (_bind$3 === -1) {
      self.head = entry.next;
    } else {
      const _tmp$22 = self.entries;
      const _p = _bind$3 >>> 0 < _tmp$22.length ? _tmp$22[_bind$3] : $oob();
      let _tmp$23;
      if (_p === undefined) {
        _tmp$23 = $panic();
      } else {
        const _p$2 = _p;
        _tmp$23 = _p$2;
      }
      _tmp$23.next = entry.next;
    }
    const _bind$4 = entry.next;
    if (_bind$4 === undefined) {
      self.tail = entry.prev;
      return;
    } else {
      const _Some = _bind$4;
      const _next = _Some;
      _next.prev = entry.prev;
      return;
    }
  }
  function _M0MPB3Map11shift__backGsbE(self, idx) {
    let _tmp$22 = idx;
    while (true) {
      const cur = _tmp$22;
      const next = cur + 1 & self.capacity_mask;
      _L: {
        const _bind$3 = self.entries[next];
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _x$2 = _x.psl;
          if (_x$2 === 0) {
            break _L;
          } else {
            _x.psl = _x.psl - 1 | 0;
            _M0MPB3Map10set__entryGsbE(self, _x, cur);
            _tmp$22 = next;
            continue;
          }
        }
      }
      self.entries[cur] = undefined;
      return;
    }
  }
  function _M0MPB3Map18remove__with__hashGsbE(self, key, hash) {
    let _tmp$22 = 0;
    let _tmp$23 = hash & self.capacity_mask;
    while (true) {
      const i = _tmp$22;
      const idx = _tmp$23;
      const _bind$3 = self.entries[idx];
      if (_bind$3 === undefined) {
        return;
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_entry.hash === hash && _entry.key === key) {
          _M0MPB3Map13remove__entryGsbE(self, _entry);
          _M0MPB3Map11shift__backGsbE(self, idx);
          self.size = self.size - 1 | 0;
          return;
        }
        if (i > _entry.psl) {
          return;
        }
        _tmp$22 = i + 1 | 0;
        _tmp$23 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  function _M0MPB3Map6removeGsbE(self, key) {
    _M0MPB3Map18remove__with__hashGsbE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
  }
  function _M0MPC15array10FixedArray12fill_2einnerGyE(self, value, start, end) {
    const array_length = self.length;
    if (array_length > 0) {
      if (start >= 0 && start < array_length) {
        let length;
        if (end === undefined) {
          length = array_length - start | 0;
        } else {
          const _Some = end;
          const _e = _Some;
          length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
        }
        self.fill(value, start, start + length);
        return;
      } else {
        $panic();
        return;
      }
    } else {
      return;
    }
  }
  function _M0MPB3Map4iterGsiE(self) {
    const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsiEE(self.head);
    const len = self.size;
    const remaining = new _M0TPB8MutLocalGiE(len);
    return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
      _L: {
        if (remaining.val > 0) {
          const _bind$3 = curr_entry.val;
          if (_bind$3 === undefined) {
            break _L;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            const _key = _x.key;
            const _value = _x.value;
            const _next = _x.next;
            curr_entry.val = _next;
            remaining.val = remaining.val - 1 | 0;
            return { _0: _key, _1: _value };
          }
        } else {
          break _L;
        }
      }
      return undefined;
    }, len);
  }
  function _M0MPB3Map4iterGssE(self) {
    const curr_entry = new _M0TPB8MutLocalGORPB5EntryGssEE(self.head);
    const len = self.size;
    const remaining = new _M0TPB8MutLocalGiE(len);
    return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
      _L: {
        if (remaining.val > 0) {
          const _bind$3 = curr_entry.val;
          if (_bind$3 === undefined) {
            break _L;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            const _key = _x.key;
            const _value = _x.value;
            const _next = _x.next;
            curr_entry.val = _next;
            remaining.val = remaining.val - 1 | 0;
            return { _0: _key, _1: _value };
          }
        } else {
          break _L;
        }
      }
      return undefined;
    }, len);
  }
  function _M0MPB3Map5iter2GsiE(self) {
    return _M0MPB3Map4iterGsiE(self);
  }
  function _M0MPB3Map5iter2GssE(self) {
    return _M0MPB3Map4iterGssE(self);
  }
  function _M0MPB5Iter24nextGsiE(self) {
    return _M0MPB4Iter4nextGRPC16string10StringViewE(self);
  }
  function _M0MPB5Iter24nextGssE(self) {
    return _M0MPB4Iter4nextGRPC16string10StringViewE(self);
  }
  function _M0IPC16string6StringPB4Hash4hash(self) {
    let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
    const _bind$3 = self.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$3) {
        acc = (acc >>> 0) + (4 >>> 0) | 0;
        const v = self.charCodeAt(i);
        acc = _M0FPB13consume4__acc(acc, v);
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FPB13finalize__acc(acc);
  }
  function _M0IPC13int3IntPB4Hash4hash(self) {
    const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
    return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
  }
  function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
    const dst = $makebytes(allocate_len, init);
    _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
    return dst;
  }
  function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
    if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
      return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
      return $panic();
    }
  }
  function _M0MPC15array10FixedArray16blit__to_2einnerGyE(self, dst, len, src_offset, dst_offset) {
    if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
      _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, self, src_offset, len);
      return;
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(88);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: dst_offset = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst.length = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", self.length = ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
      $panic();
      return;
    }
  }
  function _M0MPC16double6Double7to__int(self) {
    return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
  }
  function _M0MPC16double6Double5round(_tmp$22) {
    return Math.round(_tmp$22);
  }
  function _M0MPC16double6Double3min(self, other) {
    return self !== self ? other : other !== other ? self : self < other ? self : other;
  }
  function _M0MPC16double6Double3max(self, other) {
    return self !== self ? other : other !== other ? self : self > other ? self : other;
  }
  function _M0IPC16double6DoublePB4Show10to__string(self) {
    return String(self);
  }
  function _M0MPC15bytes5Bytes11from__array(arr) {
    const len = arr.end - arr.start | 0;
    if (len === 0) {
      return $bytes_literal$0;
    }
    const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
    return result;
  }
  function _M0MPC15bytes5Bytes14to__fixedarray(self, len) {
    let len$2;
    if (len === undefined) {
      len$2 = self.length;
    } else {
      const _Some = len;
      const _x = _Some;
      len$2 = 0 <= _x && _x <= self.length ? _x : $panic();
    }
    return _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self, len$2, 0, len$2, 0, 0);
  }
  function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP27mik1e806stlkit4Vec3E(self, new_len) {
    _M0MPB7JSArray11set__length(self, new_len);
  }
  function _M0MPC15array5Array11unsafe__popGiE(self) {
    return _M0MPB7JSArray3pop(self);
  }
  function _M0MPC15array5Array11unsafe__popGUsRP29Milky20183xml10SourceSpanEE(self) {
    return _M0MPB7JSArray3pop(self);
  }
  function _M0MPC15array5Array3popGiE(self) {
    if (self.length === 0) {
      return undefined;
    } else {
      const v = _M0MPC15array5Array11unsafe__popGiE(self);
      return v;
    }
  }
  function _M0MPC15array5Array3popGUsRP29Milky20183xml10SourceSpanEE(self) {
    if (self.length === 0) {
      return undefined;
    } else {
      const v = _M0MPC15array5Array11unsafe__popGUsRP29Milky20183xml10SourceSpanEE(self);
      return v;
    }
  }
  function _M0MPC15array5Array6removeGRP29Milky20183xml5EventE(self, index) {
    if (index >= 0 && index < self.length) {
      const value = index >>> 0 < self.length ? self[index] : $oob();
      _M0MPB7JSArray6splice(self, index, 1);
      return value;
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
      return $panic();
    }
  }
  function _M0MPC15array5Array2atGiE(self, index) {
    const len = self.length;
    return index >= 0 && index < len ? self[index] : $panic();
  }
  function _M0MPC15array5Array2atGbE(self, index) {
    const len = self.length;
    return index >= 0 && index < len ? self[index] : $panic();
  }
  function _M0MPC15array5Array2atGsE(self, index) {
    const len = self.length;
    return index >= 0 && index < len ? self[index] : $panic();
  }
  function _M0MPC15array5Array2atGcE(self, index) {
    const len = self.length;
    return index >= 0 && index < len ? self[index] : $panic();
  }
  function _M0MPC15array5Array2atGdE(self, index) {
    const len = self.length;
    return index >= 0 && index < len ? self[index] : $panic();
  }
  function _M0MPC15array12MutArrayView4swapGUdsEE(arr, i, j) {
    const temp = arr.buf[arr.start + i | 0];
    arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
    arr.buf[arr.start + j | 0] = temp;
  }
  function _M0MPC15array12MutArrayView5sliceGUdsEE(arr, start, end) {
    const _bind$3 = arr.end - arr.start | 0;
    if (start < 0 || (start > end || end > _bind$3)) {
      $panic();
    }
    return new _M0TPB12MutArrayViewGUdsEE(arr.buf, start + arr.start | 0, end + arr.start | 0);
  }
  function _M0MPC15array5Array3setGbE(self, index, value) {
    const len = self.length;
    if (index >= 0 && index < len) {
      self[index] = value;
      return;
    } else {
      $panic();
      return;
    }
  }
  function _M0MPC15array12MutArrayView14rev__in__placeGUdsEE(arr) {
    const len = arr.end - arr.start | 0;
    const mid_len = len / 2 | 0;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < mid_len) {
        const j = (len - i | 0) - 1 | 0;
        const temp = arr.buf[arr.start + i | 0];
        arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
        arr.buf[arr.start + j | 0] = temp;
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FPB17fixed__get__limit(len) {
    let _tmp$22 = len;
    let _tmp$23 = 0;
    while (true) {
      const len$2 = _tmp$22;
      const limit = _tmp$23;
      if (len$2 > 0) {
        _tmp$22 = len$2 / 2 | 0;
        _tmp$23 = limit + 1 | 0;
        continue;
      } else {
        return limit;
      }
    }
  }
  function _M0FPB23fixed__bubble__sort__byGUdsEE(arr, cmp) {
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 1;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$3) {
        let _tmp$23 = i;
        while (true) {
          const j = _tmp$23;
          if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
            _M0MPC15array12MutArrayView4swapGUdsEE(arr, j, j - 1 | 0);
            _tmp$23 = j - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FPB24fixed__choose__pivot__byN7sort__2S444GUdsEE(_env, a, b) {
    const arr = _env._2;
    const cmp = _env._1;
    const swaps = _env._0;
    if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
      _M0MPC15array12MutArrayView4swapGUdsEE(arr, a, b);
      swaps.val = swaps.val + 1 | 0;
      return;
    } else {
      return;
    }
  }
  function _M0FPB24fixed__choose__pivot__byN7sort__3S448GUdsEE(_env, a, b, c) {
    _M0FPB24fixed__choose__pivot__byN7sort__2S444GUdsEE(_env, a, b);
    _M0FPB24fixed__choose__pivot__byN7sort__2S444GUdsEE(_env, b, c);
    _M0FPB24fixed__choose__pivot__byN7sort__2S444GUdsEE(_env, a, b);
  }
  function _M0FPB24fixed__choose__pivot__byGUdsEE(arr, cmp) {
    const len = arr.end - arr.start | 0;
    const swaps = new _M0TPB8MutLocalGiE(0);
    const b = Math.imul(len / 4 | 0, 2) | 0;
    if (len >= 8) {
      const a = Math.imul(len / 4 | 0, 1) | 0;
      const c = Math.imul(len / 4 | 0, 3) | 0;
      const _env = { _0: swaps, _1: cmp, _2: arr };
      if (len > 50) {
        _M0FPB24fixed__choose__pivot__byN7sort__3S448GUdsEE(_env, a - 1 | 0, a, a + 1 | 0);
        _M0FPB24fixed__choose__pivot__byN7sort__3S448GUdsEE(_env, b - 1 | 0, b, b + 1 | 0);
        _M0FPB24fixed__choose__pivot__byN7sort__3S448GUdsEE(_env, c - 1 | 0, c, c + 1 | 0);
      }
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUdsEE(_env, a, b, c);
    }
    if (swaps.val === 12) {
      _M0MPC15array12MutArrayView14rev__in__placeGUdsEE(arr);
      return { _0: (len - b | 0) - 1 | 0, _1: true };
    } else {
      return { _0: b, _1: swaps.val === 0 };
    }
  }
  function _M0FPB21fixed__sift__down__byGUdsEE(arr, index, cmp) {
    const len = arr.end - arr.start | 0;
    let _tmp$22 = index;
    let _tmp$23 = (Math.imul(index, 2) | 0) + 1 | 0;
    while (true) {
      const index$2 = _tmp$22;
      const child = _tmp$23;
      if (child < len) {
        const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
        if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
          return undefined;
        }
        _M0MPC15array12MutArrayView4swapGUdsEE(arr, index$2, child$2);
        _tmp$22 = child$2;
        _tmp$23 = (Math.imul(child$2, 2) | 0) + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FPB21fixed__heap__sort__byGUdsEE(arr, cmp) {
    const len = arr.end - arr.start | 0;
    const _bind$3 = len / 2 | 0;
    let _tmp$22 = _bind$3 - 1 | 0;
    while (true) {
      const i = _tmp$22;
      if (i >= 0) {
        _M0FPB21fixed__sift__down__byGUdsEE(arr, i, cmp);
        _tmp$22 = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$23 = len - 1 | 0;
    while (true) {
      const i = _tmp$23;
      if (i >= 1) {
        _M0MPC15array12MutArrayView4swapGUdsEE(arr, 0, i);
        _M0FPB21fixed__sift__down__byGUdsEE(_M0MPC15array12MutArrayView5sliceGUdsEE(arr, 0, i), 0, cmp);
        _tmp$23 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FPB20fixed__partition__byGUdsEE(arr, cmp, pivot_index) {
    _M0MPC15array12MutArrayView4swapGUdsEE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
    const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
    const _bind$3 = (arr.end - arr.start | 0) - 1 | 0;
    let _tmp$22 = 0;
    let _tmp$23 = 0;
    let _tmp$24 = true;
    while (true) {
      const j = _tmp$22;
      const i = _tmp$23;
      const partitioned = _tmp$24;
      if (j < _bind$3) {
        if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
          if (i !== j) {
            _M0MPC15array12MutArrayView4swapGUdsEE(arr, i, j);
            _tmp$22 = j + 1 | 0;
            _tmp$23 = i + 1 | 0;
            _tmp$24 = false;
            continue;
          } else {
            _tmp$22 = j + 1 | 0;
            _tmp$23 = i + 1 | 0;
            continue;
          }
        } else {
          _tmp$22 = j + 1 | 0;
          continue;
        }
      } else {
        _M0MPC15array12MutArrayView4swapGUdsEE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
        return { _0: i, _1: partitioned };
      }
    }
  }
  function _M0FPB28fixed__try__bubble__sort__byGUdsEE(arr, cmp) {
    const _bind$3 = arr.end - arr.start | 0;
    let _tmp$22 = 1;
    let _tmp$23 = 0;
    while (true) {
      const i = _tmp$22;
      const tries = _tmp$23;
      if (i < _bind$3) {
        let sorted;
        let _tmp$24 = i;
        let _tmp$25 = true;
        while (true) {
          const j = _tmp$24;
          const sorted$2 = _tmp$25;
          if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
            _M0MPC15array12MutArrayView4swapGUdsEE(arr, j, j - 1 | 0);
            _tmp$24 = j - 1 | 0;
            _tmp$25 = false;
            continue;
          } else {
            sorted = sorted$2;
            break;
          }
        }
        if (!sorted) {
          const tries$2 = tries + 1 | 0;
          if (tries$2 > 8) {
            return false;
          }
          _tmp$22 = i + 1 | 0;
          _tmp$23 = tries$2;
          continue;
        } else {
          _tmp$22 = i + 1 | 0;
          continue;
        }
      } else {
        return true;
      }
    }
  }
  function _M0FPB22fixed__quick__sort__byGUdsEE(arr, cmp, pred, limit) {
    let _tmp$22 = limit;
    let _tmp$23 = arr;
    let _tmp$24 = pred;
    let _tmp$25 = true;
    let _tmp$26 = true;
    while (true) {
      const limit$2 = _tmp$22;
      const arr$2 = _tmp$23;
      const pred$2 = _tmp$24;
      const was_partitioned = _tmp$25;
      const balanced = _tmp$26;
      const len = arr$2.end - arr$2.start | 0;
      if (len <= 16) {
        if (len >= 2) {
          _M0FPB23fixed__bubble__sort__byGUdsEE(arr$2, cmp);
        }
        return undefined;
      }
      if (limit$2 === 0) {
        _M0FPB21fixed__heap__sort__byGUdsEE(arr$2, cmp);
        return undefined;
      }
      const _bind$3 = _M0FPB24fixed__choose__pivot__byGUdsEE(arr$2, cmp);
      const _pivot_index = _bind$3._0;
      const _likely_sorted = _bind$3._1;
      if (was_partitioned && (balanced && _likely_sorted)) {
        if (_M0FPB28fixed__try__bubble__sort__byGUdsEE(arr$2, cmp)) {
          return undefined;
        }
      }
      const _bind$4 = _M0FPB20fixed__partition__byGUdsEE(arr$2, cmp, _pivot_index);
      const _pivot = _bind$4._0;
      const _partitioned = _bind$4._1;
      const _p = len - _pivot | 0;
      const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
      const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
      if (pred$2 === undefined) {
      } else {
        const _Some = pred$2;
        const _p$2 = _Some;
        if (cmp(_p$2, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
          let i;
          let _tmp$27 = _pivot;
          while (true) {
            const i$2 = _tmp$27;
            if (i$2 < len && cmp(_p$2, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
              _tmp$27 = i$2 + 1 | 0;
              continue;
            } else {
              i = i$2;
              break;
            }
          }
          _tmp$22 = limit$3;
          _tmp$23 = _M0MPC15array12MutArrayView5sliceGUdsEE(arr$2, i, len);
          _tmp$25 = _partitioned;
          _tmp$26 = balanced$2;
          continue;
        }
      }
      const left = _M0MPC15array12MutArrayView5sliceGUdsEE(arr$2, 0, _pivot);
      const right = _M0MPC15array12MutArrayView5sliceGUdsEE(arr$2, _pivot + 1 | 0, len);
      if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
        _M0FPB22fixed__quick__sort__byGUdsEE(left, cmp, pred$2, limit$3);
        _tmp$22 = limit$3;
        _tmp$23 = right;
        _tmp$24 = arr$2.buf[arr$2.start + _pivot | 0];
        _tmp$25 = _partitioned;
        _tmp$26 = balanced$2;
        continue;
      } else {
        _M0FPB22fixed__quick__sort__byGUdsEE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
        _tmp$22 = limit$3;
        _tmp$23 = left;
        _tmp$25 = _partitioned;
        _tmp$26 = balanced$2;
        continue;
      }
    }
  }
  function _M0MPC15array12MutArrayView8sort__byGUdsEE(self, cmp) {
    _M0FPB22fixed__quick__sort__byGUdsEE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
  }
  function _M0MPC15array5Array8sort__byGUdsEE(self, cmp) {
    const _bind$3 = self.length;
    _M0MPC15array12MutArrayView8sort__byGUdsEE(new _M0TPB12MutArrayViewGUdsEE(self, 0, _bind$3), cmp);
  }
  function _M0MPC15array5Array5clearGRP27mik1e806stlkit4Vec3E(self) {
    _M0MPC15array5Array28unsafe__truncate__to__lengthGRP27mik1e806stlkit4Vec3E(self, 0);
  }
  function _M0MPC15array5Array4lastGsE(self) {
    if (self.length === 0) {
      return undefined;
    } else {
      const _last = self[self.length - 1 | 0];
      return _last;
    }
  }
  function _M0MPC15array5Array4joinGsE(self, separator) {
    return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
  }
  function _M0FPC28encoding4utf814encode_2einner(str, bom) {
    return _M0FPC28encoding4utf816encode__utf8__js(str.str, str.start, str.end - str.start | 0, bom);
  }
  function _M0FPC28encoding4utf821decode__lossy_2einner(bytes, ignore_bom) {
    return _M0FPC28encoding4utf823decode__utf8__lossy__js(bytes.buf, bytes.start, bytes.end - bytes.start | 0, !ignore_bom);
  }
  function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
    if (required < len) {
      $panic();
    }
    const start = current <= 0 ? 1 : current;
    let _tmp$22 = start;
    while (true) {
      const space = _tmp$22;
      if (space >= required) {
        return space;
      }
      const next = Math.imul(space, 2) | 0;
      if (next <= space) {
        return required;
      }
      _tmp$22 = next;
      continue;
    }
  }
  function _M0MPC16buffer6Buffer4grow(self, required) {
    const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
    const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
    self.data = new_data;
  }
  function _M0MPC16buffer6Buffer9to__bytes(self) {
    return _M0MPC15bytes5Bytes11from__array(_M0MPC15array10FixedArray21clamped__view_2einnerGyE(self.data, 0, self.len));
  }
  function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
    const initial = size_hint < 1 ? 1 : size_hint;
    const data = $makebytes(initial, 0);
    return new _M0TPC16buffer6Buffer(data, 0);
  }
  function _M0MPC16buffer6Buffer11write__byte(self, value) {
    if (self.len >= self.data.length) {
      _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
    }
    self.data[self.len] = value;
    self.len = self.len + 1 | 0;
  }
  function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
  }
  function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
    if (base === 0) {
      _L: {
        let rest;
        _L$2: {
          let rest$2;
          _L$3: {
            let rest$3;
            _L$4: {
              if ((view.end - view.start | 0) >= 2) {
                const _x = view.str.charCodeAt(view.start);
                if (_x === 48) {
                  const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                  switch (_x$2) {
                    case 120: {
                      const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$3 = _x$3;
                      break _L$4;
                    }
                    case 88: {
                      const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$3 = _x$4;
                      break _L$4;
                    }
                    case 111: {
                      const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$2 = _x$5;
                      break _L$3;
                    }
                    case 79: {
                      const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$2 = _x$6;
                      break _L$3;
                    }
                    case 98: {
                      const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest = _x$7;
                      break _L$2;
                    }
                    case 66: {
                      const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest = _x$8;
                      break _L$2;
                    }
                    default: {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
    } else {
      _L: {
        let rest;
        _L$2: {
          let rest$2;
          _L$3: {
            let rest$3;
            _L$4: {
              if ((view.end - view.start | 0) >= 2) {
                const _x = view.str.charCodeAt(view.start);
                if (_x === 48) {
                  const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                  switch (_x$2) {
                    case 120: {
                      const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 16) {
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        break _L;
                      }
                    }
                    case 88: {
                      const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 16) {
                        rest$3 = _x$4;
                        break _L$4;
                      } else {
                        break _L;
                      }
                    }
                    case 111: {
                      const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 8) {
                        rest$2 = _x$5;
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                    case 79: {
                      const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 8) {
                        rest$2 = _x$6;
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                    case 98: {
                      const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 2) {
                        rest = _x$7;
                        break _L$2;
                      } else {
                        break _L;
                      }
                    }
                    case 66: {
                      const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 2) {
                        rest = _x$8;
                        break _L$2;
                      } else {
                        break _L;
                      }
                    }
                    default: {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
      }
      return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
    }
  }
  function _M0FPC28internal7strconv10range__errGuE() {
    return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGdE() {
    return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGiE() {
    return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGuE() {
    return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGlE() {
    return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
    let _tmp$22 = self;
    let _tmp$23 = init;
    let _tmp$24 = 0;
    while (true) {
      const str = _tmp$22;
      const ret = _tmp$23;
      const len = _tmp$24;
      _L: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          if (_x >= 48 && _x <= 57) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp$22 = _x$2;
            _tmp$23 = f(_x - 48 | 0, ret);
            _tmp$24 = len + 1 | 0;
            continue;
          } else {
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              _tmp$22 = _x$2;
              continue;
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
      return { _0: str, _1: ret, _2: len };
    }
  }
  function _M0FPC28internal7strconv13parse__digits(s, x) {
    return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
  }
  function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
    let x$2 = x;
    let len = 0;
    let _tmp$22 = s;
    while (true) {
      const s$2 = _tmp$22;
      let s$3;
      _L: {
        if ((s$2.end - s$2.start | 0) >= 1) {
          const _x = s$2.str.charCodeAt(s$2.start);
          if (_x >= 48 && _x <= 57) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
              len = len + 1 | 0;
              x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
              _tmp$22 = _x$2;
              continue;
            } else {
              s$3 = s$2;
              break _L;
            }
          } else {
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
              _tmp$22 = _x$2;
              continue;
            } else {
              s$3 = s$2;
              break _L;
            }
          }
        } else {
          s$3 = s$2;
          break _L;
        }
      }
      return { _0: s$3, _1: x$2, _2: len };
    }
  }
  function _M0FPC28internal7strconv17parse__scientific(s) {
    let s$2 = s;
    let neg_exp = false;
    let rest;
    let ch;
    _L: {
      _L$2: {
        const _bind$3 = s$2;
        if ((_bind$3.end - _bind$3.start | 0) >= 1) {
          const _x = _bind$3.str.charCodeAt(_bind$3.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
              rest = _x$2;
              ch = _x;
              break _L$2;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
              rest = _x$3;
              ch = _x;
              break _L$2;
            }
          }
        }
        break _L;
      }
      neg_exp = ch === 45;
      s$2 = rest;
    }
    _L$2: {
      const _bind$3 = s$2;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        if (_x >= 48 && _x <= 57) {
          const _bind$4 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
          const _s = _bind$4._0;
          const _exp_num = _bind$4._1;
          return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    return undefined;
  }
  function _M0FPC28internal7strconv13parse__number(s) {
    let s$2;
    let negative;
    _L: {
      let rest;
      _L$2: {
        if ((s.end - s.start | 0) >= 1) {
          const _x = s.str.charCodeAt(s.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
              s$2 = _x$2;
              negative = true;
              break _L;
            }
            case 43: {
              const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
              rest = _x$3;
              break _L$2;
            }
            default: {
              rest = s;
              break _L$2;
            }
          }
        } else {
          rest = s;
          break _L$2;
        }
      }
      s$2 = rest;
      negative = false;
      break _L;
    }
    if ((s$2.end - s$2.start | 0) === 0) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    }
    const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
    const _s = _bind$3._0;
    const _mantissa = _bind$3._1;
    const _consumed = _bind$3._2;
    let mantissa = _mantissa;
    let s$3 = _s;
    let n_digits = _consumed;
    let n_after_dot = 0;
    let exponent = 0n;
    const _bind$4 = s$3;
    if ((_bind$4.end - _bind$4.start | 0) >= 1) {
      const _x = _bind$4.str.charCodeAt(_bind$4.start);
      if (_x === 46) {
        const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
        s$3 = _x$2;
        const _bind$5 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
        const _new_s = _bind$5._0;
        const _new_mantissa = _bind$5._1;
        const _consumed_digit = _bind$5._2;
        s$3 = _new_s;
        mantissa = _new_mantissa;
        n_after_dot = _consumed_digit;
        exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
      }
    }
    n_digits = n_digits + n_after_dot | 0;
    if (n_digits === 0) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    }
    let exp_number = 0n;
    let rest;
    _L$2: {
      _L$3: {
        const _bind$5 = s$3;
        if ((_bind$5.end - _bind$5.start | 0) >= 1) {
          const _x = _bind$5.str.charCodeAt(_bind$5.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
              rest = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
              rest = _x$3;
              break _L$3;
            }
          }
        }
        break _L$2;
      }
      const _bind$5 = _M0FPC28internal7strconv17parse__scientific(rest);
      let _bind$6;
      if (_bind$5 === undefined) {
        return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
      } else {
        const _Some = _bind$5;
        _bind$6 = _Some;
      }
      const _new_s = _bind$6._0;
      const _exp_number_val = _bind$6._1;
      s$3 = _new_s;
      exp_number = _exp_number_val;
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    const _bind$5 = s$3;
    if ((_bind$5.end - _bind$5.start | 0) === 0) {
      if (n_digits <= 19) {
        return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
      }
      n_digits = n_digits - 19 | 0;
      let many_digits = false;
      let _tmp$22 = s.str;
      let _tmp$23 = s.start;
      let _tmp$24 = s.end;
      _L$3: while (true) {
        const s_str = _tmp$22;
        const s_start = _tmp$23;
        const s_end = _tmp$24;
        _L$4: {
          let rest$2;
          let ch;
          _L$5: {
            if ((s_end - s_start | 0) >= 1) {
              const _x = s_str.charCodeAt(s_start);
              switch (_x) {
                case 48: {
                  const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                  rest$2 = _x$2;
                  ch = _x;
                  break _L$5;
                }
                case 46: {
                  const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                  rest$2 = _x$3;
                  ch = _x;
                  break _L$5;
                }
                default: {
                  break _L$4;
                }
              }
            } else {
              break _L$4;
            }
          }
          n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
          _tmp$22 = rest$2.str;
          _tmp$23 = rest$2.start;
          _tmp$24 = rest$2.end;
          continue;
        }
        break;
      }
      let mantissa$2 = mantissa;
      if (n_digits > 0) {
        many_digits = true;
        mantissa$2 = 0n;
        const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
        const _s$2 = _bind$6._0;
        const _new_mantissa = _bind$6._1;
        const _consumed_digit = _bind$6._2;
        mantissa$2 = _new_mantissa;
        let _tmp$25;
        if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
          _tmp$25 = _consumed_digit;
        } else {
          if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
            const _tmp$26 = _s$2.str;
            const _bind$7 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
            let _tmp$27;
            if (_bind$7 === undefined) {
              _tmp$27 = _s$2.end;
            } else {
              const _Some = _bind$7;
              _tmp$27 = _Some;
            }
            const _x = new _M0TPC16string10StringView(_tmp$26, _tmp$27, _s$2.end);
            const _bind$8 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
            const _new_mantissa$2 = _bind$8._1;
            const _consumed_digit$2 = _bind$8._2;
            mantissa$2 = _new_mantissa$2;
            _tmp$25 = _consumed_digit$2;
          } else {
            return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
          }
        }
        exponent = BigInt.asUintN(64, BigInt(_tmp$25));
        exponent = BigInt.asUintN(64, exponent + exp_number);
      }
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
    } else {
      return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
    }
  }
  function _M0FPC28internal7strconv15parse__inf__nan(rest) {
    let pos;
    let rest$2;
    _L: {
      let rest$3;
      _L$2: {
        if ((rest.end - rest.start | 0) >= 1) {
          const _x = rest.str.charCodeAt(rest.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              pos = false;
              rest$2 = _x$2;
              break _L;
            }
            case 43: {
              const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              rest$3 = _x$3;
              break _L$2;
            }
            default: {
              rest$3 = rest;
              break _L$2;
            }
          }
        } else {
          rest$3 = rest;
          break _L$2;
        }
      }
      pos = true;
      rest$2 = rest$3;
      break _L;
    }
    let _cursor_295 = 0;
    const _input_end_297 = rest$2.end - rest$2.start | 0;
    const _start_296 = _cursor_295;
    let _accept_state_298 = -1;
    let _match_end_299 = -1;
    let _state_300 = 2;
    while (true) {
      if (_state_300 !== 14) {
        if (_state_300 < 2) {
          _accept_state_298 = _state_300;
          _match_end_299 = _cursor_295;
        }
        const _tmp$22 = Math.imul(_state_300, 8) | 0;
        let _next_char_303;
        if (_cursor_295 < _input_end_297) {
          const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
          _cursor_295 = _cursor_295 + 1 | 0;
          _next_char_303 = _char_302;
        } else {
          _next_char_303 = -1;
        }
        const _p = _tmp$22 + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
        _state_300 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312[_p];
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = _accept_state_298;
    switch (_bind$3) {
      case 0: {
        _cursor_295 = _match_end_299;
        return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
      }
      case 1: {
        _cursor_295 = _match_end_299;
        return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
      }
      default: {
        _cursor_295 = _start_296;
        return _M0FPC28internal7strconv11syntax__errGdE();
      }
    }
  }
  function _M0FPC28internal7strconv12checked__mul(a, b) {
    if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
      return _M0FPC28internal7strconv12checked__mulN6constrS1163;
    }
    if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
      return b;
    }
    if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
      return a;
    }
    if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
      return undefined;
    }
    if (b === 0n) {
      $panic();
    }
    const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
    if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
      return undefined;
    }
    return BigInt.asUintN(64, a * b);
  }
  function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
    if (!neg) {
      if (base === 10) {
        return 922337203685477581n;
      } else {
        if (base === 16) {
          return 576460752303423488n;
        } else {
          const _tmp$22 = BigInt.asUintN(64, BigInt(base));
          if (_tmp$22 === 0n) {
            $panic();
          }
          return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp$22)) + 1n);
        }
      }
    } else {
      if (base === 10) {
        return 17524406870024074036n;
      } else {
        if (base === 16) {
          return 17870283321406128128n;
        } else {
          const _tmp$22 = BigInt.asUintN(64, BigInt(base));
          if (_tmp$22 === 0n) {
            $panic();
          }
          return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp$22));
        }
      }
    }
  }
  function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
    if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681, 0, _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681.length))) {
      let neg;
      let rest;
      _L: {
        let rest$2;
        _L$2: {
          if ((str.end - str.start | 0) >= 1) {
            const _x = str.str.charCodeAt(str.start);
            switch (_x) {
              case 43: {
                const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
                neg = false;
                rest = _x$2;
                break _L;
              }
              case 45: {
                const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
                neg = true;
                rest = _x$3;
                break _L;
              }
              default: {
                rest$2 = str;
                break _L$2;
              }
            }
          } else {
            rest$2 = str;
            break _L$2;
          }
        }
        neg = false;
        rest = rest$2;
        break _L;
      }
      const _bind$3 = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      const _num_base = _bind$4._0;
      const _rest = _bind$4._1;
      const _allow_underscore = _bind$4._2;
      const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
      let has_digit;
      if ((_rest.end - _rest.start | 0) >= 1) {
        const _x = _rest.str.charCodeAt(_rest.start);
        if (_x >= 48 && _x <= 57) {
          has_digit = true;
        } else {
          if (_x >= 97 && _x <= 122) {
            has_digit = true;
          } else {
            if (_x >= 65 && _x <= 90) {
              has_digit = true;
            } else {
              if ((_rest.end - _rest.start | 0) >= 2) {
                if (_x === 95) {
                  const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                  has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
                } else {
                  has_digit = false;
                }
              } else {
                has_digit = false;
              }
            }
          }
        }
      } else {
        has_digit = false;
      }
      if (has_digit) {
        let _tmp$22;
        let _tmp$23 = _rest;
        let _tmp$24 = 0n;
        let _tmp$25 = _allow_underscore;
        while (true) {
          const rest$2 = _tmp$23;
          const acc = _tmp$24;
          const allow_underscore = _tmp$25;
          let acc$2;
          let rest$3;
          let c;
          _L$2: {
            _L$3: {
              if ((rest$2.end - rest$2.start | 0) === 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  const _bind$5 = _M0FPC28internal7strconv11syntax__errGuE();
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _ok._0;
                  } else {
                    return _bind$5;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$26 = rest$2.str;
                  const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$27;
                  if (_bind$5 === undefined) {
                    _tmp$27 = rest$2.end;
                  } else {
                    const _Some = _bind$5;
                    _tmp$27 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$26, _tmp$27, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$3;
                }
              } else {
                if ((rest$2.end - rest$2.start | 0) >= 1) {
                  const _x = rest$2.str.charCodeAt(rest$2.start);
                  if (_x === 95) {
                    if (allow_underscore === false) {
                      const _bind$5 = _M0FPC28internal7strconv11syntax__errGuE();
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                    } else {
                      const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                      _tmp$23 = _x$2;
                      _tmp$25 = false;
                      continue;
                    }
                  } else {
                    const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                    const _tmp$26 = rest$2.str;
                    const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                    let _tmp$27;
                    if (_bind$5 === undefined) {
                      _tmp$27 = rest$2.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$27 = _Some;
                    }
                    const _x$2 = new _M0TPC16string10StringView(_tmp$26, _tmp$27, rest$2.end);
                    acc$2 = acc;
                    rest$3 = _x$2;
                    c = _c;
                    break _L$3;
                  }
                } else {
                  _tmp$22 = acc;
                  break;
                }
              }
              break _L$2;
            }
            const c$2 = c;
            let d;
            if (c$2 >= 48 && c$2 <= 57) {
              d = c$2 - 48 | 0;
            } else {
              if (c$2 >= 97 && c$2 <= 122) {
                d = c$2 + -87 | 0;
              } else {
                if (c$2 >= 65 && c$2 <= 90) {
                  d = c$2 + -55 | 0;
                } else {
                  const _bind$5 = _M0FPC28internal7strconv11syntax__errGiE();
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    d = _ok._0;
                  } else {
                    return _bind$5;
                  }
                }
              }
            }
            if (d < _num_base) {
              if (neg) {
                if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                    _tmp$23 = rest$3;
                    _tmp$24 = next_acc;
                    _tmp$25 = true;
                    continue;
                  } else {
                    const _bind$5 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _ok._0;
                    } else {
                      return _bind$5;
                    }
                  }
                } else {
                  const _bind$5 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _ok._0;
                  } else {
                    return _bind$5;
                  }
                }
              } else {
                if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                    _tmp$23 = rest$3;
                    _tmp$24 = next_acc;
                    _tmp$25 = true;
                    continue;
                  } else {
                    const _bind$5 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _ok._0;
                    } else {
                      return _bind$5;
                    }
                  }
                } else {
                  const _bind$5 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _ok._0;
                  } else {
                    return _bind$5;
                  }
                }
              }
            } else {
              const _bind$5 = _M0FPC28internal7strconv11syntax__errGuE();
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
            }
          }
          continue;
        }
        return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_tmp$22);
      } else {
        return _M0FPC28internal7strconv11syntax__errGlE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  }
  function _M0FPC28internal7strconv18parse__int_2einner(str, base) {
    const _bind$3 = _M0FPC28internal7strconv20parse__int64_2einner(str, base);
    let n;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      n = _ok._0;
    } else {
      return _bind$3;
    }
    if (BigInt.asIntN(64, n) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n) > BigInt.asIntN(64, 2147483647n)) {
      const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
    }
    return new _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(Number(BigInt.asIntN(32, n)) | 0);
  }
  function _M0FPC28internal7strconv17check__underscore(str) {
    if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
      let rest;
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            rest = _x$2;
            break;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            rest = _x$3;
            break;
          }
          default: {
            rest = str;
          }
        }
      } else {
        rest = str;
      }
      let rest$2;
      let allow_underscore;
      let hex;
      _L: {
        let _cursor_213 = 0;
        const _input_end_215 = rest.end - rest.start | 0;
        const _start_214 = _cursor_213;
        let _accept_state_216 = -1;
        let _match_end_217 = -1;
        let _state_218 = 3;
        while (true) {
          if (_state_218 !== 5) {
            if (_state_218 < 3) {
              _accept_state_216 = _state_218;
              _match_end_217 = _cursor_213;
            }
            const _tmp$22 = Math.imul(_state_218, 5) | 0;
            let _next_char_221;
            if (_cursor_213 < _input_end_215) {
              const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
              _cursor_213 = _cursor_213 + 1 | 0;
              _next_char_221 = _char_220;
            } else {
              _next_char_221 = -1;
            }
            const _p = _tmp$22 + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0;
            _state_218 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230[_p];
            continue;
          } else {
            break;
          }
        }
        const _bind$3 = _accept_state_216;
        switch (_bind$3) {
          case 0: {
            _cursor_213 = _match_end_217;
            const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
            rest$2 = rest$3;
            allow_underscore = true;
            hex = false;
            break _L;
          }
          case 1: {
            _cursor_213 = _match_end_217;
            const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
            rest$2 = rest$4;
            allow_underscore = true;
            hex = false;
            break _L;
          }
          case 2: {
            _cursor_213 = _match_end_217;
            const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
            rest$2 = rest$5;
            allow_underscore = true;
            hex = true;
            break _L;
          }
          default: {
            _cursor_213 = _start_214;
            rest$2 = rest;
            allow_underscore = false;
            hex = false;
            break _L;
          }
        }
      }
      let _tmp$22 = rest$2.str;
      let _tmp$23 = rest$2.start;
      let _tmp$24 = rest$2.end;
      let _tmp$25 = allow_underscore;
      let _tmp$26 = false;
      while (true) {
        const rest_str = _tmp$22;
        const rest_start = _tmp$23;
        const rest_end = _tmp$24;
        const allow_underscore$2 = _tmp$25;
        const follow_underscore = _tmp$26;
        let rest$3;
        _L$2: {
          _L$3: {
            let rest$4;
            _L$4: {
              _L$5: {
                let rest$5;
                _L$6: {
                  let rest$6;
                  _L$7: {
                    if ((rest_end - rest_start | 0) === 0) {
                      return true;
                    } else {
                      if ((rest_end - rest_start | 0) === 1) {
                        const _x = rest_str.charCodeAt(rest_start);
                        if (_x === 95) {
                          return false;
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            rest$6 = _x$2;
                            break _L$7;
                          } else {
                            if (_x >= 97 && _x <= 102) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 101) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x >= 65 && _x <= 70) {
                                const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                if (hex) {
                                  rest$5 = _x$2;
                                  break _L$6;
                                } else {
                                  if (_x === 69) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              } else {
                                if (_x === 46) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 43) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (_x === 45) {
                                      if (follow_underscore === true) {
                                        break _L$5;
                                      } else {
                                        const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                        rest$4 = _x$2;
                                        break _L$4;
                                      }
                                    } else {
                                      if (follow_underscore === true) {
                                        break _L$3;
                                      } else {
                                        const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                        let _tmp$27;
                                        if (_bind$3 === undefined) {
                                          _tmp$27 = rest_end;
                                        } else {
                                          const _Some = _bind$3;
                                          _tmp$27 = _Some;
                                        }
                                        const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$27, rest_end);
                                        rest$3 = _x$2;
                                        break _L$2;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        const _x = rest_str.charCodeAt(rest_start);
                        if (_x === 95) {
                          if (allow_underscore$2 === false) {
                            return false;
                          } else {
                            const _bind$3 = rest_start + 1 | 0;
                            _tmp$23 = _bind$3;
                            _tmp$25 = false;
                            _tmp$26 = true;
                            continue;
                          }
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            rest$6 = _x$2;
                            break _L$7;
                          } else {
                            if (_x >= 97 && _x <= 102) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 101) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x >= 65 && _x <= 70) {
                                const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                if (hex) {
                                  rest$5 = _x$2;
                                  break _L$6;
                                } else {
                                  if (_x === 69) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              } else {
                                if (_x === 46) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 43) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (_x === 45) {
                                      if (follow_underscore === true) {
                                        break _L$5;
                                      } else {
                                        const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                        rest$4 = _x$2;
                                        break _L$4;
                                      }
                                    } else {
                                      if (follow_underscore === true) {
                                        break _L$3;
                                      } else {
                                        const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                        let _tmp$27;
                                        if (_bind$3 === undefined) {
                                          _tmp$27 = rest_end;
                                        } else {
                                          const _Some = _bind$3;
                                          _tmp$27 = _Some;
                                        }
                                        const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$27, rest_end);
                                        rest$3 = _x$2;
                                        break _L$2;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  _tmp$22 = rest$6.str;
                  _tmp$23 = rest$6.start;
                  _tmp$24 = rest$6.end;
                  _tmp$25 = true;
                  _tmp$26 = false;
                  continue;
                }
                _tmp$22 = rest$5.str;
                _tmp$23 = rest$5.start;
                _tmp$24 = rest$5.end;
                _tmp$25 = true;
                _tmp$26 = false;
                continue;
              }
              return false;
            }
            _tmp$22 = rest$4.str;
            _tmp$23 = rest$4.start;
            _tmp$24 = rest$4.end;
            _tmp$25 = false;
            _tmp$26 = false;
            continue;
          }
          return false;
        }
        _tmp$22 = rest$3.str;
        _tmp$23 = rest$3.start;
        _tmp$24 = rest$3.end;
        _tmp$25 = false;
        _tmp$26 = false;
        continue;
      }
    } else {
      return true;
    }
  }
  function _M0FPC28internal7strconv14eisel__umul128(a, b) {
    const a_lo = BigInt.asUintN(64, a & 4294967295n);
    const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
    const b_lo = BigInt.asUintN(64, b & 4294967295n);
    const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
    const x = BigInt.asUintN(64, a_lo * b_lo);
    const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
    const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
    const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
    return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
  }
  function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
    if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
      return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
    }
    if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
      return _M0FPC16double14not__a__number;
    }
    const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
    const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
    const pow_hi = table_index >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[table_index] : $oob();
    const _p = table_index + 1 | 0;
    const pow_lo = _p >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[_p] : $oob();
    const pow_exp2 = 1 + (Math.imul(exponent$2, 108853) >> 15) | 0;
    const leading_zeros = $i64_clz(mantissa);
    const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
    let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
    const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
    let product_hi = product.hi;
    let product_lo = product.lo;
    if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
      const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
      let merged_hi = product_hi;
      const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
      if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
        merged_hi = BigInt.asUintN(64, merged_hi + 1n);
      }
      if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
        return _M0FPC16double14not__a__number;
      }
      product_hi = merged_hi;
      product_lo = merged_lo;
    }
    const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
    let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(top_bit + 9 & 63));
    result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
    if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
      return _M0FPC16double14not__a__number;
    }
    result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
      result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
      result_exp2 = result_exp2 + 1 | 0;
    }
    if (result_exp2 <= 0 || result_exp2 >= 2047) {
      return _M0FPC16double14not__a__number;
    }
    const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
    let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
    if (negative) {
      result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
    }
    return $i64_reinterpret_f64(result_bits);
  }
  function _M0MPC28internal7strconv7Decimal9new__priv() {
    return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
  }
  function _M0MPC28internal7strconv7Decimal4trim(self) {
    while (true) {
      let _tmp$22;
      if (self.digits_num > 0) {
        const _tmp$23 = self.digits;
        const _tmp$24 = self.digits_num - 1 | 0;
        const _p = _tmp$24 >>> 0 < _tmp$23.length ? _tmp$23[_tmp$24] : $oob();
        const _p$2 = 0;
        _tmp$22 = _p === _p$2;
      } else {
        _tmp$22 = false;
      }
      if (_tmp$22) {
        self.digits_num = self.digits_num - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (self.digits_num === 0) {
      self.decimal_point = 0;
      return;
    } else {
      return;
    }
  }
  function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
    const d = _M0MPC28internal7strconv7Decimal9new__priv();
    let has_dp = false;
    let has_digits = false;
    let rest;
    _L: {
      _L$2: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              d.negative = true;
              rest = _x$2;
              break;
            }
            case 43: {
              rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              break;
            }
            default: {
              break _L$2;
            }
          }
        } else {
          break _L$2;
        }
        break _L;
      }
      rest = str;
    }
    let rest$2;
    let _tmp$22 = rest;
    while (true) {
      const rest$3 = _tmp$22;
      let rest$4;
      _L$2: {
        _L$3: {
          if ((rest$3.end - rest$3.start | 0) >= 1) {
            const _x = rest$3.str.charCodeAt(rest$3.start);
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              _tmp$22 = _x$2;
              continue;
            } else {
              if (_x === 46) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                if (!has_dp) {
                  has_dp = true;
                  d.decimal_point = d.digits_num;
                  _tmp$22 = _x$2;
                  continue;
                } else {
                  const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              } else {
                if (_x >= 48 && _x <= 57) {
                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                  has_digits = true;
                  if (_x === 48 && d.digits_num === 0) {
                    d.decimal_point = d.decimal_point - 1 | 0;
                    _tmp$22 = _x$2;
                    continue;
                  }
                  if (d.digits_num < d.digits.length) {
                    const _tmp$23 = d.digits;
                    const _tmp$24 = d.digits_num;
                    if (_tmp$24 >>> 0 < _tmp$23.length) {
                      _tmp$23[_tmp$24] = (_x - 48 | 0) & 255;
                    } else {
                      $oob();
                    }
                    d.digits_num = d.digits_num + 1 | 0;
                  } else {
                    if (!has_dp) {
                      d.overflowed = d.overflowed + 1 | 0;
                    }
                    if (_x !== 48) {
                      d.truncated = true;
                    }
                  }
                  _tmp$22 = _x$2;
                  continue;
                } else {
                  rest$4 = rest$3;
                  break _L$3;
                }
              }
            }
          } else {
            rest$4 = rest$3;
            break _L$3;
          }
          break _L$2;
        }
        rest$2 = rest$4;
        break;
      }
      continue;
    }
    if (has_digits) {
      if (!has_dp) {
        d.decimal_point = d.digits_num;
      }
      let rest$3;
      let rest$4;
      _L$2: {
        _L$3: {
          if ((rest$2.end - rest$2.start | 0) >= 1) {
            const _x = rest$2.str.charCodeAt(rest$2.start);
            switch (_x) {
              case 101: {
                const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                rest$4 = _x$2;
                break _L$3;
              }
              case 69: {
                const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                rest$4 = _x$3;
                break _L$3;
              }
              default: {
                rest$3 = rest$2;
              }
            }
          } else {
            rest$3 = rest$2;
          }
          break _L$2;
        }
        let exp_sign = 1;
        let rest$5;
        if ((rest$4.end - rest$4.start | 0) >= 1) {
          const _x = rest$4.str.charCodeAt(rest$4.start);
          switch (_x) {
            case 43: {
              rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
              break;
            }
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
              exp_sign = -1;
              rest$5 = _x$2;
              break;
            }
            default: {
              rest$5 = rest$4;
            }
          }
        } else {
          rest$5 = rest$4;
        }
        _L$4: {
          _L$5: {
            if ((rest$5.end - rest$5.start | 0) >= 1) {
              const _x = rest$5.str.charCodeAt(rest$5.start);
              if (_x >= 48 && _x <= 57) {
                const effective_dp = d.decimal_point + d.overflowed | 0;
                const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
                let exp = 0;
                let rest$6;
                let _tmp$23 = rest$5;
                while (true) {
                  const rest$7 = _tmp$23;
                  let rest$8;
                  _L$6: {
                    if ((rest$7.end - rest$7.start | 0) >= 1) {
                      const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                      if (_x$2 === 95) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        _tmp$23 = _x$3;
                        continue;
                      } else {
                        if (_x$2 >= 48 && _x$2 <= 57) {
                          const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                          if (exp < exp_limit) {
                            exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                            if (exp > exp_limit) {
                              exp = exp_limit;
                            }
                          }
                          _tmp$23 = _x$3;
                          continue;
                        } else {
                          rest$8 = rest$7;
                          break _L$6;
                        }
                      }
                    } else {
                      rest$8 = rest$7;
                      break _L$6;
                    }
                  }
                  rest$6 = rest$8;
                  break;
                }
                d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
                rest$3 = rest$6;
              } else {
                break _L$5;
              }
            } else {
              break _L$5;
            }
            break _L$4;
          }
          const _bind$3 = _M0FPC28internal7strconv11syntax__errGlE();
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            rest$3 = _ok._0;
          } else {
            return _bind$3;
          }
        }
      }
      if ((rest$3.end - rest$3.start | 0) === 0) {
        _M0MPC28internal7strconv7Decimal4trim(d);
        return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
      } else {
        return _M0FPC28internal7strconv11syntax__errGlE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  }
  function _M0FPC28internal7strconv20parse__decimal__priv(str) {
    return _M0FPC28internal7strconv26parse__decimal__from__view(str);
  }
  function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
    const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
    let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
    const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
    if (negative) {
      bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
    }
    return bits;
  }
  function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
    if (d < 0 || d >= self.digits_num) {
      return false;
    }
    let _tmp$22;
    const _tmp$23 = self.digits;
    if ((d >>> 0 < _tmp$23.length ? _tmp$23[d] : $oob()) === 5) {
      _tmp$22 = (d + 1 | 0) === self.digits_num;
    } else {
      _tmp$22 = false;
    }
    if (_tmp$22) {
      if (self.truncated) {
        return true;
      }
      let _tmp$24;
      if (d > 0) {
        const _tmp$25 = self.digits;
        const _tmp$26 = d - 1 | 0;
        _tmp$24 = ((_tmp$26 >>> 0 < _tmp$25.length ? _tmp$25[_tmp$26] : $oob()) % 2 | 0) !== 0;
      } else {
        _tmp$24 = false;
      }
      return _tmp$24;
    }
    const _tmp$24 = self.digits;
    return (d >>> 0 < _tmp$24.length ? _tmp$24[d] : $oob()) >= 5;
  }
  function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
    if (self.decimal_point > 20) {
      return 18446744073709551615n;
    }
    let _tmp$22 = 0n;
    let _tmp$23 = 0;
    while (true) {
      const n = _tmp$22;
      const i = _tmp$23;
      if (i < self.decimal_point && i < self.digits_num) {
        const _tmp$24 = BigInt.asUintN(64, n * 10n);
        const _tmp$25 = self.digits;
        const _p = i >>> 0 < _tmp$25.length ? _tmp$25[i] : $oob();
        _tmp$22 = BigInt.asUintN(64, _tmp$24 + BigInt.asUintN(64, BigInt(_p)));
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        let n$2;
        let _tmp$24 = n;
        let _tmp$25 = i;
        while (true) {
          const n$3 = _tmp$24;
          const i$2 = _tmp$25;
          if (i$2 < self.decimal_point) {
            _tmp$24 = BigInt.asUintN(64, n$3 * 10n);
            _tmp$25 = i$2 + 1 | 0;
            continue;
          } else {
            n$2 = n$3;
            break;
          }
        }
        return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
      }
    }
  }
  function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
    const new_digits = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._0;
    const cheat_num = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._1;
    const _bind$3 = cheat_num.length;
    let less;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$3) {
        const code_unit = cheat_num.charCodeAt(i);
        if (i >= self.digits_num) {
          less = true;
          break;
        }
        const d = code_unit - 48 | 0;
        const _tmp$23 = self.digits;
        if ((i >>> 0 < _tmp$23.length ? _tmp$23[i] : $oob()) !== d) {
          const _tmp$24 = self.digits;
          less = (i >>> 0 < _tmp$24.length ? _tmp$24[i] : $oob()) < d;
          break;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        less = false;
        break;
      }
    }
    return less ? new_digits - 1 | 0 : new_digits;
  }
  function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
    const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
    let read_index = self.digits_num;
    let write_index = self.digits_num + new_digits | 0;
    let acc = 0n;
    read_index = read_index - 1 | 0;
    while (true) {
      if (read_index >= 0) {
        const _tmp$22 = self.digits;
        const _tmp$23 = read_index;
        const _p = _tmp$23 >>> 0 < _tmp$22.length ? _tmp$22[_tmp$23] : $oob();
        const d = BigInt.asUintN(64, BigInt(_p));
        acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
        if (10n === 0n) {
          $panic();
        }
        const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
        const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
        write_index = write_index - 1 | 0;
        if (write_index < self.digits.length) {
          const _tmp$24 = self.digits;
          const _tmp$25 = write_index;
          if (_tmp$25 >>> 0 < _tmp$24.length) {
            _tmp$24[_tmp$25] = rem & 255;
          } else {
            $oob();
          }
        } else {
          if (rem !== 0) {
            self.truncated = true;
          }
        }
        acc = quo;
        read_index = read_index - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
        if (10n === 0n) {
          $panic();
        }
        const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
        const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
        write_index = write_index - 1 | 0;
        if (write_index < self.digits.length) {
          const _tmp$22 = self.digits;
          const _tmp$23 = write_index;
          if (_tmp$23 >>> 0 < _tmp$22.length) {
            _tmp$22[_tmp$23] = rem & 255;
          } else {
            $oob();
          }
        } else {
          if (rem !== 0) {
            self.truncated = true;
          }
        }
        acc = quo;
        continue;
      } else {
        break;
      }
    }
    self.digits_num = self.digits_num + new_digits | 0;
    if (self.digits_num > self.digits.length) {
      self.digits_num = self.digits.length;
    }
    self.decimal_point = self.decimal_point + new_digits | 0;
    _M0MPC28internal7strconv7Decimal4trim(self);
  }
  function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
    let read_index = 0;
    let write_index = 0;
    let acc = 0n;
    while (true) {
      if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
        if (read_index >= self.digits_num) {
          while (true) {
            if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
              acc = BigInt.asUintN(64, acc * 10n);
              read_index = read_index + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break;
        }
        const _tmp$22 = self.digits;
        const _tmp$23 = read_index;
        const d = _tmp$23 >>> 0 < _tmp$22.length ? _tmp$22[_tmp$23] : $oob();
        acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
        read_index = read_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
    const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
    while (true) {
      if (read_index < self.digits_num) {
        const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
        const _tmp$22 = self.digits;
        const _tmp$23 = write_index;
        if (_tmp$23 >>> 0 < _tmp$22.length) {
          _tmp$22[_tmp$23] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
        acc = BigInt.asUintN(64, acc & mask);
        const _tmp$24 = self.digits;
        const _tmp$25 = read_index;
        const d = _tmp$25 >>> 0 < _tmp$24.length ? _tmp$24[_tmp$25] : $oob();
        acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
        read_index = read_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
        const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
        if (write_index < self.digits.length) {
          const _tmp$22 = self.digits;
          const _tmp$23 = write_index;
          if (_tmp$23 >>> 0 < _tmp$22.length) {
            _tmp$22[_tmp$23] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
          } else {
            $oob();
          }
          write_index = write_index + 1 | 0;
        } else {
          if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
            self.truncated = true;
          }
        }
        acc = BigInt.asUintN(64, acc & mask);
        acc = BigInt.asUintN(64, acc * 10n);
        continue;
      } else {
        break;
      }
    }
    self.digits_num = write_index;
    _M0MPC28internal7strconv7Decimal4trim(self);
  }
  function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
    if (self.digits_num === 0) {
      return undefined;
    }
    let s$2 = s;
    if (s$2 > 0) {
      while (true) {
        if (s$2 > 59) {
          _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
          s$2 = s$2 - 59 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
    }
    if (s$2 < 0) {
      while (true) {
        if (s$2 < -59) {
          _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
          s$2 = s$2 + 59 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
      return;
    } else {
      return;
    }
  }
  function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
    let exponent = 0;
    let mantissa = 0n;
    const effective_dp = self.decimal_point + self.overflowed | 0;
    if (self.digits_num === 0 || effective_dp < -330) {
      mantissa = 0n;
      exponent = _M0FPC28internal7strconv12double__info.bias;
      const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
    }
    if (self.decimal_point > 310) {
      const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
    }
    self.decimal_point = self.decimal_point + self.overflowed | 0;
    while (true) {
      if (self.decimal_point > 0) {
        let n = 0;
        if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
          n = 60;
        } else {
          const _p = self.decimal_point;
          n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
        }
        _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
        exponent = exponent + n | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      let _tmp$22;
      if (self.decimal_point < 0) {
        _tmp$22 = true;
      } else {
        let _tmp$23;
        if (self.decimal_point === 0) {
          const _tmp$24 = self.digits;
          _tmp$23 = (0 >>> 0 < _tmp$24.length ? _tmp$24[0] : $oob()) < 5;
        } else {
          _tmp$23 = false;
        }
        _tmp$22 = _tmp$23;
      }
      if (_tmp$22) {
        let n = 0;
        if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
          n = 60;
        } else {
          const _p = -self.decimal_point | 0;
          n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
        }
        _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
        exponent = exponent - n | 0;
        continue;
      } else {
        break;
      }
    }
    exponent = exponent - 1 | 0;
    if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
      const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
    }
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
    }
    _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
    mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
    if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
      mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
      exponent = exponent + 1 | 0;
      if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
        const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
      }
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
      exponent = _M0FPC28internal7strconv12double__info.bias;
    }
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
    const _p = exponent & 31;
    return _p >>> 0 < _M0FPC28internal7strconv5table.length ? _M0FPC28internal7strconv5table[_p] : $oob();
  }
  function _M0MPC28internal7strconv6Number14is__fast__path(self) {
    return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
  }
  function _M0MPC28internal7strconv6Number15try__fast__path(self) {
    if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
      let value;
      if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
        const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
        value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
      } else {
        const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
        const _tmp$22 = self.mantissa;
        const _p = Number(BigInt.asIntN(32, shift)) | 0;
        const _bind$3 = _M0FPC28internal7strconv12checked__mul(_tmp$22, _p >>> 0 < _M0FPC28internal7strconv10int__pow10.length ? _M0FPC28internal7strconv10int__pow10[_p] : $oob());
        if (_bind$3 === undefined) {
          return _M0DTPC16option6OptionGdE4None__;
        } else {
          const _Some = _bind$3;
          const _mantissa = _Some;
          if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
            return _M0DTPC16option6OptionGdE4None__;
          }
          value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
        }
      }
      if (self.negative) {
        value = -value;
      }
      return new _M0DTPC16option6OptionGdE4Some(value);
    } else {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
  function _M0FPC28internal7strconv13parse__double(str) {
    if (!((str.end - str.start | 0) === 0)) {
      if (_M0FPC28internal7strconv17check__underscore(str)) {
        const _bind$3 = _M0FPC28internal7strconv13parse__number(str);
        let _bind$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _bind$4 = _ok._0;
        } else {
          return _bind$3;
        }
        if (_bind$4 === undefined) {
          return _M0FPC28internal7strconv15parse__inf__nan(str);
        } else {
          const _Some = _bind$4;
          const _num = _Some;
          const _bind$5 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
          if (_bind$5.$tag === 1) {
            const _Some$2 = _bind$5;
            const _value = _Some$2._0;
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
          } else {
            const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
            if (fast !== fast) {
              const _bind$6 = _M0FPC28internal7strconv20parse__decimal__priv(str);
              let _tmp$22;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp$22 = _ok._0;
              } else {
                return _bind$6;
              }
              return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp$22);
            } else {
              return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
            }
          }
        }
      } else {
        return _M0FPC28internal7strconv11syntax__errGdE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
  function _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding) {
    const full_groups = (bytes.end - bytes.start | 0) / 3 | 0;
    const remainder = (bytes.end - bytes.start | 0) % 3 | 0;
    let size_hint = Math.imul(full_groups, 4) | 0;
    if (remainder !== 0) {
      const _tmp$22 = size_hint;
      let _tmp$23;
      if (padding === true) {
        _tmp$23 = 4;
      } else {
        _tmp$23 = remainder + 1 | 0;
      }
      size_hint = _tmp$22 + _tmp$23 | 0;
    }
    const builder = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint);
    const _bind$3 = bytes.buf;
    const _bind$4 = bytes.start;
    const _bind$5 = bytes.end;
    let _tmp$22 = _bind$4;
    while (true) {
      const remaining_start = _tmp$22;
      if ((_bind$5 - remaining_start | 0) >= 3) {
        const _b0 = _bind$3[remaining_start];
        const _b1 = _bind$3[remaining_start + 1 | 0];
        const _b2 = _bind$3[remaining_start + 2 | 0];
        const _bind$6 = remaining_start + 3 | 0;
        const n = _b0 << 16 | _b1 << 8 | _b2;
        const _tmp$23 = $bytes_literal$1;
        const _tmp$24 = n >> 18 & 63;
        const _p = _tmp$24 >>> 0 < _tmp$23.length ? _tmp$23[_tmp$24] : $oob();
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _p);
        const _tmp$25 = $bytes_literal$1;
        const _tmp$26 = n >> 12 & 63;
        const _p$2 = _tmp$26 >>> 0 < _tmp$25.length ? _tmp$25[_tmp$26] : $oob();
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$2);
        const _tmp$27 = $bytes_literal$1;
        const _tmp$28 = n >> 6 & 63;
        const _p$3 = _tmp$28 >>> 0 < _tmp$27.length ? _tmp$27[_tmp$28] : $oob();
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$3);
        const _tmp$29 = $bytes_literal$1;
        const _tmp$30 = n & 63;
        const _p$4 = _tmp$30 >>> 0 < _tmp$29.length ? _tmp$29[_tmp$30] : $oob();
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$4);
        _tmp$22 = _bind$6;
        continue;
      } else {
        if ((_bind$5 - remaining_start | 0) === 2) {
          const _b0 = _bind$3[remaining_start];
          const _b1 = _bind$3[remaining_start + 1 | 0];
          const n = _b0 << 16 | _b1 << 8;
          const _tmp$23 = $bytes_literal$1;
          const _tmp$24 = n >> 18 & 63;
          const _p = _tmp$24 >>> 0 < _tmp$23.length ? _tmp$23[_tmp$24] : $oob();
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _p);
          const _tmp$25 = $bytes_literal$1;
          const _tmp$26 = n >> 12 & 63;
          const _p$2 = _tmp$26 >>> 0 < _tmp$25.length ? _tmp$25[_tmp$26] : $oob();
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$2);
          const _tmp$27 = $bytes_literal$1;
          const _tmp$28 = n >> 6 & 63;
          const _p$3 = _tmp$28 >>> 0 < _tmp$27.length ? _tmp$27[_tmp$28] : $oob();
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$3);
          if (padding === true) {
            _M0IPB13StringBuilderPB6Logger11write__char(builder, 61);
          }
          break;
        } else {
          if ((_bind$5 - remaining_start | 0) === 1) {
            const _b0 = _bind$3[remaining_start];
            const n = _b0 << 16;
            const _tmp$23 = $bytes_literal$1;
            const _tmp$24 = n >> 18 & 63;
            const _p = _tmp$24 >>> 0 < _tmp$23.length ? _tmp$23[_tmp$24] : $oob();
            _M0IPB13StringBuilderPB6Logger11write__char(builder, _p);
            const _tmp$25 = $bytes_literal$1;
            const _tmp$26 = n >> 12 & 63;
            const _p$2 = _tmp$26 >>> 0 < _tmp$25.length ? _tmp$25[_tmp$26] : $oob();
            _M0IPB13StringBuilderPB6Logger11write__char(builder, _p$2);
            if (padding === true) {
              _M0IPB13StringBuilderPB6Logger13write__string(builder, "==");
            }
            break;
          } else {
            break;
          }
        }
      }
    }
    return builder.val;
  }
  function _M0FPC28encoding6base6414encode_2einner(bytes, padding) {
    return _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding);
  }
  function _M0FPC28encoding6base6413base64__value(code_unit) {
    return code_unit >= 65 && code_unit <= 90 ? code_unit - 65 | 0 : code_unit >= 97 && code_unit <= 122 ? (code_unit - 97 | 0) + 26 | 0 : code_unit >= 48 && code_unit <= 57 ? (code_unit - 48 | 0) + 52 | 0 : code_unit === 43 ? 62 : code_unit === 47 ? 63 : code_unit === 32 ? -3 : code_unit === 10 ? -3 : code_unit === 13 ? -3 : code_unit === 9 ? -3 : code_unit === 61 ? -2 : -1;
  }
  function _M0FPC28encoding6base6414decode__scalar(text, ignore_whitespace) {
    const buffer = _M0MPC16buffer6Buffer14Buffer_2einner(Math.imul((text.end - text.start | 0) / 4 | 0, 3) | 0);
    const quartet = $make_array_len_and_init(4, 0);
    let count = 0;
    const _bind$3 = text.end - text.start | 0;
    let _tmp$22 = 0;
    _L: while (true) {
      const i = _tmp$22;
      if (i < _bind$3) {
        const code_unit = text.str.charCodeAt(text.start + i | 0);
        _L$2: {
          const _bind$4 = _M0FPC28encoding6base6413base64__value(code_unit);
          switch (_bind$4) {
            case -3: {
              if (ignore_whitespace) {
                break _L$2;
              } else {
                return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
              }
            }
            case -2: {
              if (count < 2) {
                return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
              } else {
                const _tmp$23 = count;
                if (_tmp$23 >>> 0 < quartet.length) {
                  quartet[_tmp$23] = -2;
                } else {
                  $oob();
                }
                count = count + 1 | 0;
                if (count === 4) {
                  count = 0;
                  if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) === -2) {
                    const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                    _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                    if (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) === 0) {
                    } else {
                      return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                    }
                  } else {
                    const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                    const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
                    if (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) === 0) {
                      _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                      _M0MPC16buffer6Buffer11write__byte(buffer, b1);
                    } else {
                      return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                    }
                  }
                  if (ignore_whitespace) {
                    const _bind$5 = _M0MPC15array9ArrayView21clamped__view_2einnerGkE(_M0MPC16string10StringView11code__units(text), i + 1 | 0, undefined);
                    const _bind$6 = _bind$5.end - _bind$5.start | 0;
                    let _tmp$24 = 0;
                    while (true) {
                      const _ = _tmp$24;
                      if (_ < _bind$6) {
                        const code_unit$2 = _bind$5.buf[_bind$5.start + _ | 0];
                        switch (code_unit$2) {
                          case 32: {
                            break;
                          }
                          case 10: {
                            break;
                          }
                          case 13: {
                            break;
                          }
                          case 9: {
                            break;
                          }
                          default: {
                            return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                          }
                        }
                        _tmp$24 = _ + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  } else {
                    if ((i + 1 | 0) === (text.end - text.start | 0)) {
                    } else {
                      return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                    }
                  }
                  break _L;
                }
              }
              break;
            }
            case -1: {
              return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
            }
            default: {
              const _tmp$23 = count;
              if (_tmp$23 >>> 0 < quartet.length) {
                quartet[_tmp$23] = _bind$4;
              } else {
                $oob();
              }
              count = count + 1 | 0;
              if (count === 4) {
                count = 0;
                if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) !== -2) {
                  const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                  const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
                  const b2 = (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) << 6 | (3 >>> 0 < quartet.length ? quartet[3] : $oob())) & 255;
                  _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                  _M0MPC16buffer6Buffer11write__byte(buffer, b1);
                  _M0MPC16buffer6Buffer11write__byte(buffer, b2);
                } else {
                  return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                }
              }
            }
          }
          break _L$2;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = count;
    switch (_bind$4) {
      case 1: {
        return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
      }
      case 2: {
        const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
        if (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) === 0) {
          _M0MPC16buffer6Buffer11write__byte(buffer, b0);
        } else {
          return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
        }
        break;
      }
      case 3: {
        if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) !== -2) {
          const b0$2 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
          const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
          if (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) === 0) {
            _M0MPC16buffer6Buffer11write__byte(buffer, b0$2);
            _M0MPC16buffer6Buffer11write__byte(buffer, b1);
          } else {
            return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
          }
        } else {
          return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
        }
        break;
      }
    }
    return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok(_M0MPC16buffer6Buffer9to__bytes(buffer));
  }
  function _M0FPC28encoding6base6414decode_2einner(text, ignore_whitespace) {
    return _M0FPC28encoding6base6414decode__scalar(text, ignore_whitespace);
  }
  function _M0FPC14math3sin(_tmp$22) {
    return Math.sin(_tmp$22);
  }
  function _M0FPC14math3cos(_tmp$22) {
    return Math.cos(_tmp$22);
  }
  function _M0FP29Milky20183xml29is__valid__xml__content__char(code) {
    return code === 9 || (code === 10 || (code === 13 || (code >= 32 && code <= 55295 || (code >= 57344 && code <= 65533 || code >= 65536 && code <= 1114111))));
  }
  function _M0FP29Milky20183xml21is__name__start__char(c) {
    const code = c;
    return c === 58 || (c === 95 || (c >= 65 && c <= 90 || (c >= 97 && c <= 122 || (code >= 192 && code <= 214 || (code >= 216 && code <= 246 || (code >= 248 && code <= 767 || (code >= 880 && code <= 893 || (code >= 895 && code <= 8191 || (code >= 8204 && code <= 8205 || (code >= 8304 && code <= 8591 || (code >= 11264 && code <= 12271 || (code >= 12289 && code <= 55295 || (code >= 63744 && code <= 64975 || (code >= 65008 && code <= 65533 || code >= 65536 && code <= 983039))))))))))))));
  }
  function _M0FP29Milky20183xml14is__name__char(c) {
    if (_M0FP29Milky20183xml21is__name__start__char(c)) {
      return true;
    }
    const code = c;
    return c === 45 || (c === 46 || (c >= 48 && c <= 57 || (code === 183 || (code >= 768 && code <= 879 || code >= 8255 && code <= 8256))));
  }
  function _M0FP29Milky20183xml14is__whitespace(c) {
    return c === 32 || (c === 9 || (c === 10 || c === 13));
  }
  function _M0FP29Milky20183xml25is__valid__encoding__name(name) {
    const chars = _M0MPC16string6String9to__array(name);
    if (chars.length === 0) {
      return false;
    }
    const first = _M0MPC15array5Array2atGcE(chars, 0);
    if (!(first >= 65 && first <= 90 || first >= 97 && first <= 122)) {
      return false;
    }
    let _tmp$22 = 1;
    while (true) {
      const i = _tmp$22;
      if (i < chars.length) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        if (!(c >= 65 && c <= 90 || (c >= 97 && c <= 122 || (c >= 48 && c <= 57 || (c === 46 || (c === 95 || c === 45)))))) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0FP29Milky20183xml18is__valid__version(version) {
    const chars = _M0MPC16string6String9to__array(version);
    if (chars.length < 3) {
      return false;
    }
    if (_M0MPC15array5Array2atGcE(chars, 0) !== 49 || _M0MPC15array5Array2atGcE(chars, 1) !== 46) {
      return false;
    }
    if (chars.length < 3) {
      return false;
    }
    let _tmp$22 = 2;
    while (true) {
      const i = _tmp$22;
      if (i < chars.length) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        if (c < 48 || c > 57) {
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0MP29Milky20183xml10XmlElement3get(self, attr_name) {
    const _bind$3 = self.attributes;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const pair = _bind$3[_];
        if (pair.name === attr_name) {
          return pair.value;
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0IP29Milky20183xml12XmlErrorKindPB4Show6output(self, logger) {
    switch (self.$tag) {
      case 4: {
        logger.method_table.method_0(logger.self, "UnexpectedEof");
        return;
      }
      case 3: {
        const _InvalidSyntax = self;
        const _message = _InvalidSyntax._0;
        logger.method_table.method_0(logger.self, "InvalidSyntax(");
        _M0MPB6Logger13write__objectGsE(logger, _message);
        logger.method_table.method_0(logger.self, ")");
        return;
      }
      case 2: {
        const _UnmatchedTag = self;
        const _expected = _UnmatchedTag._0;
        const _found = _UnmatchedTag._1;
        logger.method_table.method_0(logger.self, "UnmatchedTag(expected=");
        _M0MPB6Logger13write__objectGsE(logger, _expected);
        logger.method_table.method_0(logger.self, ", found=");
        _M0MPB6Logger13write__objectGsE(logger, _found);
        logger.method_table.method_0(logger.self, ")");
        return;
      }
      case 1: {
        const _InvalidAttribute = self;
        const _message$2 = _InvalidAttribute._0;
        logger.method_table.method_0(logger.self, "InvalidAttribute(");
        _M0MPB6Logger13write__objectGsE(logger, _message$2);
        logger.method_table.method_0(logger.self, ")");
        return;
      }
      default: {
        const _InvalidEntity = self;
        const _message$3 = _InvalidEntity._0;
        logger.method_table.method_0(logger.self, "InvalidEntity(");
        _M0MPB6Logger13write__objectGsE(logger, _message$3);
        logger.method_table.method_0(logger.self, ")");
        return;
      }
    }
  }
  function _M0IP29Milky20183xml8XmlErrorPB4Show6output(self, logger) {
    const _At = self;
    const _error = _At._0;
    const _span = _At._1;
    _M0MPB6Logger13write__objectGRP29Milky20183xml12XmlErrorKindE(logger, _error);
    logger.method_table.method_0(logger.self, " at ");
    _M0MPB6Logger13write__objectGiE(logger, _span.start.line);
    logger.method_table.method_0(logger.self, ":");
    _M0MPB6Logger13write__objectGiE(logger, _span.start.column);
    logger.method_table.method_0(logger.self, "-");
    _M0MPB6Logger13write__objectGiE(logger, _span.end.line);
    logger.method_table.method_0(logger.self, ":");
    _M0MPB6Logger13write__objectGiE(logger, _span.end.column);
  }
  function _M0MP29Milky20183xml6Reader12from__string(input) {
    const chars = _M0MPC16string6String9to__array(input);
    const start_pos = chars.length > 0 && _M0MPC15array5Array2atGcE(chars, 0) === 65279 ? 1 : 0;
    const _bind$3 = [];
    const _tmp$22 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
    const _bind$4 = [];
    return new _M0TP29Milky20183xml6Reader(chars, start_pos, start_pos, 1, 1, _tmp$22, 262144, _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$4, 0, 0), undefined), [], false, false, false, false, [], [], false, start_pos > 0);
  }
  function _M0MP29Milky20183xml6Reader16source__position(self) {
    return new _M0TP29Milky20183xml14SourcePosition(self.offset, self.line, self.column);
  }
  function _M0FP29Milky20183xml12source__span(start, end) {
    return new _M0TP29Milky20183xml10SourceSpan(start, end);
  }
  function _M0FP29Milky20183xml22is__predefined__entity(name) {
    return name === "lt" || (name === "gt" || (name === "amp" || (name === "quot" || name === "apos")));
  }
  function _M0FP29Milky20183xml22substring__from__chars(chars, start, end) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
  function _M0FP29Milky20183xml20is__valid__xml__char(code) {
    return code === 9 || (code === 10 || (code === 13 || (code >= 32 && code <= 55295 || (code >= 57344 && code <= 65533 || code >= 65536 && code <= 1114111))));
  }
  function _M0FP29Milky20183xml16substring__chars(chars, start, end) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
  function _M0FP29Milky20183xml21parse__decimal__chars(chars, start, end) {
    let result = 0;
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        let digit;
        switch (c) {
          case 48: {
            digit = 0;
            break;
          }
          case 49: {
            digit = 1;
            break;
          }
          case 50: {
            digit = 2;
            break;
          }
          case 51: {
            digit = 3;
            break;
          }
          case 52: {
            digit = 4;
            break;
          }
          case 53: {
            digit = 5;
            break;
          }
          case 54: {
            digit = 6;
            break;
          }
          case 55: {
            digit = 7;
            break;
          }
          case 56: {
            digit = 8;
            break;
          }
          case 57: {
            digit = 9;
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, 0, chars.length)));
          }
        }
        result = (Math.imul(result, 10) | 0) + digit | 0;
        if (result > 1114111) {
          return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, 0, chars.length)));
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE2Ok(result);
  }
  function _M0FP29Milky20183xml17parse__hex__chars(chars, start, end) {
    let result = 0;
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        let digit;
        switch (c) {
          case 48: {
            digit = 0;
            break;
          }
          case 49: {
            digit = 1;
            break;
          }
          case 50: {
            digit = 2;
            break;
          }
          case 51: {
            digit = 3;
            break;
          }
          case 52: {
            digit = 4;
            break;
          }
          case 53: {
            digit = 5;
            break;
          }
          case 54: {
            digit = 6;
            break;
          }
          case 55: {
            digit = 7;
            break;
          }
          case 56: {
            digit = 8;
            break;
          }
          case 57: {
            digit = 9;
            break;
          }
          case 97: {
            digit = 10;
            break;
          }
          case 65: {
            digit = 10;
            break;
          }
          case 98: {
            digit = 11;
            break;
          }
          case 66: {
            digit = 11;
            break;
          }
          case 99: {
            digit = 12;
            break;
          }
          case 67: {
            digit = 12;
            break;
          }
          case 100: {
            digit = 13;
            break;
          }
          case 68: {
            digit = 13;
            break;
          }
          case 101: {
            digit = 14;
            break;
          }
          case 69: {
            digit = 14;
            break;
          }
          case 102: {
            digit = 15;
            break;
          }
          case 70: {
            digit = 15;
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, 0, chars.length)));
          }
        }
        result = (Math.imul(result, 16) | 0) + digit | 0;
        if (result > 1114111) {
          return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, 0, chars.length)));
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGiRP29Milky20183xml12XmlErrorKindE2Ok(result);
  }
  function _M0FP29Milky20183xml14decode__entity(entity) {
    switch (entity) {
      case "&lt;": {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("<");
      }
      case "&gt;": {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(">");
      }
      case "&amp;": {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("&");
      }
      case "&quot;": {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("\"");
      }
      case "&apos;": {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("'");
      }
      default: {
        if (_M0MPC16string6String11has__prefix(entity, new _M0TPC16string10StringView(_M0FP29Milky20183xml14decode__entityN7_2abindS1496, 0, _M0FP29Milky20183xml14decode__entityN7_2abindS1496.length)) && _M0MPC16string6String11has__suffix(entity, new _M0TPC16string10StringView(_M0FP29Milky20183xml14decode__entityN7_2abindS1497, 0, _M0FP29Milky20183xml14decode__entityN7_2abindS1497.length))) {
          const chars = _M0MPC16string6String9to__array(entity);
          const inner_end = chars.length - 1 | 0;
          const first_inner = _M0MPC15array5Array2atGcE(chars, 2);
          let code_point;
          if (first_inner === 120) {
            const _bind$3 = _M0FP29Milky20183xml17parse__hex__chars(chars, 3, inner_end);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              code_point = _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            if (first_inner === 88) {
              return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`hex character reference must use lowercase 'x': ${entity}`));
            } else {
              const _bind$3 = _M0FP29Milky20183xml21parse__decimal__chars(chars, 2, inner_end);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                code_point = _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
          if (_M0FP29Milky20183xml20is__valid__xml__char(code_point)) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(_M0IPC14char4CharPB4Show10to__string(code_point));
          } else {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(entity));
          }
        } else {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(entity));
        }
      }
    }
  }
  function _M0FP29Milky20183xml8unescape(text) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const chars = _M0MPC16string6String9to__array(text);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 38) {
          const start = i;
          i = i + 1 | 0;
          while (true) {
            if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i >= len) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, start, len)));
          }
          const entity = _M0FP29Milky20183xml16substring__chars(chars, start, i + 1 | 0);
          const _bind$3 = _M0FP29Milky20183xml14decode__entity(entity);
          let decoded;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            decoded = _ok._0;
          } else {
            return _bind$3;
          }
          _M0IPB13StringBuilderPB6Logger13write__string(buf, decoded);
          i = i + 1 | 0;
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0MP29Milky20183xml21EntityExpansionBudget7consume(self, amount) {
    if (amount > self.remaining) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("entity expansion limit exceeded"));
    }
    self.remaining = self.remaining - amount | 0;
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml35expand__entity__value__with__budget(value, entities, seen, budget, depth) {
    if (depth > 32) {
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("entity expansion depth exceeded"));
    }
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const chars = _M0MPC16string6String9to__array(value);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        if ((i + 8 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i) === 60 && (_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 33 && (_M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 91 && (_M0MPC15array5Array2atGcE(chars, i + 3 | 0) === 67 && (_M0MPC15array5Array2atGcE(chars, i + 4 | 0) === 68 && (_M0MPC15array5Array2atGcE(chars, i + 5 | 0) === 65 && (_M0MPC15array5Array2atGcE(chars, i + 6 | 0) === 84 && (_M0MPC15array5Array2atGcE(chars, i + 7 | 0) === 65 && _M0MPC15array5Array2atGcE(chars, i + 8 | 0) === 91))))))))) {
          const _bind$3 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 9);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "<![CDATA[");
          i = i + 9 | 0;
          while (true) {
            if (i < len) {
              if ((i + 2 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i) === 93 && (_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 93 && _M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 62))) {
                const _bind$4 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 3);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                _M0IPB13StringBuilderPB6Logger13write__string(buf, "]]>");
                i = i + 3 | 0;
                break;
              }
              const _bind$4 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 1);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          continue;
        }
        if (_M0MPC15array5Array2atGcE(chars, i) === 38) {
          i = i + 1 | 0;
          if (i >= len) {
            const _bind$3 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 38);
            continue;
          }
          if (_M0MPC15array5Array2atGcE(chars, i) === 35) {
            const ref_start = i - 1 | 0;
            i = i + 1 | 0;
            while (true) {
              if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i < len) {
              i = i + 1 | 0;
              const char_ref = _M0FP29Milky20183xml22substring__from__chars(chars, ref_start, i);
              const _bind$3 = _M0FP29Milky20183xml8unescape(char_ref);
              let decoded;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                decoded = _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, decoded.length);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              _M0IPB13StringBuilderPB6Logger13write__string(buf, decoded);
            }
          } else {
            const name_start = i;
            while (true) {
              if (i < len && (_M0MPC15array5Array2atGcE(chars, i) !== 59 && _M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(chars, i)))) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i < len && _M0MPC15array5Array2atGcE(chars, i) === 59) {
              const name = _M0FP29Milky20183xml22substring__from__chars(chars, name_start, i);
              i = i + 1 | 0;
              if (_M0FP29Milky20183xml22is__predefined__entity(name)) {
                const entity = `&${name};`;
                const _bind$3 = _M0FP29Milky20183xml8unescape(entity);
                let decoded;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  decoded = _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, decoded.length);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                _M0IPB13StringBuilderPB6Logger13write__string(buf, decoded);
              } else {
                const _bind$3 = _M0MPB3Map3getGssE(entities, name);
                if (_bind$3 === undefined) {
                  return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`undefined entity reference: &${name};`));
                } else {
                  const _Some = _bind$3;
                  const _entity_value = _Some;
                  if (_M0MPB3Map8containsGsbE(seen, name)) {
                    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`recursive entity reference: &${name};`));
                  }
                  _M0MPB3Map3setGsbE(seen, name, true);
                  const _bind$4 = _M0FP29Milky20183xml35expand__entity__value__with__budget(_entity_value, entities, seen, budget, depth + 1 | 0);
                  let expanded;
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    expanded = _ok._0;
                  } else {
                    return _bind$4;
                  }
                  _M0IPB13StringBuilderPB6Logger13write__string(buf, expanded);
                  _M0MPB3Map6removeGsbE(seen, name);
                }
              }
            } else {
              const _bind$3 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 1);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 38);
              let _tmp$22 = name_start;
              while (true) {
                const j = _tmp$22;
                if (j < i) {
                  const _bind$4 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 1);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                  _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, j));
                  _tmp$22 = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
          }
        } else {
          const _bind$3 = _M0MP29Milky20183xml21EntityExpansionBudget7consume(budget, 1);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0FP29Milky20183xml38expand__entity__value__with__remaining(value, entities, seen, remaining) {
    const budget = new _M0TP29Milky20183xml21EntityExpansionBudget(remaining);
    const _bind$3 = _M0FP29Milky20183xml35expand__entity__value__with__budget(value, entities, seen, budget, 0);
    let expanded;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      expanded = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGUsiERP29Milky20183xml12XmlErrorKindE2Ok({ _0: expanded, _1: budget.remaining });
  }
  function _M0MP29Milky20183xml6Reader21expand__entity__value(self, value) {
    const _bind$3 = [];
    const seen = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$3, 0, 0), undefined);
    const _bind$4 = _M0FP29Milky20183xml38expand__entity__value__with__remaining(value, self.entities, seen, self.entity_expansion_remaining);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _expanded = _bind$5._0;
    const _remaining = _bind$5._1;
    self.entity_expansion_remaining = _remaining;
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(_expanded);
  }
  function _M0MP29Milky20183xml6Reader20push__pending__event(self, event) {
    _M0MPC15array5Array4pushGsE(self.pending_events, event);
  }
  function _M0MP29Milky20183xml6Reader19pop__pending__event(self) {
    return _M0MPC15array5Array6removeGRP29Milky20183xml5EventE(self.pending_events, 0);
  }
  function _M0MP29Milky20183xml6Reader7advance(self) {
    if (self.pos < self.input.length) {
      const c = _M0MPC15array5Array2atGcE(self.input, self.pos);
      self.pos = self.pos + 1 | 0;
      self.offset = self.offset + (c > 65535 ? 2 : 1) | 0;
      if (c === 13) {
        self.line = self.line + 1 | 0;
        self.column = 1;
      } else {
        if (c === 10) {
          if (self.pos < 2 || _M0MPC15array5Array2atGcE(self.input, self.pos - 2 | 0) !== 13) {
            self.line = self.line + 1 | 0;
          }
          self.column = 1;
        } else {
          self.column = self.column + 1 | 0;
        }
      }
      return c;
    } else {
      return -1;
    }
  }
  function _M0MP29Milky20183xml6Reader4peek(self) {
    return self.pos < self.input.length ? _M0MPC15array5Array2atGcE(self.input, self.pos) : -1;
  }
  function _M0MP29Milky20183xml6Reader10read__name(self) {
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("");
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      if (_M0FP29Milky20183xml21is__name__start__char(_c)) {
        _M0MP29Milky20183xml6Reader7advance(self);
        const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
        while (true) {
          const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
          if (_bind$4 === -1) {
            break;
          } else {
            const _Some$2 = _bind$4;
            const _nc = _Some$2;
            if (_M0FP29Milky20183xml14is__name__char(_nc)) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, _nc);
              _M0MP29Milky20183xml6Reader7advance(self);
              continue;
            } else {
              break;
            }
          }
        }
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
      } else {
        if (_M0FP29Milky20183xml14is__name__char(_c)) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`name cannot start with '${_M0IPC14char4CharPB4Show10to__string(_c)}'`));
        } else {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok("");
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader16skip__whitespace(self) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml14is__whitespace(_c)) {
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          return;
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader14read__end__tag(self) {
    _M0MP29Milky20183xml6Reader7advance(self);
    const _bind$3 = _M0MP29Milky20183xml6Reader10read__name(self);
    let name;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      name = _ok._0;
    } else {
      return _bind$3;
    }
    if (name === "") {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("empty end tag name"));
    }
    if (self.tag_stack.length === 0) {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("unexpected end tag, no matching start tag"));
    }
    const _p = _M0MPC15array5Array3popGUsRP29Milky20183xml10SourceSpanEE(self.tag_stack);
    let _tmp$22;
    if (_p === undefined) {
      _tmp$22 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$22 = _p$2;
    }
    const expected = _tmp$22._0;
    if (!(expected === name)) {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`end tag mismatch: expected </${expected}>, found </${name}>`));
    }
    _M0MP29Milky20183xml6Reader16skip__whitespace(self);
    _L: {
      const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$4 === -1) {
        break _L;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x === 62) {
          _M0MP29Milky20183xml6Reader7advance(self);
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind3End(name));
        } else {
          break _L;
        }
      }
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '>' after end tag name"));
  }
  function _M0MP29Milky20183xml6Reader8peek__at(self, offset) {
    const idx = self.pos + offset | 0;
    return idx < self.input.length ? _M0MPC15array5Array2atGcE(self.input, idx) : -1;
  }
  function _M0MP29Milky20183xml6Reader13check__string(self, s) {
    const chars = _M0MPC16string6String9to__array(s);
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < chars.length) {
        _L: {
          _L$2: {
            const _bind$3 = _M0MP29Milky20183xml6Reader8peek__at(self, i);
            if (_bind$3 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$3;
              const _c = _Some;
              if (_c === _M0MPC15array5Array2atGcE(chars, i)) {
                break _L;
              } else {
                break _L$2;
              }
            }
          }
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0MP29Milky20183xml6Reader14read__pi__data(self) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      if (!(self.pos >= self.input.length)) {
        if (_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
        }
        const _bind$3 = _M0MP29Milky20183xml6Reader7advance(self);
        if (_bind$3 === -1) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          const code = _c;
          if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in processing instruction"));
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
  }
  function _M0MP29Milky20183xml6Reader22read__raw__attr__value(self) {
    let quote;
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 34: {
              quote = 34;
              break;
            }
            case 39: {
              quote = 39;
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected quoted attribute value"));
    }
    _M0MP29Milky20183xml6Reader7advance(self);
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      if (!(self.pos >= self.input.length)) {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break;
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          if (_c === quote) {
            _M0MP29Milky20183xml6Reader7advance(self);
            break;
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
            _M0MP29Milky20183xml6Reader7advance(self);
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0MP29Milky20183xml6Reader12skip__string(self, s) {
    const chars = _M0MPC16string6String9to__array(s);
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < chars.length) {
        _L: {
          _L$2: {
            const _bind$3 = _M0MP29Milky20183xml6Reader8peek__at(self, i);
            if (_bind$3 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$3;
              const _c = _Some;
              if (_c === _M0MPC15array5Array2atGcE(chars, i)) {
                break _L;
              } else {
                break _L$2;
              }
            }
          }
          return false;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$23 = 0;
    while (true) {
      const i = _tmp$23;
      if (i < chars.length) {
        _M0MP29Milky20183xml6Reader7advance(self);
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0MP29Milky20183xml6Reader23skip__whitespace__count(self) {
    let count = 0;
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml14is__whitespace(_c)) {
          _M0MP29Milky20183xml6Reader7advance(self);
          count = count + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return count;
  }
  function _M0MP29Milky20183xml6Reader15read__xml__decl(self) {
    if (self.seen_content) {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("XML declaration must be at the start of the document"));
    }
    if (self.tag_stack.length > 0) {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("XML declaration cannot appear inside an element"));
    }
    let version = "";
    let encoding = undefined;
    let standalone = undefined;
    let seen_version = false;
    let seen_encoding = false;
    let seen_standalone = false;
    let need_whitespace = false;
    _M0MP29Milky20183xml6Reader16skip__whitespace(self);
    while (true) {
      if (!_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
        const had_whitespace = _M0MP29Milky20183xml6Reader23skip__whitespace__count(self) > 0;
        if (_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
          break;
        }
        if (need_whitespace && !had_whitespace) {
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required between XML declaration pseudo-attributes"));
        }
        const _bind$3 = _M0MP29Milky20183xml6Reader10read__name(self);
        let attr_name;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          attr_name = _ok._0;
        } else {
          return _bind$3;
        }
        if (attr_name === "") {
          break;
        }
        _M0MP29Milky20183xml6Reader16skip__whitespace(self);
        _L: {
          _L$2: {
            const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$4 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$4;
              const _x = _Some;
              if (_x === 61) {
                _M0MP29Milky20183xml6Reader7advance(self);
              } else {
                break _L$2;
              }
            }
            break _L;
          }
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '=' in XML declaration"));
        }
        _M0MP29Milky20183xml6Reader16skip__whitespace(self);
        const _bind$4 = _M0MP29Milky20183xml6Reader22read__raw__attr__value(self);
        let value;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          value = _ok._0;
        } else {
          return _bind$4;
        }
        switch (attr_name) {
          case "version": {
            if (seen_version) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("duplicate 'version' in XML declaration"));
            }
            if (seen_encoding || seen_standalone) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'version' must come first in XML declaration"));
            }
            if (!_M0FP29Milky20183xml18is__valid__version(value)) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid version: ${value}`));
            }
            seen_version = true;
            version = value;
            break;
          }
          case "encoding": {
            if (seen_encoding) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("duplicate 'encoding' in XML declaration"));
            }
            if (!seen_version) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'version' must come before 'encoding'"));
            }
            if (seen_standalone) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'encoding' must come before 'standalone'"));
            }
            if (!_M0FP29Milky20183xml25is__valid__encoding__name(value)) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid encoding name: ${value}`));
            }
            seen_encoding = true;
            encoding = value;
            break;
          }
          case "standalone": {
            if (seen_standalone) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("duplicate 'standalone' in XML declaration"));
            }
            if (!seen_version) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'version' must come before 'standalone'"));
            }
            let _tmp$22;
            const _p = "yes";
            if (!(value === _p)) {
              const _p$2 = "no";
              _tmp$22 = !(value === _p$2);
            } else {
              _tmp$22 = false;
            }
            if (_tmp$22) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`'standalone' must be 'yes' or 'no', got: ${value}`));
            }
            seen_standalone = true;
            standalone = value;
            break;
          }
          default: {
            let _tmp$23;
            if (attr_name === "VERSION") {
              _tmp$23 = true;
            } else {
              let _tmp$24;
              if (attr_name === "Version") {
                _tmp$24 = true;
              } else {
                let _tmp$25;
                if (_M0MPC16string6String9to__lower(attr_name) === "version") {
                  const _p$2 = "version";
                  _tmp$25 = !(attr_name === _p$2);
                } else {
                  _tmp$25 = false;
                }
                _tmp$24 = _tmp$25;
              }
              _tmp$23 = _tmp$24;
            }
            if (_tmp$23) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'version' must be lowercase in XML declaration"));
            }
            let _tmp$24;
            if (attr_name === "ENCODING") {
              _tmp$24 = true;
            } else {
              let _tmp$25;
              if (attr_name === "Encoding") {
                _tmp$25 = true;
              } else {
                let _tmp$26;
                if (_M0MPC16string6String9to__lower(attr_name) === "encoding") {
                  const _p$2 = "encoding";
                  _tmp$26 = !(attr_name === _p$2);
                } else {
                  _tmp$26 = false;
                }
                _tmp$25 = _tmp$26;
              }
              _tmp$24 = _tmp$25;
            }
            if (_tmp$24) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'encoding' must be lowercase in XML declaration"));
            }
            let _tmp$25;
            if (attr_name === "STANDALONE") {
              _tmp$25 = true;
            } else {
              let _tmp$26;
              if (attr_name === "Standalone") {
                _tmp$26 = true;
              } else {
                let _tmp$27;
                if (_M0MPC16string6String9to__lower(attr_name) === "standalone") {
                  const _p$2 = "standalone";
                  _tmp$27 = !(attr_name === _p$2);
                } else {
                  _tmp$27 = false;
                }
                _tmp$26 = _tmp$27;
              }
              _tmp$25 = _tmp$26;
            }
            if (_tmp$25) {
              return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'standalone' must be lowercase in XML declaration"));
            }
            return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`unknown pseudo-attribute in XML declaration: ${attr_name}`));
          }
        }
        need_whitespace = true;
        continue;
      } else {
        break;
      }
    }
    _M0MP29Milky20183xml6Reader12skip__string(self, "?>");
    const _bind$3 = encoding;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _enc = _Some;
      const enc_upper = _M0MPC16string6String9to__upper(_enc);
      if (enc_upper === "UTF-16" || (enc_upper === "UTF-16LE" || enc_upper === "UTF-16BE")) {
        if (self.input.length > 0 && _M0MPC15array5Array2atGcE(self.input, 0) !== 65279) {
          let all_ascii;
          if (self.input.length < 100) {
            const _p = _M0MPC15array5Array4iterGcE(self.input);
            let _tmp$22;
            while (true) {
              const _p$2 = _M0MPB4Iter4nextGcE(_p);
              if (_p$2 === -1) {
                _tmp$22 = true;
                break;
              } else {
                const _p$3 = _p$2;
                const _p$4 = _p$3;
                if (_p$4 < 128) {
                } else {
                  _tmp$22 = false;
                  break;
                }
                continue;
              }
            }
            all_ascii = _tmp$22;
          } else {
            all_ascii = false;
          }
          if (all_ascii) {
            return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("encoding declared as UTF-16 but content is ASCII/UTF-8"));
          }
        }
      }
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind4Decl(version, encoding, standalone));
  }
  function _M0MP29Milky20183xml6Reader8read__pi(self) {
    _M0MP29Milky20183xml6Reader7advance(self);
    const _bind$3 = _M0MP29Milky20183xml6Reader10read__name(self);
    let target;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      target = _ok._0;
    } else {
      return _bind$3;
    }
    if (target === "") {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("processing instruction target is required"));
    }
    const target_lower = _M0MPC16string6String9to__lower(target);
    if (target_lower === "xml") {
      const _p = "xml";
      if (!(target === _p)) {
        return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("PI target 'xml' is reserved (case-insensitive)"));
      }
      return _M0MP29Milky20183xml6Reader15read__xml__decl(self);
    } else {
      _L: {
        const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$4 === -1) {
          break _L;
        } else {
          const _Some = _bind$4;
          const _c = _Some;
          if (_M0FP29Milky20183xml14is__whitespace(_c)) {
            _M0MP29Milky20183xml6Reader7advance(self);
            const _bind$5 = _M0MP29Milky20183xml6Reader14read__pi__data(self);
            let data;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              data = _ok._0;
            } else {
              return _bind$5;
            }
            _M0MP29Milky20183xml6Reader12skip__string(self, "?>");
            return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind2PI(target, data));
          } else {
            if (_c === 63) {
              if (_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
                _M0MP29Milky20183xml6Reader12skip__string(self, "?>");
                return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind2PI(target, ""));
              } else {
                return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected whitespace or '?>' after PI target"));
              }
            } else {
              break _L;
            }
          }
        }
      }
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected whitespace or '?>' after PI target"));
    }
  }
  function _M0FP29Milky20183xml17decode__char__ref(entity) {
    if (_M0MPC16string6String11has__prefix(entity, new _M0TPC16string10StringView(_M0FP29Milky20183xml17decode__char__refN7_2abindS1611, 0, _M0FP29Milky20183xml17decode__char__refN7_2abindS1611.length)) && _M0MPC16string6String11has__suffix(entity, new _M0TPC16string10StringView(_M0FP29Milky20183xml17decode__char__refN7_2abindS1612, 0, _M0FP29Milky20183xml17decode__char__refN7_2abindS1612.length))) {
      const chars = _M0MPC16string6String9to__array(entity);
      const inner_end = chars.length - 1 | 0;
      const first_inner = _M0MPC15array5Array2atGcE(chars, 2);
      let code_point;
      if (first_inner === 120) {
        const _bind$3 = _M0FP29Milky20183xml17parse__hex__chars(chars, 3, inner_end);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          code_point = _ok._0;
        } else {
          return _bind$3;
        }
      } else {
        if (first_inner === 88) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`hex character reference must use lowercase 'x': ${entity}`));
        } else {
          const _bind$3 = _M0FP29Milky20183xml21parse__decimal__chars(chars, 2, inner_end);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            code_point = _ok._0;
          } else {
            return _bind$3;
          }
        }
      }
      if (_M0FP29Milky20183xml20is__valid__xml__char(code_point)) {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(_M0IPC14char4CharPB4Show10to__string(code_point));
      } else {
        return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(entity));
      }
    } else {
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(entity));
    }
  }
  function _M0FP29Milky20183xml24expand__char__refs__only(text) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const chars = _M0MPC16string6String9to__array(text);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 38 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 35)) {
          const start = i;
          i = i + 2 | 0;
          while (true) {
            if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i >= len) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(_M0FP29Milky20183xml16substring__chars(chars, start, len)));
          }
          const entity = _M0FP29Milky20183xml16substring__chars(chars, start, i + 1 | 0);
          const _bind$3 = _M0FP29Milky20183xml17decode__char__ref(entity);
          let decoded;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            decoded = _ok._0;
          } else {
            return _bind$3;
          }
          _M0IPB13StringBuilderPB6Logger13write__string(buf, decoded);
          i = i + 1 | 0;
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0FP29Milky20183xml23peek__is__nmtoken__char(reader) {
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
    if (_bind$3 === -1) {
      return false;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      return _M0FP29Milky20183xml14is__name__char(_c);
    }
  }
  function _M0FP29Milky20183xml13skip__nmtoken(reader) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml14is__name__char(_c)) {
          _M0MP29Milky20183xml6Reader7advance(reader);
          continue;
        } else {
          return;
        }
      }
    }
  }
  function _M0FP29Milky20183xml8skip__ws(reader) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        _L: {
          if (_c === 32) {
            break _L;
          } else {
            if (_c === 9) {
              break _L;
            } else {
              if (_c === 10) {
                break _L;
              } else {
                if (_c === 13) {
                  break _L;
                } else {
                  return;
                }
              }
            }
          }
        }
        _M0MP29Milky20183xml6Reader7advance(reader);
        continue;
      }
    }
  }
  function _M0FP29Milky20183xml18parse__enumeration(reader) {
    _M0MP29Milky20183xml6Reader7advance(reader);
    _M0FP29Milky20183xml8skip__ws(reader);
    if (!_M0FP29Milky20183xml23peek__is__nmtoken__char(reader)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected name in enumeration"));
    }
    _M0FP29Milky20183xml13skip__nmtoken(reader);
    _L: while (true) {
      _M0FP29Milky20183xml8skip__ws(reader);
      _L$2: {
        _L$3: {
          const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
          if (_bind$3 === -1) {
            break _L$3;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            switch (_x) {
              case 41: {
                _M0MP29Milky20183xml6Reader7advance(reader);
                break _L;
              }
              case 124: {
                _M0MP29Milky20183xml6Reader7advance(reader);
                _M0FP29Milky20183xml8skip__ws(reader);
                if (!_M0FP29Milky20183xml23peek__is__nmtoken__char(reader)) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected name after '|' in enumeration"));
                }
                _M0FP29Milky20183xml13skip__nmtoken(reader);
                break;
              }
              case 44: {
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("enumeration uses '|' separator, not ','"));
              }
              default: {
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '|' or ')' in enumeration"));
      }
      continue;
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml20peek__is__whitespace(reader) {
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
    if (_bind$3 === -1) {
      return false;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      switch (_x) {
        case 32: {
          return true;
        }
        case 9: {
          return true;
        }
        case 10: {
          return true;
        }
        case 13: {
          return true;
        }
        default: {
          return false;
        }
      }
    }
  }
  function _M0FP29Milky20183xml10read__name(reader) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml14is__name__char(_c)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          _M0MP29Milky20183xml6Reader7advance(reader);
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
  function _M0FP29Milky20183xml19read__quoted__value(reader) {
    let quote;
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 34: {
              quote = 34;
              break;
            }
            case 39: {
              quote = 39;
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected quoted value"));
    }
    _M0MP29Milky20183xml6Reader7advance(reader);
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c !== quote) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          _M0MP29Milky20183xml6Reader7advance(reader);
          continue;
        } else {
          break;
        }
      }
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP29Milky20183xml6Reader4peek(reader), quote)) {
      return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("unterminated quoted value"));
    }
    _M0MP29Milky20183xml6Reader7advance(reader);
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0FP29Milky20183xml13parse__attdef(reader, elem_name) {
    const attr_name = _M0FP29Milky20183xml10read__name(reader);
    if (!_M0FP29Milky20183xml20peek__is__whitespace(reader)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required between attribute name and type"));
    }
    _M0FP29Milky20183xml8skip__ws(reader);
    let attr_type;
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          if (_x === 40) {
            const _bind$4 = _M0FP29Milky20183xml18parse__enumeration(reader);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            attr_type = "ENUMERATION";
          } else {
            if (_M0FP29Milky20183xml21is__name__start__char(_x)) {
              const type_name = _M0FP29Milky20183xml10read__name(reader);
              _L$3: {
                _L$4: {
                  switch (type_name) {
                    case "CDATA": {
                      break _L$4;
                    }
                    case "ID": {
                      break _L$4;
                    }
                    case "IDREF": {
                      break _L$4;
                    }
                    case "IDREFS": {
                      break _L$4;
                    }
                    case "ENTITY": {
                      break _L$4;
                    }
                    case "ENTITIES": {
                      break _L$4;
                    }
                    case "NMTOKEN": {
                      break _L$4;
                    }
                    case "NMTOKENS": {
                      break _L$4;
                    }
                    case "NOTATION": {
                      if (!_M0FP29Milky20183xml20peek__is__whitespace(reader)) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required after NOTATION keyword"));
                      }
                      _M0FP29Milky20183xml8skip__ws(reader);
                      if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml13parse__attdefN6constrS2448)) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '(' after NOTATION"));
                      }
                      const _bind$4 = _M0FP29Milky20183xml18parse__enumeration(reader);
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _ok._0;
                      } else {
                        return _bind$4;
                      }
                      attr_type = "NOTATION";
                      break;
                    }
                    default: {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid attribute type: ${type_name}`));
                    }
                  }
                  break _L$3;
                }
                attr_type = type_name;
              }
            } else {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected attribute type"));
    }
    const key = `${elem_name}:${attr_name}`;
    if (!_M0MPB3Map8containsGssE(reader.attr_types, key)) {
      _M0MPB3Map3setGssE(reader.attr_types, key, attr_type);
    }
    if (!_M0FP29Milky20183xml20peek__is__whitespace(reader)) {
      _L$2: {
        _L$3: {
          const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
          if (_bind$3 === -1) {
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            switch (_x) {
              case 34: {
                break _L$3;
              }
              case 39: {
                break _L$3;
              }
              case 35: {
                break _L$3;
              }
              case 62: {
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required between attribute type and default"));
      }
    }
    _M0FP29Milky20183xml8skip__ws(reader);
    _L$2: {
      _L$3: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 35: {
              _M0MP29Milky20183xml6Reader7advance(reader);
              const keyword = _M0FP29Milky20183xml10read__name(reader);
              switch (keyword) {
                case "REQUIRED": {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
                }
                case "IMPLIED": {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
                }
                case "FIXED": {
                  _M0FP29Milky20183xml8skip__ws(reader);
                  const _bind$4 = _M0FP29Milky20183xml19read__quoted__value(reader);
                  let value;
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    value = _ok._0;
                  } else {
                    return _bind$4;
                  }
                  const _bind$5 = _M0MP29Milky20183xml6Reader21expand__entity__value(reader, value);
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _ok._0;
                  } else {
                    return _bind$5;
                  }
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
                }
                default: {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid attribute default keyword: #${keyword}`));
                }
              }
            }
            case 34: {
              break _L$3;
            }
            case 39: {
              break _L$3;
            }
            default: {
              break _L$2;
            }
          }
        }
      }
      const _bind$3 = _M0FP29Milky20183xml19read__quoted__value(reader);
      let value;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        value = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP29Milky20183xml6Reader21expand__entity__value(reader, value);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected attribute default value or keyword"));
  }
  function _M0FP29Milky20183xml21peek__is__name__start(reader) {
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
    if (_bind$3 === -1) {
      return false;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      return _M0FP29Milky20183xml21is__name__start__char(_c);
    }
  }
  function _M0FP29Milky20183xml14parse__attlist(reader) {
    _M0FP29Milky20183xml8skip__ws(reader);
    if (!_M0FP29Milky20183xml21peek__is__name__start(reader)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected element name in ATTLIST"));
    }
    const elem_name = _M0FP29Milky20183xml10read__name(reader);
    while (true) {
      if (!(reader.pos >= reader.input.length)) {
        _M0FP29Milky20183xml8skip__ws(reader);
        _L: {
          _L$2: {
            const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
            if (_bind$3 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              if (_x === 62) {
                _M0MP29Milky20183xml6Reader7advance(reader);
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
              } else {
                if (_M0FP29Milky20183xml21is__name__start__char(_x)) {
                  const _bind$4 = _M0FP29Milky20183xml13parse__attdef(reader, elem_name);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            break _L;
          }
          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected attribute name or '>' in ATTLIST"));
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("unterminated ATTLIST declaration"));
  }
  function _M0FP29Milky20183xml10skip__name(reader) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml14is__name__char(_c)) {
          _M0MP29Milky20183xml6Reader7advance(reader);
          continue;
        } else {
          return;
        }
      }
    }
  }
  function _M0FP29Milky20183xml16skip__occurrence(reader) {
    _L: {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        switch (_x) {
          case 63: {
            break _L;
          }
          case 42: {
            break _L;
          }
          case 43: {
            break _L;
          }
          default: {
            return;
          }
        }
      }
    }
    _M0MP29Milky20183xml6Reader7advance(reader);
  }
  function _M0FP29Milky20183xml20parse__content__spec(reader, _depth) {
    _M0MP29Milky20183xml6Reader7advance(reader);
    _M0FP29Milky20183xml8skip__ws(reader);
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2449)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("empty content model () is not allowed"));
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2450)) {
      _M0MP29Milky20183xml6Reader7advance(reader);
      const keyword = _M0FP29Milky20183xml10read__name(reader);
      const _p = "PCDATA";
      if (!(keyword === _p)) {
        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected PCDATA after #"));
      }
      _M0FP29Milky20183xml8skip__ws(reader);
      _L: {
        _L$2: {
          const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
          if (_bind$3 === -1) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            switch (_x) {
              case 41: {
                _M0MP29Milky20183xml6Reader7advance(reader);
                const _bind$4 = _M0MP29Milky20183xml6Reader4peek(reader);
                if (_bind$4 === -1) {
                } else {
                  const _Some$2 = _bind$4;
                  const _x$2 = _Some$2;
                  switch (_x$2) {
                    case 42: {
                      _M0MP29Milky20183xml6Reader7advance(reader);
                      break;
                    }
                    case 43: {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("(#PCDATA) cannot use '+', only '*' is allowed"));
                    }
                    case 63: {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("(#PCDATA) cannot use '?', only '*' is allowed"));
                    }
                  }
                }
                break;
              }
              case 124: {
                while (true) {
                  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2451)) {
                    _M0MP29Milky20183xml6Reader7advance(reader);
                    _M0FP29Milky20183xml8skip__ws(reader);
                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2452)) {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("#PCDATA must come first in mixed content"));
                    }
                    if (!_M0FP29Milky20183xml21peek__is__name__start(reader)) {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected name in mixed content"));
                    }
                    _M0FP29Milky20183xml10skip__name(reader);
                    _M0FP29Milky20183xml8skip__ws(reader);
                    continue;
                  } else {
                    break;
                  }
                }
                if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2453)) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected ')' to close mixed content"));
                }
                _M0MP29Milky20183xml6Reader7advance(reader);
                _L$3: {
                  _L$4: {
                    const _bind$5 = _M0MP29Milky20183xml6Reader4peek(reader);
                    if (_bind$5 === -1) {
                      break _L$4;
                    } else {
                      const _Some$2 = _bind$5;
                      const _x$2 = _Some$2;
                      switch (_x$2) {
                        case 42: {
                          _M0MP29Milky20183xml6Reader7advance(reader);
                          break;
                        }
                        case 43: {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("mixed content must use '*', not '+'"));
                        }
                        case 63: {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("mixed content must use '*', not '?'"));
                        }
                        default: {
                          break _L$4;
                        }
                      }
                    }
                    break _L$3;
                  }
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("mixed content with alternatives must have '*' occurrence"));
                }
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected ')' or '|' in mixed content"));
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2454)) {
      const saved_pos = reader.pos;
      _M0MP29Milky20183xml6Reader7advance(reader);
      _M0FP29Milky20183xml8skip__ws(reader);
      if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__content__specN6constrS2455)) {
        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("extra parentheses around #PCDATA not allowed"));
      }
      reader.pos = saved_pos;
    }
    let need_connector = false;
    let connector = 32;
    let paren_depth = 1;
    while (true) {
      if (paren_depth > 0 && !(reader.pos >= reader.input.length)) {
        _M0FP29Milky20183xml8skip__ws(reader);
        _L: {
          _L$2: {
            _L$3: {
              _L$4: {
                const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
                if (_bind$3 === -1) {
                  break _L$2;
                } else {
                  const _Some = _bind$3;
                  const _x = _Some;
                  switch (_x) {
                    case 41: {
                      _M0MP29Milky20183xml6Reader7advance(reader);
                      paren_depth = paren_depth - 1 | 0;
                      if (paren_depth === 0) {
                        _M0FP29Milky20183xml16skip__occurrence(reader);
                      }
                      need_connector = true;
                      break;
                    }
                    case 40: {
                      if (need_connector) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected connector (',' or '|') before '('"));
                      }
                      _M0MP29Milky20183xml6Reader7advance(reader);
                      paren_depth = paren_depth + 1 | 0;
                      need_connector = false;
                      break;
                    }
                    case 124: {
                      break _L$4;
                    }
                    case 44: {
                      break _L$4;
                    }
                    default: {
                      if (_M0FP29Milky20183xml21is__name__start__char(_x)) {
                        if (need_connector) {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected connector (',' or '|') between elements"));
                        }
                        _M0FP29Milky20183xml10skip__name(reader);
                        _M0FP29Milky20183xml16skip__occurrence(reader);
                        need_connector = true;
                      } else {
                        break _L$2;
                      }
                    }
                  }
                }
                break _L$3;
              }
              const _p = _M0MP29Milky20183xml6Reader4peek(reader);
              const c = _p === -1 ? $panic() : _p;
              _M0MP29Milky20183xml6Reader7advance(reader);
              if (connector === 32) {
                connector = c;
              } else {
                if (connector !== c) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("cannot mix ',' and '|' in content model at same level"));
                }
              }
              need_connector = false;
            }
            break _L;
          }
          if (paren_depth > 0) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("unexpected character in content model"));
          }
        }
        continue;
      } else {
        break;
      }
    }
    if (paren_depth > 0) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("mismatched parentheses in content model"));
    } else {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
    }
  }
  function _M0FP29Milky20183xml20parse__element__decl(reader) {
    _M0FP29Milky20183xml8skip__ws(reader);
    if (!_M0FP29Milky20183xml21peek__is__name__start(reader)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected element name in ELEMENT declaration"));
    }
    _M0FP29Milky20183xml10skip__name(reader);
    if (!_M0FP29Milky20183xml20peek__is__whitespace(reader)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required between element name and content model"));
    }
    _M0FP29Milky20183xml8skip__ws(reader);
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(reader);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          if (_x === 40) {
            const _bind$4 = _M0FP29Milky20183xml20parse__content__spec(reader, 0);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          } else {
            if (_M0FP29Milky20183xml21is__name__start__char(_x)) {
              const keyword = _M0FP29Milky20183xml10read__name(reader);
              _L$3: {
                _L$4: {
                  switch (keyword) {
                    case "EMPTY": {
                      break;
                    }
                    case "ANY": {
                      break;
                    }
                    case "CDATA": {
                      break _L$4;
                    }
                    case "RCDATA": {
                      break _L$4;
                    }
                    default: {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid content model keyword: ${keyword}`));
                    }
                  }
                  break _L$3;
                }
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA/RCDATA content model is SGML only, not valid in XML"));
              }
            } else {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected content model"));
    }
    _M0FP29Milky20183xml8skip__ws(reader);
    if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP29Milky20183xml6Reader4peek(reader), _M0FP29Milky20183xml20parse__element__declN6constrS2456)) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '>' at end of ELEMENT declaration"));
    }
    _M0MP29Milky20183xml6Reader7advance(reader);
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml20parse__decimal__code(chars, start, end) {
    let result = 0;
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        let digit;
        switch (c) {
          case 48: {
            digit = 0;
            break;
          }
          case 49: {
            digit = 1;
            break;
          }
          case 50: {
            digit = 2;
            break;
          }
          case 51: {
            digit = 3;
            break;
          }
          case 52: {
            digit = 4;
            break;
          }
          case 53: {
            digit = 5;
            break;
          }
          case 54: {
            digit = 6;
            break;
          }
          case 55: {
            digit = 7;
            break;
          }
          case 56: {
            digit = 8;
            break;
          }
          case 57: {
            digit = 9;
            break;
          }
          default: {
            digit = 0;
          }
        }
        result = (Math.imul(result, 10) | 0) + digit | 0;
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return result;
  }
  function _M0FP29Milky20183xml16parse__hex__code(chars, start, end) {
    let result = 0;
    let _tmp$22 = start;
    while (true) {
      const i = _tmp$22;
      if (i < end) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        let digit;
        switch (c) {
          case 48: {
            digit = 0;
            break;
          }
          case 49: {
            digit = 1;
            break;
          }
          case 50: {
            digit = 2;
            break;
          }
          case 51: {
            digit = 3;
            break;
          }
          case 52: {
            digit = 4;
            break;
          }
          case 53: {
            digit = 5;
            break;
          }
          case 54: {
            digit = 6;
            break;
          }
          case 55: {
            digit = 7;
            break;
          }
          case 56: {
            digit = 8;
            break;
          }
          case 57: {
            digit = 9;
            break;
          }
          case 97: {
            digit = 10;
            break;
          }
          case 65: {
            digit = 10;
            break;
          }
          case 98: {
            digit = 11;
            break;
          }
          case 66: {
            digit = 11;
            break;
          }
          case 99: {
            digit = 12;
            break;
          }
          case 67: {
            digit = 12;
            break;
          }
          case 100: {
            digit = 13;
            break;
          }
          case 68: {
            digit = 13;
            break;
          }
          case 101: {
            digit = 14;
            break;
          }
          case 69: {
            digit = 14;
            break;
          }
          case 102: {
            digit = 15;
            break;
          }
          case 70: {
            digit = 15;
            break;
          }
          default: {
            digit = 0;
          }
        }
        result = (Math.imul(result, 16) | 0) + digit | 0;
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return result;
  }
  function _M0FP29Milky20183xml18expand__char__refs(chars, len) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 38 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 35)) {
          i = i + 2 | 0;
          const is_hex = i < len && (_M0MPC15array5Array2atGcE(chars, i) === 120 || _M0MPC15array5Array2atGcE(chars, i) === 88);
          if (is_hex) {
            i = i + 1 | 0;
          }
          const digit_start = i;
          while (true) {
            if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i < len) {
            const code = is_hex ? _M0FP29Milky20183xml16parse__hex__code(chars, digit_start, i) : _M0FP29Milky20183xml20parse__decimal__code(chars, digit_start, i);
            if (code > 0 && code <= 1114111) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, code);
            }
            i = i + 1 | 0;
          }
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
  function _M0FP29Milky20183xml25validate__literal__markup(chars, len) {
    const expanded = _M0FP29Milky20183xml18expand__char__refs(chars, len);
    const exp_chars = _M0MPC16string6String9to__array(expanded);
    const exp_len = exp_chars.length;
    const stack = [];
    let i = 0;
    while (true) {
      if (i < exp_len) {
        if (_M0MPC15array5Array2atGcE(exp_chars, i) === 60) {
          i = i + 1 | 0;
          if (i >= exp_len) {
            continue;
          }
          if (_M0MPC15array5Array2atGcE(exp_chars, i) === 47) {
            i = i + 1 | 0;
            const name_start = i;
            while (true) {
              if (i < exp_len && _M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(exp_chars, i))) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const name = _M0FP29Milky20183xml22substring__from__chars(exp_chars, name_start, i);
            if (stack.length === 0 || _M0IP016_24default__implPB2Eq10not__equalGOsE(_M0MPC15array5Array4lastGsE(stack), name)) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`unbalanced end tag </${name}> in entity value`));
            }
            _M0MPC15array5Array3popGUsRP29Milky20183xml10SourceSpanEE(stack);
            while (true) {
              if (i < exp_len && _M0MPC15array5Array2atGcE(exp_chars, i) !== 62) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            if (_M0MPC15array5Array2atGcE(exp_chars, i) === 33 || _M0MPC15array5Array2atGcE(exp_chars, i) === 63) {
              while (true) {
                if (i < exp_len && _M0MPC15array5Array2atGcE(exp_chars, i) !== 62) {
                  i = i + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            } else {
              if (_M0FP29Milky20183xml21is__name__start__char(_M0MPC15array5Array2atGcE(exp_chars, i))) {
                const name_start = i;
                while (true) {
                  if (i < exp_len && _M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(exp_chars, i))) {
                    i = i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                const name = _M0FP29Milky20183xml22substring__from__chars(exp_chars, name_start, i);
                let is_empty = false;
                while (true) {
                  if (i < exp_len && _M0MPC15array5Array2atGcE(exp_chars, i) !== 62) {
                    if (_M0MPC15array5Array2atGcE(exp_chars, i) === 47 && ((i + 1 | 0) < exp_len && _M0MPC15array5Array2atGcE(exp_chars, i + 1 | 0) === 62)) {
                      is_empty = true;
                      break;
                    }
                    i = i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                if (!is_empty) {
                  _M0MPC15array5Array4pushGsE(stack, name);
                }
              }
            }
          }
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (stack.length > 0) {
      const _p = _M0MPC15array5Array4lastGsE(stack);
      let name;
      if (_p === undefined) {
        name = $panic();
      } else {
        const _p$2 = _p;
        name = _p$2;
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity(`unclosed element <${name}> in entity value`));
    } else {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
    }
  }
  function _M0FP29Milky20183xml32validate__no__incomplete__markup(chars, len) {
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 38 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 35)) {
          const ref_start = i;
          i = i + 2 | 0;
          let is_lt = false;
          if (i < len) {
            if (_M0MPC15array5Array2atGcE(chars, i) === 120 || _M0MPC15array5Array2atGcE(chars, i) === 88) {
              i = i + 1 | 0;
              if ((i + 2 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i) === 51 && ((_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 99 || _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 67) && _M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 59))) {
                is_lt = true;
                i = i + 3 | 0;
              }
            } else {
              if ((i + 2 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i) === 54 && (_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 48 && _M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 59))) {
                is_lt = true;
                i = i + 3 | 0;
              }
            }
          }
          if (is_lt) {
            if (i < len) {
              const next = _M0MPC15array5Array2atGcE(chars, i);
              if (next === 33) {
                if ((i + 1 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 45 && ((i + 2 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 45))) {
                  let found_end = false;
                  let j = i + 3 | 0;
                  while (true) {
                    if ((j + 2 | 0) < len) {
                      if (_M0MPC15array5Array2atGcE(chars, j) === 45 && (_M0MPC15array5Array2atGcE(chars, j + 1 | 0) === 45 && _M0MPC15array5Array2atGcE(chars, j + 2 | 0) === 62)) {
                        found_end = true;
                        break;
                      }
                      j = j + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (!found_end) {
                    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("incomplete comment in entity value (missing -->)"));
                  }
                }
              } else {
                if (_M0FP29Milky20183xml21is__name__start__char(next)) {
                  const name_start = i;
                  while (true) {
                    if (i < len && _M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(chars, i))) {
                      i = i + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  const name_end = i;
                  while (true) {
                    if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 62) {
                      if (_M0MPC15array5Array2atGcE(chars, i) === 47 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 62)) {
                        i = len;
                        break;
                      }
                      i = i + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (i < len && _M0MPC15array5Array2atGcE(chars, i) === 62) {
                    i = i + 1 | 0;
                    let found_end = false;
                    while (true) {
                      if ((i + 3 | 0) < len) {
                        if (_M0MPC15array5Array2atGcE(chars, i) === 60 && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 47) {
                          let j = i + 2 | 0;
                          let k = name_start;
                          let matches = true;
                          while (true) {
                            if (k < name_end && j < len) {
                              if (_M0MPC15array5Array2atGcE(chars, j) !== _M0MPC15array5Array2atGcE(chars, k)) {
                                matches = false;
                                break;
                              }
                              j = j + 1 | 0;
                              k = k + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          if (matches && (k === name_end && (j < len && _M0MPC15array5Array2atGcE(chars, j) === 62))) {
                            found_end = true;
                            break;
                          }
                        }
                        i = i + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    if (!found_end) {
                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("unclosed element in entity value"));
                    }
                  }
                }
              }
            }
          } else {
            i = ref_start + 1 | 0;
          }
        } else {
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml35validate__no__lt__in__attr__context(chars, len) {
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 61) {
          i = i + 1 | 0;
          while (true) {
            if (i < len && (_M0MPC15array5Array2atGcE(chars, i) === 32 || (_M0MPC15array5Array2atGcE(chars, i) === 9 || (_M0MPC15array5Array2atGcE(chars, i) === 10 || _M0MPC15array5Array2atGcE(chars, i) === 13)))) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i < len && (_M0MPC15array5Array2atGcE(chars, i) === 39 || _M0MPC15array5Array2atGcE(chars, i) === 34)) {
            const quote = _M0MPC15array5Array2atGcE(chars, i);
            i = i + 1 | 0;
            while (true) {
              if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== quote) {
                if (_M0MPC15array5Array2atGcE(chars, i) === 38 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 35)) {
                  const ref_start = i;
                  i = i + 2 | 0;
                  if (i < len) {
                    if (_M0MPC15array5Array2atGcE(chars, i) === 120 || _M0MPC15array5Array2atGcE(chars, i) === 88) {
                      i = i + 1 | 0;
                      if ((i + 1 | 0) < len && (_M0MPC15array5Array2atGcE(chars, i) === 51 && (_M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 99 || _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 67))) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("'<' not allowed in attribute value (via character reference)"));
                      }
                    } else {
                      if (_M0MPC15array5Array2atGcE(chars, i) === 54 && ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 48)) {
                        if ((i + 2 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 2 | 0) === 59) {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("'<' not allowed in attribute value (via character reference)"));
                        }
                      }
                    }
                  }
                  i = ref_start + 1 | 0;
                } else {
                  i = i + 1 | 0;
                }
                continue;
              } else {
                break;
              }
            }
            if (i < len) {
              i = i + 1 | 0;
            }
          }
        } else {
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml23validate__entity__value(value) {
    const chars = _M0MPC16string6String9to__array(value);
    const len = chars.length;
    let i = 0;
    if (len >= 5 && (_M0MPC15array5Array2atGcE(chars, 0) === 60 && (_M0MPC15array5Array2atGcE(chars, 1) === 63 && (_M0MPC15array5Array2atGcE(chars, 2) === 120 && (_M0MPC15array5Array2atGcE(chars, 3) === 109 && _M0MPC15array5Array2atGcE(chars, 4) === 108))))) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("text declaration not allowed in internal parsed entity"));
    }
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 37) {
          const j = i + 1 | 0;
          if (j < len && _M0FP29Milky20183xml21is__name__start__char(_M0MPC15array5Array2atGcE(chars, j))) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("parameter entity reference not allowed in entity value"));
          }
        }
        if (_M0MPC15array5Array2atGcE(chars, i) === 38) {
          i = i + 1 | 0;
          if (i >= len) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("bare '&' in entity value"));
          }
          if (_M0MPC15array5Array2atGcE(chars, i) === 35) {
            i = i + 1 | 0;
            if (i >= len) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("incomplete character reference in entity value"));
            }
            const is_hex = _M0MPC15array5Array2atGcE(chars, i) === 120;
            if (is_hex) {
              i = i + 1 | 0;
              if (i >= len) {
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("incomplete hex character reference in entity value"));
              }
            }
            const digit_start = i;
            while (true) {
              if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
                const c = _M0MPC15array5Array2atGcE(chars, i);
                const valid = is_hex ? c >= 48 && c <= 57 || (c >= 97 && c <= 102 || c >= 65 && c <= 70) : c >= 48 && c <= 57;
                if (!valid) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("invalid character in character reference in entity value"));
                }
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i >= len) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("unterminated character reference in entity value"));
            }
            if (i === digit_start) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("empty character reference in entity value"));
            }
            const code_point = is_hex ? _M0FP29Milky20183xml16parse__hex__code(chars, digit_start, i) : _M0FP29Milky20183xml20parse__decimal__code(chars, digit_start, i);
            if (!_M0FP29Milky20183xml20is__valid__xml__char(code_point)) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("invalid character reference in entity value"));
            }
            if (code_point === 38) {
              const after_semi = i + 1 | 0;
              if (after_semi >= len) {
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("character reference &#38; produces bare '&' at end of entity value"));
              }
              const next = _M0MPC15array5Array2atGcE(chars, after_semi);
              if (next === 35) {
                let j = after_semi + 1 | 0;
                if (j < len && _M0MPC15array5Array2atGcE(chars, j) === 120) {
                  j = j + 1 | 0;
                }
                while (true) {
                  if (j < len && (_M0MPC15array5Array2atGcE(chars, j) >= 48 && _M0MPC15array5Array2atGcE(chars, j) <= 57 || (_M0MPC15array5Array2atGcE(chars, j) >= 97 && _M0MPC15array5Array2atGcE(chars, j) <= 102 || _M0MPC15array5Array2atGcE(chars, j) >= 65 && _M0MPC15array5Array2atGcE(chars, j) <= 70))) {
                    j = j + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                if (j >= len || _M0MPC15array5Array2atGcE(chars, j) !== 59) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("character reference &#38; produces incomplete character reference"));
                }
              } else {
                if (!_M0FP29Milky20183xml21is__name__start__char(next)) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("character reference &#38; produces bare '&' not followed by valid reference"));
                } else {
                  let j = after_semi;
                  while (true) {
                    if (j < len && _M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(chars, j))) {
                      j = j + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (j >= len || _M0MPC15array5Array2atGcE(chars, j) !== 59) {
                    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("character reference &#38; produces incomplete entity reference"));
                  }
                }
              }
            }
            i = i + 1 | 0;
          } else {
            if (!_M0FP29Milky20183xml21is__name__start__char(_M0MPC15array5Array2atGcE(chars, i))) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("bare '&' not followed by valid reference"));
            }
            while (true) {
              if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
                if (!_M0FP29Milky20183xml14is__name__char(_M0MPC15array5Array2atGcE(chars, i))) {
                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("invalid character in entity reference"));
                }
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i >= len) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("unterminated entity reference in entity value"));
            }
            i = i + 1 | 0;
          }
        } else {
          i = i + 1 | 0;
        }
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = _M0FP29Milky20183xml35validate__no__lt__in__attr__context(chars, len);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP29Milky20183xml32validate__no__incomplete__markup(chars, len);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    return _M0FP29Milky20183xml25validate__literal__markup(chars, len);
  }
  function _M0FP29Milky20183xml19validate__pe__value(value) {
    const chars = _M0MPC16string6String9to__array(value);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        const c = _M0MPC15array5Array2atGcE(chars, i);
        const code = c;
        if (!_M0FP29Milky20183xml20is__valid__xml__char(code)) {
          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("invalid character in parameter entity value"));
        }
        if (c === 37) {
          const j = i + 1 | 0;
          if (j < len && _M0FP29Milky20183xml21is__name__start__char(_M0MPC15array5Array2atGcE(chars, j))) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("parameter entity reference not allowed in entity value"));
          }
        }
        if (c === 38) {
          i = i + 1 | 0;
          if (i >= len) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("bare '&' in parameter entity value"));
          }
          const next = _M0MPC15array5Array2atGcE(chars, i);
          if (next === 35) {
            while (true) {
              if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i >= len) {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("unterminated character reference in parameter entity value"));
            }
          } else {
            if (_M0FP29Milky20183xml21is__name__start__char(next)) {
              while (true) {
                if (i < len && _M0MPC15array5Array2atGcE(chars, i) !== 59) {
                  i = i + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (i >= len) {
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("unterminated entity reference in parameter entity value"));
              }
            } else {
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidEntity("bare '&' in parameter entity value"));
            }
          }
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0FP29Milky20183xml15is__pubid__char(c) {
    return c === 32 || (c === 13 || (c === 10 || (c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c >= 48 && c <= 57 || (c === 45 || (c === 39 || (c === 40 || (c === 41 || (c === 43 || (c === 44 || (c === 46 || (c === 47 || (c === 58 || (c === 61 || (c === 63 || (c === 59 || (c === 33 || (c === 42 || (c === 35 || (c === 64 || (c === 36 || (c === 95 || c === 37)))))))))))))))))))))));
  }
  function _M0MP29Milky20183xml6Reader31read__and__validate__public__id(self) {
    let quote;
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 34: {
              quote = 34;
              break;
            }
            case 39: {
              quote = 39;
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
    }
    _M0MP29Milky20183xml6Reader7advance(self);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c !== quote) {
          if (!_M0FP29Milky20183xml15is__pubid__char(_c)) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`invalid character in public ID: '${_M0IPC14char4CharPB4Show10to__string(_c)}'`));
          }
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          break;
        }
      }
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(self), quote)) {
      _M0MP29Milky20183xml6Reader7advance(self);
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0MP29Milky20183xml6Reader19read__entity__value(self, quote) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c !== quote) {
          const code = _c;
          if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in entity value"));
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          break;
        }
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
  }
  function _M0FP29Milky20183xml23is__name__char__lenient(c) {
    return !(c === 32 || (c === 9 || (c === 10 || (c === 13 || (c === 60 || (c === 62 || (c === 34 || (c === 39 || (c === 61 || (c === 91 || c === 93))))))))));
  }
  function _M0MP29Milky20183xml6Reader19read__name__lenient(self) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_M0FP29Milky20183xml23is__name__char__lenient(_c)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
  function _M0MP29Milky20183xml6Reader17skip__declaration(self) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c !== 62) {
          if (_c === 34) {
            _M0MP29Milky20183xml6Reader7advance(self);
            while (true) {
              const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
              if (_bind$4 === -1) {
                break;
              } else {
                const _Some$2 = _bind$4;
                const _c2 = _Some$2;
                if (_c2 !== 34) {
                  _M0MP29Milky20183xml6Reader7advance(self);
                  continue;
                } else {
                  break;
                }
              }
            }
            _M0MP29Milky20183xml6Reader7advance(self);
          } else {
            if (_c === 39) {
              _M0MP29Milky20183xml6Reader7advance(self);
              while (true) {
                const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                if (_bind$4 === -1) {
                  break;
                } else {
                  const _Some$2 = _bind$4;
                  const _c2 = _Some$2;
                  if (_c2 !== 39) {
                    _M0MP29Milky20183xml6Reader7advance(self);
                    continue;
                  } else {
                    break;
                  }
                }
              }
              _M0MP29Milky20183xml6Reader7advance(self);
            } else {
              if (_c === 45 && _M0MP29Milky20183xml6Reader13check__string(self, "--")) {
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("SGML-style comments (--) not allowed in XML declarations"));
              } else {
                _M0MP29Milky20183xml6Reader7advance(self);
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
    }
    _M0MP29Milky20183xml6Reader7advance(self);
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0MP29Milky20183xml6Reader20skip__quoted__string(self) {
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
    if (_bind$3 === -1) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MP29Milky20183xml6Reader7advance(self);
          while (true) {
            const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$4 === -1) {
              break;
            } else {
              const _Some$2 = _bind$4;
              const _c = _Some$2;
              if (_c !== 34) {
                _M0MP29Milky20183xml6Reader7advance(self);
                continue;
              } else {
                break;
              }
            }
          }
          if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(self), _M0MP29Milky20183xml6Reader20skip__quoted__stringN6constrS2457)) {
            _M0MP29Milky20183xml6Reader7advance(self);
            return;
          } else {
            return;
          }
        }
        case 39: {
          _M0MP29Milky20183xml6Reader7advance(self);
          while (true) {
            const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$4 === -1) {
              break;
            } else {
              const _Some$2 = _bind$4;
              const _c = _Some$2;
              if (_c !== 39) {
                _M0MP29Milky20183xml6Reader7advance(self);
                continue;
              } else {
                break;
              }
            }
          }
          if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(self), _M0MP29Milky20183xml6Reader20skip__quoted__stringN6constrS2458)) {
            _M0MP29Milky20183xml6Reader7advance(self);
            return;
          } else {
            return;
          }
        }
        default: {
          return;
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, target) {
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c !== target) {
          if (_c === 45 && _M0MP29Milky20183xml6Reader13check__string(self, "--")) {
            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("SGML-style comments (--) not allowed in XML declarations"));
          }
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          break;
        }
      }
    }
    _M0MP29Milky20183xml6Reader7advance(self);
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0MP29Milky20183xml6Reader23parse__internal__subset(self) {
    while (true) {
      if (!(self.pos >= self.input.length)) {
        _M0MP29Milky20183xml6Reader16skip__whitespace(self);
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 93: {
              _M0MP29Milky20183xml6Reader7advance(self);
              return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
            }
            case 60: {
              const declaration_start = _M0MP29Milky20183xml6Reader16source__position(self);
              _M0MP29Milky20183xml6Reader7advance(self);
              _L: {
                _L$2: {
                  const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                  if (_bind$4 === -1) {
                    break _L$2;
                  } else {
                    const _Some$2 = _bind$4;
                    const _x$2 = _Some$2;
                    if (_x$2 === 33) {
                      _M0MP29Milky20183xml6Reader7advance(self);
                      if (_M0MP29Milky20183xml6Reader13check__string(self, "[INCLUDE[") || _M0MP29Milky20183xml6Reader13check__string(self, "[IGNORE[")) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("conditional sections not allowed in internal DTD subset"));
                      }
                      if (_M0MP29Milky20183xml6Reader13check__string(self, "[CDATA[")) {
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA section not allowed in DTD"));
                      }
                      if (_M0MP29Milky20183xml6Reader13check__string(self, "ENTITY")) {
                        _M0MP29Milky20183xml6Reader12skip__string(self, "ENTITY");
                        const _bind$5 = _M0MP29Milky20183xml6Reader4peek(self);
                        let _tmp$22;
                        if (_bind$5 === -1) {
                          _tmp$22 = false;
                        } else {
                          const _Some$3 = _bind$5;
                          const _c = _Some$3;
                          _tmp$22 = _M0FP29Milky20183xml14is__whitespace(_c);
                        }
                        if (!_tmp$22) {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required after ENTITY"));
                        }
                        _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                        _L$3: {
                          _L$4: {
                            const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                            if (_bind$6 === -1) {
                              break _L$4;
                            } else {
                              const _Some$3 = _bind$6;
                              const _x$3 = _Some$3;
                              if (_x$3 === 37) {
                                _M0MP29Milky20183xml6Reader7advance(self);
                                const _bind$7 = _M0MP29Milky20183xml6Reader4peek(self);
                                let _tmp$23;
                                if (_bind$7 === -1) {
                                  _tmp$23 = false;
                                } else {
                                  const _Some$4 = _bind$7;
                                  const _c = _Some$4;
                                  _tmp$23 = _M0FP29Milky20183xml14is__whitespace(_c);
                                }
                                if (!_tmp$23) {
                                  return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required after % in parameter entity"));
                                }
                                _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                _M0MP29Milky20183xml6Reader19read__name__lenient(self);
                                _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                _L$5: {
                                  _L$6: {
                                    const _bind$8 = _M0MP29Milky20183xml6Reader4peek(self);
                                    if (_bind$8 === -1) {
                                      break _L$6;
                                    } else {
                                      const _Some$4 = _bind$8;
                                      const _x$4 = _Some$4;
                                      switch (_x$4) {
                                        case 34: {
                                          _M0MP29Milky20183xml6Reader7advance(self);
                                          const _bind$9 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 34);
                                          let raw_value;
                                          if (_bind$9.$tag === 1) {
                                            const _ok = _bind$9;
                                            raw_value = _ok._0;
                                          } else {
                                            return _bind$9;
                                          }
                                          _M0MP29Milky20183xml6Reader7advance(self);
                                          const _bind$10 = _M0FP29Milky20183xml19validate__pe__value(raw_value);
                                          if (_bind$10.$tag === 1) {
                                            const _ok = _bind$10;
                                            _ok._0;
                                          } else {
                                            return _bind$10;
                                          }
                                          const _bind$11 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                          if (_bind$11.$tag === 1) {
                                            const _ok = _bind$11;
                                            _ok._0;
                                          } else {
                                            return _bind$11;
                                          }
                                          break;
                                        }
                                        case 39: {
                                          _M0MP29Milky20183xml6Reader7advance(self);
                                          const _bind$12 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 39);
                                          let raw_value$2;
                                          if (_bind$12.$tag === 1) {
                                            const _ok = _bind$12;
                                            raw_value$2 = _ok._0;
                                          } else {
                                            return _bind$12;
                                          }
                                          _M0MP29Milky20183xml6Reader7advance(self);
                                          const _bind$13 = _M0FP29Milky20183xml19validate__pe__value(raw_value$2);
                                          if (_bind$13.$tag === 1) {
                                            const _ok = _bind$13;
                                            _ok._0;
                                          } else {
                                            return _bind$13;
                                          }
                                          const _bind$14 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                          if (_bind$14.$tag === 1) {
                                            const _ok = _bind$14;
                                            _ok._0;
                                          } else {
                                            return _bind$14;
                                          }
                                          break;
                                        }
                                        default: {
                                          break _L$6;
                                        }
                                      }
                                    }
                                    break _L$5;
                                  }
                                  const _bind$8 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                  if (_bind$8.$tag === 1) {
                                    const _ok = _bind$8;
                                    _ok._0;
                                  } else {
                                    return _bind$8;
                                  }
                                }
                              } else {
                                break _L$4;
                              }
                            }
                            break _L$3;
                          }
                          _L$5: {
                            _L$6: {
                              const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                              if (_bind$6 === -1) {
                                break _L$6;
                              } else {
                                const _Some$3 = _bind$6;
                                const _c = _Some$3;
                                if (_M0FP29Milky20183xml21is__name__start__char(_c)) {
                                } else {
                                  break _L$6;
                                }
                              }
                              break _L$5;
                            }
                            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character at start of entity name"));
                          }
                          const name = _M0MP29Milky20183xml6Reader19read__name__lenient(self);
                          const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                          let _tmp$23;
                          if (_bind$6 === -1) {
                            _tmp$23 = false;
                          } else {
                            const _Some$3 = _bind$6;
                            const _c = _Some$3;
                            _tmp$23 = _M0FP29Milky20183xml14is__whitespace(_c);
                          }
                          if (!_tmp$23) {
                            return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required after entity name in declaration"));
                          }
                          _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                          const is_duplicate = _M0MPB3Map8containsGssE(self.entities, name);
                          _L$6: {
                            _L$7: {
                              const _bind$7 = _M0MP29Milky20183xml6Reader4peek(self);
                              if (_bind$7 === -1) {
                                break _L$7;
                              } else {
                                const _Some$3 = _bind$7;
                                const _x$3 = _Some$3;
                                switch (_x$3) {
                                  case 34: {
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    const _bind$8 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 34);
                                    let raw_value;
                                    if (_bind$8.$tag === 1) {
                                      const _ok = _bind$8;
                                      raw_value = _ok._0;
                                    } else {
                                      return _bind$8;
                                    }
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    if (!is_duplicate) {
                                      const _bind$9 = _M0FP29Milky20183xml23validate__entity__value(raw_value);
                                      if (_bind$9.$tag === 1) {
                                        const _ok = _bind$9;
                                        _ok._0;
                                      } else {
                                        return _bind$9;
                                      }
                                      let value;
                                      let _try_err;
                                      _L$8: {
                                        _L$9: {
                                          const _bind$10 = _M0FP29Milky20183xml24expand__char__refs__only(raw_value);
                                          if (_bind$10.$tag === 1) {
                                            const _ok = _bind$10;
                                            value = _ok._0;
                                          } else {
                                            const _err = _bind$10;
                                            _try_err = _err._0;
                                            break _L$9;
                                          }
                                          break _L$8;
                                        }
                                        value = raw_value;
                                      }
                                      _M0MPB3Map3setGssE(self.entities, name, value);
                                    }
                                    const _bind$9 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                    if (_bind$9.$tag === 1) {
                                      const _ok = _bind$9;
                                      _ok._0;
                                    } else {
                                      return _bind$9;
                                    }
                                    break;
                                  }
                                  case 39: {
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    const _bind$10 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 39);
                                    let raw_value$2;
                                    if (_bind$10.$tag === 1) {
                                      const _ok = _bind$10;
                                      raw_value$2 = _ok._0;
                                    } else {
                                      return _bind$10;
                                    }
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    if (!is_duplicate) {
                                      const _bind$11 = _M0FP29Milky20183xml23validate__entity__value(raw_value$2);
                                      if (_bind$11.$tag === 1) {
                                        const _ok = _bind$11;
                                        _ok._0;
                                      } else {
                                        return _bind$11;
                                      }
                                      let value;
                                      let _try_err;
                                      _L$8: {
                                        _L$9: {
                                          const _bind$12 = _M0FP29Milky20183xml24expand__char__refs__only(raw_value$2);
                                          if (_bind$12.$tag === 1) {
                                            const _ok = _bind$12;
                                            value = _ok._0;
                                          } else {
                                            const _err = _bind$12;
                                            _try_err = _err._0;
                                            break _L$9;
                                          }
                                          break _L$8;
                                        }
                                        value = raw_value$2;
                                      }
                                      _M0MPB3Map3setGssE(self.entities, name, value);
                                    }
                                    const _bind$11 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                    if (_bind$11.$tag === 1) {
                                      const _ok = _bind$11;
                                      _ok._0;
                                    } else {
                                      return _bind$11;
                                    }
                                    break;
                                  }
                                  default: {
                                    break _L$7;
                                  }
                                }
                              }
                              break _L$6;
                            }
                            const keyword = _M0MP29Milky20183xml6Reader19read__name__lenient(self);
                            _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                            if (keyword === "SYSTEM") {
                              const _bind$7 = _M0MP29Milky20183xml6Reader4peek(self);
                              if (_bind$7 === -1) {
                              } else {
                                const _Some$3 = _bind$7;
                                const _x$3 = _Some$3;
                                switch (_x$3) {
                                  case 34: {
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    const _bind$8 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 34);
                                    if (_bind$8.$tag === 1) {
                                      const _ok = _bind$8;
                                      _ok._0;
                                    } else {
                                      return _bind$8;
                                    }
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    break;
                                  }
                                  case 39: {
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    const _bind$9 = _M0MP29Milky20183xml6Reader19read__entity__value(self, 39);
                                    if (_bind$9.$tag === 1) {
                                      const _ok = _bind$9;
                                      _ok._0;
                                    } else {
                                      return _bind$9;
                                    }
                                    _M0MP29Milky20183xml6Reader7advance(self);
                                    break;
                                  }
                                }
                              }
                            }
                            const _bind$7 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                            if (_bind$7.$tag === 1) {
                              const _ok = _bind$7;
                              _ok._0;
                            } else {
                              return _bind$7;
                            }
                          }
                        }
                      } else {
                        if (_M0MP29Milky20183xml6Reader13check__string(self, "ATTLIST")) {
                          _M0MP29Milky20183xml6Reader12skip__string(self, "ATTLIST");
                          const _bind$5 = _M0FP29Milky20183xml14parse__attlist(self);
                          if (_bind$5.$tag === 1) {
                            const _ok = _bind$5;
                            _ok._0;
                          } else {
                            return _bind$5;
                          }
                        } else {
                          if (_M0MP29Milky20183xml6Reader13check__string(self, "ELEMENT")) {
                            _M0MP29Milky20183xml6Reader12skip__string(self, "ELEMENT");
                            const _bind$5 = _M0FP29Milky20183xml20parse__element__decl(self);
                            if (_bind$5.$tag === 1) {
                              const _ok = _bind$5;
                              _ok._0;
                            } else {
                              return _bind$5;
                            }
                          } else {
                            if (_M0MP29Milky20183xml6Reader13check__string(self, "--")) {
                              _M0MP29Milky20183xml6Reader12skip__string(self, "--");
                              const comment_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
                              while (true) {
                                if (!(self.pos >= self.input.length)) {
                                  if (_M0MP29Milky20183xml6Reader13check__string(self, "--")) {
                                    _M0MP29Milky20183xml6Reader12skip__string(self, "--");
                                    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(self), _M0MP29Milky20183xml6Reader23parse__internal__subsetN6constrS2459)) {
                                      _M0MP29Milky20183xml6Reader7advance(self);
                                      break;
                                    } else {
                                      return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'--' in comment must be followed by '>'"));
                                    }
                                  }
                                  const _bind$5 = _M0MP29Milky20183xml6Reader7advance(self);
                                  if (_bind$5 === -1) {
                                  } else {
                                    const _Some$3 = _bind$5;
                                    const _c = _Some$3;
                                    _M0IPB13StringBuilderPB6Logger11write__char(comment_buf, _c);
                                  }
                                  continue;
                                } else {
                                  break;
                                }
                              }
                              _M0MPC15array5Array4pushGsE(self.internal_subset_events, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind7Comment(comment_buf.val), _M0FP29Milky20183xml12source__span(declaration_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                            } else {
                              if (_M0MP29Milky20183xml6Reader13check__string(self, "NOTATION")) {
                                _M0MP29Milky20183xml6Reader12skip__string(self, "NOTATION");
                                _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                const _bind$5 = _M0MP29Milky20183xml6Reader10read__name(self);
                                if (_bind$5.$tag === 1) {
                                  const _ok = _bind$5;
                                  _ok._0;
                                } else {
                                  return _bind$5;
                                }
                                _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                if (_M0MP29Milky20183xml6Reader13check__string(self, "PUBLIC")) {
                                  _M0MP29Milky20183xml6Reader12skip__string(self, "PUBLIC");
                                  _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                  const _bind$6 = _M0MP29Milky20183xml6Reader31read__and__validate__public__id(self);
                                  if (_bind$6.$tag === 1) {
                                    const _ok = _bind$6;
                                    _ok._0;
                                  } else {
                                    return _bind$6;
                                  }
                                  _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                  _L$3: {
                                    _L$4: {
                                      _L$5: {
                                        const _bind$7 = _M0MP29Milky20183xml6Reader4peek(self);
                                        if (_bind$7 === -1) {
                                          break _L$5;
                                        } else {
                                          const _Some$3 = _bind$7;
                                          const _x$3 = _Some$3;
                                          if (_x$3 === 34) {
                                            break _L$4;
                                          } else {
                                            break _L$5;
                                          }
                                        }
                                      }
                                      const _bind$7 = _M0MP29Milky20183xml6Reader4peek(self);
                                      if (_bind$7 === -1) {
                                      } else {
                                        const _Some$3 = _bind$7;
                                        const _x$3 = _Some$3;
                                        if (_x$3 === 39) {
                                          break _L$4;
                                        }
                                      }
                                      break _L$3;
                                    }
                                    _M0MP29Milky20183xml6Reader20skip__quoted__string(self);
                                  }
                                } else {
                                  if (_M0MP29Milky20183xml6Reader13check__string(self, "SYSTEM")) {
                                    _M0MP29Milky20183xml6Reader12skip__string(self, "SYSTEM");
                                    _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                                    _M0MP29Milky20183xml6Reader20skip__quoted__string(self);
                                  }
                                }
                                const _bind$6 = _M0MP29Milky20183xml6Reader22skip__to__char__strict(self, 62);
                                if (_bind$6.$tag === 1) {
                                  const _ok = _bind$6;
                                  _ok._0;
                                } else {
                                  return _bind$6;
                                }
                              } else {
                                const _bind$5 = _M0MP29Milky20183xml6Reader17skip__declaration(self);
                                if (_bind$5.$tag === 1) {
                                  const _ok = _bind$5;
                                  _ok._0;
                                } else {
                                  return _bind$5;
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      break _L$2;
                    }
                  }
                  break _L;
                }
                _L$3: {
                  _L$4: {
                    const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                    if (_bind$4 === -1) {
                      break _L$4;
                    } else {
                      const _Some$2 = _bind$4;
                      const _x$2 = _Some$2;
                      if (_x$2 === 63) {
                        _M0MP29Milky20183xml6Reader7advance(self);
                        const _bind$5 = _M0MP29Milky20183xml6Reader10read__name(self);
                        let target;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          target = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        if (target === "") {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("processing instruction target is required"));
                        }
                        const target_lower = _M0MPC16string6String9to__lower(target);
                        if (target_lower === "xml") {
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("XML declaration not allowed in DTD"));
                        }
                        _L$5: {
                          _L$6: {
                            const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                            if (_bind$6 === -1) {
                              break _L$6;
                            } else {
                              const _Some$3 = _bind$6;
                              const _c = _Some$3;
                              if (_M0FP29Milky20183xml14is__whitespace(_c)) {
                                _M0MP29Milky20183xml6Reader7advance(self);
                                const data_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
                                while (true) {
                                  if (!(self.pos >= self.input.length)) {
                                    if (_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
                                      _M0MP29Milky20183xml6Reader12skip__string(self, "?>");
                                      break;
                                    }
                                    const _bind$7 = _M0MP29Milky20183xml6Reader7advance(self);
                                    if (_bind$7 === -1) {
                                      break;
                                    } else {
                                      const _Some$4 = _bind$7;
                                      const _ch = _Some$4;
                                      _M0IPB13StringBuilderPB6Logger11write__char(data_buf, _ch);
                                    }
                                    continue;
                                  } else {
                                    break;
                                  }
                                }
                                _M0MPC15array5Array4pushGsE(self.internal_subset_events, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind2PI(target, data_buf.val), _M0FP29Milky20183xml12source__span(declaration_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                              } else {
                                if (_c === 63) {
                                  if (_M0MP29Milky20183xml6Reader13check__string(self, "?>")) {
                                    _M0MP29Milky20183xml6Reader12skip__string(self, "?>");
                                    _M0MPC15array5Array4pushGsE(self.internal_subset_events, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind2PI(target, ""), _M0FP29Milky20183xml12source__span(declaration_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                                  } else {
                                    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected whitespace or '?>' after PI target"));
                                  }
                                } else {
                                  break _L$6;
                                }
                              }
                            }
                            break _L$5;
                          }
                          return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected whitespace or '?>' after PI target"));
                        }
                      } else {
                        break _L$4;
                      }
                    }
                    break _L$3;
                  }
                  _M0MP29Milky20183xml6Reader7advance(self);
                }
              }
              break;
            }
            case 37: {
              _M0MP29Milky20183xml6Reader7advance(self);
              _L$2: {
                _L$3: {
                  const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                  if (_bind$4 === -1) {
                    break _L$3;
                  } else {
                    const _Some$2 = _bind$4;
                    const _c = _Some$2;
                    if (_M0FP29Milky20183xml21is__name__start__char(_c)) {
                      const _bind$5 = _M0MP29Milky20183xml6Reader10read__name(self);
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                      _L$4: {
                        _L$5: {
                          const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                          if (_bind$6 === -1) {
                            break _L$5;
                          } else {
                            const _Some$3 = _bind$6;
                            const _x$2 = _Some$3;
                            if (_x$2 === 59) {
                              _M0MP29Milky20183xml6Reader7advance(self);
                            } else {
                              break _L$5;
                            }
                          }
                          break _L$4;
                        }
                        return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("parameter entity reference must end with ';'"));
                      }
                    } else {
                      break _L$3;
                    }
                  }
                  break _L$2;
                }
                return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid parameter entity reference"));
              }
              break;
            }
            default: {
              _M0MP29Milky20183xml6Reader7advance(self);
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP29Milky20183xml12XmlErrorKindE2Ok(undefined);
  }
  function _M0MP29Milky20183xml6Reader22read__comment__content(self) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      if (!(self.pos >= self.input.length)) {
        if (_M0MP29Milky20183xml6Reader13check__string(self, "--")) {
          _M0MP29Milky20183xml6Reader12skip__string(self, "--");
          _L: {
            const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$3 === -1) {
              break _L;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              if (_x === 62) {
                _M0MP29Milky20183xml6Reader7advance(self);
                return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
              } else {
                break _L;
              }
            }
          }
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'--' is not allowed in comments"));
        }
        const _bind$3 = _M0MP29Milky20183xml6Reader7advance(self);
        if (_bind$3 === -1) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          const code = _c;
          if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in comment"));
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
  }
  function _M0MP29Milky20183xml6Reader11read__until(self, end) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const end_chars = _M0MPC16string6String9to__array(end);
    const end_len = end_chars.length;
    while (true) {
      if (!(self.pos >= self.input.length)) {
        let found = true;
        let _tmp$22 = 0;
        while (true) {
          const i = _tmp$22;
          if (i < end_len) {
            _L: {
              _L$2: {
                const _bind$3 = _M0MP29Milky20183xml6Reader8peek__at(self, i);
                if (_bind$3 === -1) {
                  break _L$2;
                } else {
                  const _Some = _bind$3;
                  const _c = _Some;
                  if (_c === _M0MPC15array5Array2atGcE(end_chars, i)) {
                    break _L;
                  } else {
                    break _L$2;
                  }
                }
              }
              found = false;
              break;
            }
            _tmp$22 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (found) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE2Ok(buf.val);
        }
        const _bind$3 = _M0MP29Milky20183xml6Reader7advance(self);
        if (_bind$3 === -1) {
          return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          const code = _c;
          if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
            return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in content"));
          }
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
  }
  function _M0MP29Milky20183xml6Reader11read__while(self, pred) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (pred(_c)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          _M0MP29Milky20183xml6Reader7advance(self);
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
  function _M0MP29Milky20183xml6Reader13read__special(self) {
    _M0MP29Milky20183xml6Reader7advance(self);
    if (_M0MP29Milky20183xml6Reader13check__string(self, "--")) {
      _M0MP29Milky20183xml6Reader12skip__string(self, "--");
      const _bind$3 = _M0MP29Milky20183xml6Reader22read__comment__content(self);
      let content;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        content = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind7Comment(content));
    } else {
      if (_M0MP29Milky20183xml6Reader13check__string(self, "[CDATA[")) {
        if (self.root_closed) {
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA section after root element"));
        }
        if (!self.seen_root || self.tag_stack.length === 0) {
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA section not allowed in prolog"));
        }
        _M0MP29Milky20183xml6Reader12skip__string(self, "[CDATA[");
        const _bind$3 = _M0MP29Milky20183xml6Reader11read__until(self, "]]>");
        let content;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          content = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MP29Milky20183xml6Reader12skip__string(self, "]]>");
        return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind5CData(content));
      } else {
        if (_M0MP29Milky20183xml6Reader13check__string(self, "DOCTYPE")) {
          _M0MP29Milky20183xml6Reader12skip__string(self, "DOCTYPE");
          _M0MP29Milky20183xml6Reader16skip__whitespace(self);
          const name = _M0MP29Milky20183xml6Reader11read__while(self, (c) => c !== 62 && (c !== 91 && !_M0FP29Milky20183xml14is__whitespace(c)));
          _M0MP29Milky20183xml6Reader16skip__whitespace(self);
          if (_M0MP29Milky20183xml6Reader13check__string(self, "SYSTEM")) {
            _M0MP29Milky20183xml6Reader12skip__string(self, "SYSTEM");
            _M0MP29Milky20183xml6Reader16skip__whitespace(self);
            _M0MP29Milky20183xml6Reader20skip__quoted__string(self);
          } else {
            if (_M0MP29Milky20183xml6Reader13check__string(self, "PUBLIC")) {
              _M0MP29Milky20183xml6Reader12skip__string(self, "PUBLIC");
              _M0MP29Milky20183xml6Reader16skip__whitespace(self);
              const _bind$3 = _M0MP29Milky20183xml6Reader31read__and__validate__public__id(self);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              _M0MP29Milky20183xml6Reader16skip__whitespace(self);
              _M0MP29Milky20183xml6Reader20skip__quoted__string(self);
            }
          }
          while (true) {
            const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$3 === -1) {
              break;
            } else {
              const _Some = _bind$3;
              const _c = _Some;
              if (_c !== 91) {
                if (_c !== 62) {
                  if (_c === 45 && _M0MP29Milky20183xml6Reader13check__string(self, "--")) {
                    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("SGML-style comments (--) not allowed in XML declarations"));
                  } else {
                    _M0MP29Milky20183xml6Reader7advance(self);
                  }
                  continue;
                } else {
                  break;
                }
              } else {
                break;
              }
            }
          }
          const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
          if (_bind$3 === -1) {
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            if (_x === 91) {
              _M0MP29Milky20183xml6Reader7advance(self);
              const _bind$4 = _M0MP29Milky20183xml6Reader23parse__internal__subset(self);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
          while (true) {
            const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$4 === -1) {
              break;
            } else {
              const _Some = _bind$4;
              const _c = _Some;
              if (_c !== 62) {
                if (_c === 37) {
                  return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("parameter entity reference not allowed outside internal subset"));
                }
                _M0MP29Milky20183xml6Reader7advance(self);
                continue;
              } else {
                break;
              }
            }
          }
          _M0MP29Milky20183xml6Reader7advance(self);
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind7DocType(name));
        } else {
          return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid special tag after '<!'"));
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader25normalize__attr__by__type(self, elem_name, attr_name, value) {
    const key = `${elem_name}:${attr_name}`;
    const attr_type = _M0MPC16option6Option10unwrap__orGsE(_M0MPB3Map3getGssE(self.attr_types, key), "CDATA");
    if (attr_type === "CDATA") {
      return value;
    } else {
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      let in_whitespace = true;
      let need_space = false;
      const _bind$3 = value.length;
      let _tmp$22 = 0;
      while (true) {
        const _string_index = _tmp$22;
        if (_string_index < _bind$3) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$4 = value.charCodeAt(_string_index);
            if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
              const _bind$5 = value.charCodeAt(_string_index + 1 | 0);
              if (_bind$5 >= 56320 && _bind$5 <= 57343) {
                const _tmp$23 = _string_index + 2 | 0;
                const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              } else {
                const _tmp$23 = _string_index + 1 | 0;
                const _p = _bind$4;
                _decoded_next_string_index = _tmp$23;
                _decoded_char = _p;
                break _L;
              }
            } else {
              const _tmp$23 = _string_index + 1 | 0;
              const _p = _bind$4;
              _decoded_next_string_index = _tmp$23;
              _decoded_char = _p;
              break _L;
            }
          }
          if (_decoded_char === 32 || (_decoded_char === 9 || (_decoded_char === 10 || _decoded_char === 13))) {
            if (!in_whitespace) {
              need_space = true;
              in_whitespace = true;
            }
          } else {
            if (need_space) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
              need_space = false;
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
            in_whitespace = false;
          }
          _tmp$22 = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
  function _M0MP29Milky20183xml6Reader17read__attr__value(self) {
    let quote;
    _L: {
      _L$2: {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break _L$2;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 34: {
              quote = 34;
              break;
            }
            case 39: {
              quote = 39;
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected quoted attribute value"));
    }
    _M0MP29Milky20183xml6Reader7advance(self);
    const value_start = _M0MP29Milky20183xml6Reader16source__position(self);
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    while (true) {
      if (!(self.pos >= self.input.length)) {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break;
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          if (_c === quote) {
            const value_end = _M0MP29Milky20183xml6Reader16source__position(self);
            _M0MP29Milky20183xml6Reader7advance(self);
            return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE2Ok({ _0: buf.val, _1: _M0FP29Milky20183xml12source__span(value_start, value_end) });
          } else {
            switch (_c) {
              case 60: {
                return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("'<' not allowed in attribute value"));
              }
              case 38: {
                _M0MP29Milky20183xml6Reader7advance(self);
                const entity_name = _M0MP29Milky20183xml6Reader11read__while(self, (c) => c !== 59 && (c !== quote && c !== 60));
                _L$2: {
                  _L$3: {
                    const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                    if (_bind$4 === -1) {
                      break _L$3;
                    } else {
                      const _Some$2 = _bind$4;
                      const _x = _Some$2;
                      if (_x === 59) {
                        _M0MP29Milky20183xml6Reader7advance(self);
                        if (_M0MPC16string6String11has__prefix(entity_name, new _M0TPC16string10StringView(_M0MP29Milky20183xml6Reader17read__attr__valueN7_2abindS2054, 0, _M0MP29Milky20183xml6Reader17read__attr__valueN7_2abindS2054.length))) {
                          const entity = `&${entity_name};`;
                          const _bind$5 = _M0FP29Milky20183xml8unescape(entity);
                          let decoded;
                          if (_bind$5.$tag === 1) {
                            const _ok = _bind$5;
                            decoded = _ok._0;
                          } else {
                            return _bind$5;
                          }
                          _M0IPB13StringBuilderPB6Logger13write__string(buf, decoded);
                        } else {
                          const entity_ref = `&${entity_name};`;
                          const _bind$5 = _M0MP29Milky20183xml6Reader21expand__entity__value(self, entity_ref);
                          let expanded;
                          if (_bind$5.$tag === 1) {
                            const _ok = _bind$5;
                            expanded = _ok._0;
                          } else {
                            return _bind$5;
                          }
                          const _bind$6 = expanded.length;
                          let _tmp$22 = 0;
                          while (true) {
                            const _string_index = _tmp$22;
                            if (_string_index < _bind$6) {
                              let _decoded_next_string_index;
                              let _decoded_char;
                              _L$4: {
                                const _bind$7 = expanded.charCodeAt(_string_index);
                                if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
                                  const _bind$8 = expanded.charCodeAt(_string_index + 1 | 0);
                                  if (_bind$8 >= 56320 && _bind$8 <= 57343) {
                                    const _tmp$23 = _string_index + 2 | 0;
                                    const _p = (((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0;
                                    _decoded_next_string_index = _tmp$23;
                                    _decoded_char = _p;
                                    break _L$4;
                                  } else {
                                    const _tmp$23 = _string_index + 1 | 0;
                                    const _p = _bind$7;
                                    _decoded_next_string_index = _tmp$23;
                                    _decoded_char = _p;
                                    break _L$4;
                                  }
                                } else {
                                  const _tmp$23 = _string_index + 1 | 0;
                                  const _p = _bind$7;
                                  _decoded_next_string_index = _tmp$23;
                                  _decoded_char = _p;
                                  break _L$4;
                                }
                              }
                              if (_decoded_char === 9 || (_decoded_char === 10 || _decoded_char === 13)) {
                                _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
                              } else {
                                _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
                              }
                              _tmp$22 = _decoded_next_string_index;
                              continue;
                            } else {
                              break;
                            }
                          }
                        }
                      } else {
                        break _L$3;
                      }
                    }
                    break _L$2;
                  }
                  return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("entity reference must end with ';'"));
                }
                break;
              }
              default: {
                const code = _c;
                if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
                  return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in attribute value"));
                }
                if (_c === 9 || (_c === 10 || _c === 13)) {
                  _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
                } else {
                  _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
                }
                _M0MP29Milky20183xml6Reader7advance(self);
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGUsRP29Milky20183xml10SourceSpanERP29Milky20183xml12XmlErrorKindE2Ok({ _0: buf.val, _1: _M0FP29Milky20183xml12source__span(value_start, _M0MP29Milky20183xml6Reader16source__position(self)) });
  }
  function _M0MP29Milky20183xml6Reader16read__attributes(self, elem_name) {
    const attributes = [];
    let need_whitespace = false;
    while (true) {
      const had_whitespace = _M0MP29Milky20183xml6Reader23skip__whitespace__count(self) > 0;
      _L: {
        _L$2: {
          const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
          if (_bind$3 === -1) {
            break;
          } else {
            const _Some = _bind$3;
            const _c = _Some;
            if (_M0FP29Milky20183xml21is__name__start__char(_c)) {
              if (need_whitespace && !had_whitespace) {
                return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("whitespace required between attributes"));
              }
              const attribute_start = _M0MP29Milky20183xml6Reader16source__position(self);
              const _bind$4 = _M0MP29Milky20183xml6Reader10read__name(self);
              let attr_name;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                attr_name = _ok._0;
              } else {
                return _bind$4;
              }
              const name_end = _M0MP29Milky20183xml6Reader16source__position(self);
              _M0MP29Milky20183xml6Reader16skip__whitespace(self);
              _L$3: {
                _L$4: {
                  const _bind$5 = _M0MP29Milky20183xml6Reader4peek(self);
                  if (_bind$5 === -1) {
                    break _L$4;
                  } else {
                    const _Some$2 = _bind$5;
                    const _x = _Some$2;
                    if (_x === 61) {
                      _M0MP29Milky20183xml6Reader7advance(self);
                      _M0MP29Milky20183xml6Reader16skip__whitespace(self);
                      const _bind$6 = _M0MP29Milky20183xml6Reader17read__attr__value(self);
                      let _bind$7;
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _bind$7 = _ok._0;
                      } else {
                        return _bind$6;
                      }
                      const _raw_value = _bind$7._0;
                      const _value_span = _bind$7._1;
                      const normalized_value = _M0MP29Milky20183xml6Reader25normalize__attr__by__type(self, elem_name, attr_name, _raw_value);
                      const _p = _M0MPC15array5Array4iterGRP29Milky20183xml12XmlAttributeE(attributes);
                      let exists;
                      while (true) {
                        const _p$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(_p);
                        if (_p$2 === undefined) {
                          exists = false;
                          break;
                        } else {
                          const _p$3 = _p$2;
                          const _p$4 = _p$3;
                          if (_p$4.name === attr_name) {
                            exists = true;
                            break;
                          }
                          continue;
                        }
                      }
                      if (exists) {
                        return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`duplicate attribute: ${attr_name}`));
                      }
                      _M0MPC15array5Array4pushGsE(attributes, new _M0TP29Milky20183xml12XmlAttribute(attr_name, normalized_value, _M0FP29Milky20183xml12source__span(attribute_start, _M0MP29Milky20183xml6Reader16source__position(self)), _M0FP29Milky20183xml12source__span(attribute_start, name_end), _value_span));
                      need_whitespace = true;
                    } else {
                      break _L$4;
                    }
                  }
                  break _L$3;
                }
                return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '=' after attribute name"));
              }
            } else {
              switch (_c) {
                case 47: {
                  break _L$2;
                }
                case 62: {
                  break _L$2;
                }
                default: {
                  if (_M0FP29Milky20183xml14is__name__char(_c)) {
                    return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`attribute name cannot start with '${_M0IPC14char4CharPB4Show10to__string(_c)}'`));
                  } else {
                    return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`unexpected character in tag: '${_M0IPC14char4CharPB4Show10to__string(_c)}'`));
                  }
                }
              }
            }
          }
          break _L;
        }
        break;
      }
      continue;
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP29Milky20183xml12XmlAttributeERP29Milky20183xml12XmlErrorKindE2Ok(attributes);
  }
  function _M0MP29Milky20183xml6Reader16read__start__tag(self, start) {
    const _bind$3 = _M0MP29Milky20183xml6Reader10read__name(self);
    let name;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      name = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP29Milky20183xml6Reader16read__attributes(self, name);
    let attributes;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      attributes = _ok._0;
    } else {
      return _bind$4;
    }
    _M0MP29Milky20183xml6Reader16skip__whitespace(self);
    _L: {
      const _bind$5 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$5 === -1) {
        break _L;
      } else {
        const _Some = _bind$5;
        const _x = _Some;
        switch (_x) {
          case 47: {
            _M0MP29Milky20183xml6Reader7advance(self);
            _L$2: {
              const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
              if (_bind$6 === -1) {
                break _L$2;
              } else {
                const _Some$2 = _bind$6;
                const _x$2 = _Some$2;
                if (_x$2 === 62) {
                  _M0MP29Milky20183xml6Reader7advance(self);
                  return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind5Empty(new _M0TP29Milky20183xml10XmlElement(name, attributes)));
                } else {
                  break _L$2;
                }
              }
            }
            return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '>' after '/'"));
          }
          case 62: {
            _M0MP29Milky20183xml6Reader7advance(self);
            _M0MPC15array5Array4pushGsE(self.tag_stack, { _0: name, _1: _M0FP29Milky20183xml12source__span(start, _M0MP29Milky20183xml6Reader16source__position(self)) });
            return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind5Start(new _M0TP29Milky20183xml10XmlElement(name, attributes)));
          }
          default: {
            break _L;
          }
        }
      }
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("expected '>' or '/>' at end of start tag"));
  }
  function _M0MP29Milky20183xml6Reader9read__tag(self, start) {
    _M0MP29Milky20183xml6Reader7advance(self);
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(_M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eUnexpectedEof__);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      switch (_x) {
        case 47: {
          return _M0MP29Milky20183xml6Reader14read__end__tag(self);
        }
        case 33: {
          return _M0MP29Milky20183xml6Reader13read__special(self);
        }
        case 63: {
          return _M0MP29Milky20183xml6Reader8read__pi(self);
        }
        default: {
          return _M0MP29Milky20183xml6Reader16read__start__tag(self, start);
        }
      }
    }
  }
  function _M0FP29Milky20183xml11has__markup(s) {
    const chars = _M0MPC16string6String9to__array(s);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 60) {
          if ((i + 1 | 0) < len) {
            const next = _M0MPC15array5Array2atGcE(chars, i + 1 | 0);
            if (_M0FP29Milky20183xml21is__name__start__char(next) || (next === 47 || (next === 33 || next === 63))) {
              return true;
            }
          }
        } else {
          if (_M0MPC15array5Array2atGcE(chars, i) === 38) {
            return true;
          }
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP29Milky20183xml24normalize__line__endings(s) {
    const chars = _M0MPC16string6String9to__array(s);
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const len = chars.length;
    let i = 0;
    while (true) {
      if (i < len) {
        if (_M0MPC15array5Array2atGcE(chars, i) === 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
          if ((i + 1 | 0) < len && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 10) {
            i = i + 1 | 0;
          }
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC15array5Array2atGcE(chars, i));
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
  function _M0MP29Milky20183xml6Reader22read__whitespace__only(self) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _L: while (true) {
      if (!(self.pos >= self.input.length)) {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 60: {
              break _L;
            }
            case 38: {
              if (self.root_closed) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("character reference after root element"));
              } else {
                return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("character reference before root element"));
              }
            }
            default: {
              const code = _x;
              if (_x === 32 || (_x === 9 || (_x === 10 || _x === 13))) {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, _x);
                _M0MP29Milky20183xml6Reader7advance(self);
              } else {
                if (code === 65279) {
                  _M0MP29Milky20183xml6Reader7advance(self);
                } else {
                  if (self.root_closed) {
                    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content after root element"));
                  } else {
                    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content before root element"));
                  }
                }
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml9EventKindRP29Milky20183xml12XmlErrorKindE2Ok(new _M0DTP29Milky20183xml9EventKind4Text(buf.val));
  }
  function _M0MP29Milky20183xml6Reader25reject__trailing__content(self) {
    _M0MP29Milky20183xml6Reader16skip__whitespace(self);
    const start = _M0MP29Milky20183xml6Reader16source__position(self);
    const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      if (_x === 38) {
        _M0MP29Milky20183xml6Reader7advance(self);
        while (true) {
          const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
          if (_bind$4 === -1) {
            break;
          } else {
            const _Some$2 = _bind$4;
            const _c = _Some$2;
            if (_c !== 59) {
              if (_c !== 60) {
                if (_c !== 38) {
                  if (!_M0FP29Milky20183xml14is__whitespace(_c)) {
                    _M0MP29Milky20183xml6Reader7advance(self);
                    continue;
                  } else {
                    break;
                  }
                } else {
                  break;
                }
              } else {
                break;
              }
            } else {
              break;
            }
          }
        }
        const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$4 === -1) {
        } else {
          const _Some$2 = _bind$4;
          const _x$2 = _Some$2;
          if (_x$2 === 59) {
            _M0MP29Milky20183xml6Reader7advance(self);
          }
        }
        return new _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE3Err(new _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("character reference after root element"), _M0FP29Milky20183xml12source__span(start, _M0MP29Milky20183xml6Reader16source__position(self))));
      } else {
        if (_x !== 60) {
          while (true) {
            const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
            if (_bind$4 === -1) {
              break;
            } else {
              const _Some$2 = _bind$4;
              const _c = _Some$2;
              if (_c !== 60) {
                if (_c !== 38) {
                  _M0MP29Milky20183xml6Reader7advance(self);
                  continue;
                } else {
                  break;
                }
              } else {
                break;
              }
            }
          }
          return new _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE3Err(new _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content after root element"), _M0FP29Milky20183xml12source__span(start, _M0MP29Milky20183xml6Reader16source__position(self))));
        } else {
          return new _M0DTPC16result6ResultGuRP29Milky20183xml8XmlErrorE2Ok(undefined);
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader11read__event(self) {
    if (self.pos >= self.input.length && (self.pending_events.length === 0 && self.tag_stack.length > 0)) {
      const unclosed = _M0MPC15array5Array2atGsE(self.tag_stack, self.tag_stack.length - 1 | 0);
      return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE3Err(new _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`unclosed element: <${unclosed._0}>`), unclosed._1));
    }
    if (self.root_closed && self.pending_events.length === 0) {
      const _bind$3 = _M0MP29Milky20183xml6Reader25reject__trailing__content(self);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
    }
    const start = _M0MP29Milky20183xml6Reader16source__position(self);
    let _try_err;
    _L: {
      const _bind$3 = _M0MP29Milky20183xml6Reader21read__event__internal(self);
      let _tmp$22;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$22 = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE2Ok(_tmp$22);
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml8XmlErrorE3Err(new _M0DTPC15error5Error31Milky2018_2fxml_2eXmlError_2eAt(_try_err, _M0FP29Milky20183xml12source__span(start, _M0MP29Milky20183xml6Reader16source__position(self))));
  }
  function _M0MP29Milky20183xml6Reader21read__event__internal(self) {
    while (true) {
      if (self.pending_events.length > 0) {
        const event = _M0MP29Milky20183xml6Reader19pop__pending__event(self);
        _L: {
          const _bind$3 = event.kind;
          if (_bind$3.$tag === 3) {
            const _Text = _bind$3;
            const _s = _Text._0;
            if (_s === "") {
              continue;
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        }
        self.seen_content = true;
        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(event);
      }
      if (self.pos >= self.input.length) {
        if (self.tag_stack.length > 0) {
          const unclosed = _M0MPC15array5Array2atGsE(self.tag_stack, self.tag_stack.length - 1 | 0);
          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`unclosed element: <${unclosed._0}>`));
        }
        if (!self.seen_root) {
          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("empty document - no root element"));
        }
        const position = _M0MP29Milky20183xml6Reader16source__position(self);
        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(new _M0TP29Milky20183xml5Event(_M0DTP29Milky20183xml9EventKind3Eof__, _M0FP29Milky20183xml12source__span(position, position)));
      }
      const event_start = _M0MP29Milky20183xml6Reader16source__position(self);
      const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
      if (_bind$3 === -1) {
        if (self.tag_stack.length > 0) {
          const unclosed = _M0MPC15array5Array2atGsE(self.tag_stack, self.tag_stack.length - 1 | 0);
          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax(`unclosed element: <${unclosed._0}>`));
        }
        if (!self.seen_root) {
          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("empty document - no root element"));
        }
        const position = _M0MP29Milky20183xml6Reader16source__position(self);
        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(new _M0TP29Milky20183xml5Event(_M0DTP29Milky20183xml9EventKind3Eof__, _M0FP29Milky20183xml12source__span(position, position)));
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x === 60) {
          const _bind$4 = _M0MP29Milky20183xml6Reader9read__tag(self, event_start);
          let parsed;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            parsed = _ok._0;
          } else {
            return _bind$4;
          }
          if (self.had_bom) {
            if (parsed.$tag === 7) {
              self.just_saw_decl = true;
              continue;
            }
          }
          switch (parsed.$tag) {
            case 0: {
              self.seen_content = true;
              if (self.root_closed) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content after root element"));
              } else {
                if (self.tag_stack.length === 1) {
                  self.seen_root = true;
                }
              }
              break;
            }
            case 2: {
              self.seen_content = true;
              if (self.root_closed) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content after root element"));
              } else {
                if (!self.seen_root) {
                  self.seen_root = true;
                  self.root_closed = true;
                }
              }
              break;
            }
            case 1: {
              self.seen_content = true;
              if (self.tag_stack.length === 0 && self.seen_root) {
                self.root_closed = true;
              }
              break;
            }
            case 4: {
              self.seen_content = true;
              if (self.root_closed) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA section after root element"));
              }
              if (!self.seen_root || self.tag_stack.length === 0) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("CDATA section not allowed in prolog"));
              }
              break;
            }
            case 3: {
              self.seen_content = true;
              self.just_saw_decl = false;
              break;
            }
            case 5: {
              self.seen_content = true;
              self.just_saw_decl = false;
              break;
            }
            case 8: {
              self.seen_content = true;
              self.just_saw_decl = false;
              self.just_saw_doctype = true;
              break;
            }
            case 6: {
              self.seen_content = true;
              self.just_saw_decl = false;
              break;
            }
            case 7: {
              self.just_saw_decl = true;
              break;
            }
          }
          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(new _M0TP29Milky20183xml5Event(parsed, _M0FP29Milky20183xml12source__span(event_start, _M0MP29Milky20183xml6Reader16source__position(self))));
        } else {
          if (!self.seen_root) {
            if (self.just_saw_decl) {
              while (true) {
                const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                if (_bind$4 === -1) {
                  break;
                } else {
                  const _Some$2 = _bind$4;
                  const _c = _Some$2;
                  if (_c === 32 || (_c === 9 || (_c === 10 || _c === 13))) {
                    _M0MP29Milky20183xml6Reader7advance(self);
                  } else {
                    if (_c === 60) {
                      break;
                    } else {
                      if (_c === 38) {
                        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("character reference before root element"));
                      } else {
                        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("content before root element"));
                      }
                    }
                  }
                  continue;
                }
              }
              self.just_saw_decl = false;
              continue;
            }
            const _bind$4 = _M0MP29Milky20183xml6Reader22read__whitespace__only(self);
            let text_event;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              text_event = _ok._0;
            } else {
              return _bind$4;
            }
            self.seen_content = true;
            if (self.just_saw_doctype) {
              self.just_saw_doctype = false;
              while (true) {
                if (self.internal_subset_events.length > 0) {
                  _M0MP29Milky20183xml6Reader20push__pending__event(self, _M0MPC15array5Array6removeGRP29Milky20183xml5EventE(self.internal_subset_events, 0));
                  continue;
                } else {
                  break;
                }
              }
            }
            return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(new _M0TP29Milky20183xml5Event(text_event, _M0FP29Milky20183xml12source__span(event_start, _M0MP29Milky20183xml6Reader16source__position(self))));
          } else {
            const _bind$4 = _M0MP29Milky20183xml6Reader10read__text(self);
            let text_event;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              text_event = _ok._0;
            } else {
              return _bind$4;
            }
            _L: {
              const _bind$5 = text_event.kind;
              if (_bind$5.$tag === 3) {
                const _Text = _bind$5;
                const _s = _Text._0;
                if (_s === "") {
                  continue;
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            self.seen_content = true;
            return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(text_event);
          }
        }
      }
    }
  }
  function _M0MP29Milky20183xml6Reader10read__text(self) {
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let text_start = _M0MP29Milky20183xml6Reader16source__position(self);
    _L: while (true) {
      if (!(self.pos >= self.input.length)) {
        const _bind$3 = _M0MP29Milky20183xml6Reader4peek(self);
        if (_bind$3 === -1) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          switch (_x) {
            case 60: {
              break _L;
            }
            case 38: {
              const current_text = buf.val;
              if (current_text.length > 0) {
                _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind4Text(current_text), _M0FP29Milky20183xml12source__span(text_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                _M0MPB13StringBuilder5reset(buf);
              }
              const entity_start = _M0MP29Milky20183xml6Reader16source__position(self);
              _M0MP29Milky20183xml6Reader7advance(self);
              _L$2: {
                _L$3: {
                  const _bind$4 = _M0MP29Milky20183xml6Reader4peek(self);
                  if (_bind$4 === -1) {
                    break _L$3;
                  } else {
                    const _Some$2 = _bind$4;
                    const _x$2 = _Some$2;
                    if (_x$2 === 35) {
                      const entity_name = _M0MP29Milky20183xml6Reader11read__while(self, (c) => c !== 59 && c !== 60);
                      _L$4: {
                        _L$5: {
                          const _bind$5 = _M0MP29Milky20183xml6Reader4peek(self);
                          if (_bind$5 === -1) {
                            break _L$5;
                          } else {
                            const _Some$3 = _bind$5;
                            const _x$3 = _Some$3;
                            if (_x$3 === 59) {
                              _M0MP29Milky20183xml6Reader7advance(self);
                              const entity = `&${entity_name};`;
                              const _bind$6 = _M0FP29Milky20183xml8unescape(entity);
                              let decoded;
                              if (_bind$6.$tag === 1) {
                                const _ok = _bind$6;
                                decoded = _ok._0;
                              } else {
                                return _bind$6;
                              }
                              _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind4Text(decoded), _M0FP29Milky20183xml12source__span(entity_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                            } else {
                              break _L$5;
                            }
                          }
                          break _L$4;
                        }
                        return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("entity reference must end with ';'"));
                      }
                    } else {
                      if (_M0FP29Milky20183xml21is__name__start__char(_x$2)) {
                        const _bind$5 = _M0MP29Milky20183xml6Reader10read__name(self);
                        let entity_name;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          entity_name = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        _L$4: {
                          _L$5: {
                            const _bind$6 = _M0MP29Milky20183xml6Reader4peek(self);
                            if (_bind$6 === -1) {
                              break _L$5;
                            } else {
                              const _Some$3 = _bind$6;
                              const _x$3 = _Some$3;
                              if (_x$3 === 59) {
                                _M0MP29Milky20183xml6Reader7advance(self);
                                const _bind$7 = _M0MPB3Map3getGssE(self.entities, entity_name);
                                if (_bind$7 === undefined) {
                                  const entity_ref = `&${entity_name};`;
                                  const _bind$8 = _M0MP29Milky20183xml6Reader21expand__entity__value(self, entity_ref);
                                  let expanded;
                                  if (_bind$8.$tag === 1) {
                                    const _ok = _bind$8;
                                    expanded = _ok._0;
                                  } else {
                                    return _bind$8;
                                  }
                                  const normalized = _M0FP29Milky20183xml24normalize__line__endings(expanded);
                                  _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind4Text(normalized), _M0FP29Milky20183xml12source__span(entity_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                                } else {
                                  const _Some$4 = _bind$7;
                                  const _stored_value = _Some$4;
                                  const entity_ref = `&${entity_name};`;
                                  const _bind$8 = _M0MP29Milky20183xml6Reader21expand__entity__value(self, entity_ref);
                                  let expanded;
                                  if (_bind$8.$tag === 1) {
                                    const _ok = _bind$8;
                                    expanded = _ok._0;
                                  } else {
                                    return _bind$8;
                                  }
                                  if (_M0FP29Milky20183xml11has__markup(_stored_value) && _M0FP29Milky20183xml25is__well__formed__content(_stored_value)) {
                                    _M0MP29Milky20183xml6Reader22parse__entity__content(self, _stored_value, _M0FP29Milky20183xml12source__span(entity_start, _M0MP29Milky20183xml6Reader16source__position(self)));
                                  } else {
                                    const normalized = _M0FP29Milky20183xml24normalize__line__endings(expanded);
                                    _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind4Text(normalized), _M0FP29Milky20183xml12source__span(entity_start, _M0MP29Milky20183xml6Reader16source__position(self))));
                                  }
                                }
                              } else {
                                break _L$5;
                              }
                            }
                            break _L$4;
                          }
                          return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("entity reference must end with ';'"));
                        }
                      } else {
                        break _L$3;
                      }
                    }
                  }
                  break _L$2;
                }
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid entity reference"));
              }
              text_start = _M0MP29Milky20183xml6Reader16source__position(self);
              break;
            }
            case 93: {
              if (_M0MP29Milky20183xml6Reader13check__string(self, "]]>")) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("']]>' is not allowed in element content"));
              }
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
              _M0MP29Milky20183xml6Reader7advance(self);
              break;
            }
            default: {
              const code = _x;
              if (!_M0FP29Milky20183xml29is__valid__xml__content__char(code)) {
                return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE3Err(new _M0DTPC15error5Error46Milky2018_2fxml_2eXmlErrorKind_2eInvalidSyntax("invalid character in content"));
              }
              if (_x === 13) {
                _M0MP29Milky20183xml6Reader7advance(self);
                if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP29Milky20183xml6Reader4peek(self), _M0MP29Milky20183xml6Reader10read__textN6constrS2460)) {
                  _M0MP29Milky20183xml6Reader7advance(self);
                }
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, _x);
                _M0MP29Milky20183xml6Reader7advance(self);
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    const final_text = buf.val;
    if (final_text.length > 0) {
      _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind4Text(final_text), _M0FP29Milky20183xml12source__span(text_start, _M0MP29Milky20183xml6Reader16source__position(self))));
    }
    let _tmp$22;
    if (self.pending_events.length > 0) {
      _tmp$22 = _M0MP29Milky20183xml6Reader19pop__pending__event(self);
    } else {
      const position = _M0MP29Milky20183xml6Reader16source__position(self);
      _tmp$22 = new _M0TP29Milky20183xml5Event(_M0MP29Milky20183xml6Reader10read__textN6constrS2461, _M0FP29Milky20183xml12source__span(position, position));
    }
    return new _M0DTPC16result6ResultGRP29Milky20183xml5EventRP29Milky20183xml12XmlErrorKindE2Ok(_tmp$22);
  }
  function _M0FP29Milky20183xml25is__well__formed__content(s) {
    const test_reader = _M0MP29Milky20183xml6Reader12from__string(`<root>${s}</root>`);
    while (true) {
      let _try_err;
      _L: {
        const _bind$3 = _M0MP29Milky20183xml6Reader11read__event(test_reader);
        let _bind$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _bind$4 = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        const _x = _bind$4.kind;
        if (_x.$tag === 9) {
          return true;
        } else {
          continue;
        }
      }
      return false;
    }
  }
  function _M0MP29Milky20183xml6Reader22parse__entity__content(self, content, entity_span) {
    const sub_reader = _M0MP29Milky20183xml6Reader12from__string(content);
    const _it = _M0MPB3Map5iter2GssE(self.entities);
    while (true) {
      const _bind$3 = _M0MPB5Iter24nextGssE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        _M0MPB3Map3setGssE(sub_reader.entities, _k, _v);
        continue;
      }
    }
    sub_reader.seen_root = true;
    const position = _M0MP29Milky20183xml6Reader16source__position(sub_reader);
    _M0MPC15array5Array4pushGsE(sub_reader.tag_stack, { _0: "_entity_content_", _1: _M0FP29Milky20183xml12source__span(position, position) });
    _L: while (true) {
      let event;
      let _try_err;
      _L$2: {
        _L$3: {
          const _bind$3 = _M0MP29Milky20183xml6Reader21read__event__internal(sub_reader);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            event = _ok._0;
          } else {
            const _err = _bind$3;
            _try_err = _err._0;
            break _L$3;
          }
          break _L$2;
        }
        return;
      }
      const _bind$3 = event.kind;
      switch (_bind$3.$tag) {
        case 9: {
          return;
        }
        case 0: {
          const _Start = _bind$3;
          const _element = _Start._0;
          const _p = _element.attributes;
          const _p$2 = new Array(_p.length);
          const _p$3 = _p.length;
          let _tmp$22 = 0;
          while (true) {
            const _p$4 = _tmp$22;
            if (_p$4 < _p$3) {
              const _p$5 = _p[_p$4];
              _p$2[_p$4] = new _M0TP29Milky20183xml12XmlAttribute(_p$5.name, _p$5.value, entity_span, entity_span, entity_span);
              _tmp$22 = _p$4 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const attributes = _p$2;
          _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind5Start(new _M0TP29Milky20183xml10XmlElement(_element.name, attributes)), entity_span));
          break;
        }
        case 2: {
          const _Empty = _bind$3;
          const _element$2 = _Empty._0;
          const _p$4 = _element$2.attributes;
          const _p$5 = new Array(_p$4.length);
          const _p$6 = _p$4.length;
          let _tmp$23 = 0;
          while (true) {
            const _p$7 = _tmp$23;
            if (_p$7 < _p$6) {
              const _p$8 = _p$4[_p$7];
              _p$5[_p$7] = new _M0TP29Milky20183xml12XmlAttribute(_p$8.name, _p$8.value, entity_span, entity_span, entity_span);
              _tmp$23 = _p$7 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const attributes$2 = _p$5;
          _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(new _M0DTP29Milky20183xml9EventKind5Empty(new _M0TP29Milky20183xml10XmlElement(_element$2.name, attributes$2)), entity_span));
          break;
        }
        default: {
          _M0MP29Milky20183xml6Reader20push__pending__event(self, new _M0TP29Milky20183xml5Event(_bind$3, entity_span));
        }
      }
      continue;
    }
  }
  function _M0FP27hustcer4fzip26fzip__error__code__to__int(code) {
    switch (code) {
      case 0: {
        return 0;
      }
      case 1: {
        return 1;
      }
      case 2: {
        return 2;
      }
      case 3: {
        return 3;
      }
      case 4: {
        return 4;
      }
      case 5: {
        return 5;
      }
      case 6: {
        return 6;
      }
      case 7: {
        return 7;
      }
      case 8: {
        return 8;
      }
      case 9: {
        return 9;
      }
      case 10: {
        return 10;
      }
      case 11: {
        return 11;
      }
      case 12: {
        return 12;
      }
      case 13: {
        return 13;
      }
      case 14: {
        return 14;
      }
      case 15: {
        return 15;
      }
      default: {
        return 16;
      }
    }
  }
  function _M0FP27hustcer4fzip17fzip__err_2einner(code, msg) {
    let message;
    const _p = "";
    if (!(msg === _p)) {
      message = msg;
    } else {
      message = _M0MPC15array5Array2atGsE(_M0FP27hustcer4fzip15error__messages, _M0FP27hustcer4fzip26fzip__error__code__to__int(code));
    }
    return new _M0DTPC15error5Error38hustcer_2ffzip_2eFzipError_2eFzipError(code, message);
  }
  function _M0FP27hustcer4fzip4freb(eb, start) {
    const b = $make_array_len_and_init(31, 0);
    let s = start;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < 31) {
        let shift;
        if (i > 0) {
          const _tmp$23 = i - 1 | 0;
          shift = _tmp$23 >>> 0 < eb.length ? eb[_tmp$23] : $oob();
        } else {
          shift = 0;
        }
        s = s + (1 << shift) | 0;
        if (i >>> 0 < b.length) {
          b[i] = s;
        } else {
          $oob();
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const r = $make_array_len_and_init(30 >>> 0 < b.length ? b[30] : $oob(), 0);
    let _tmp$23 = 1;
    while (true) {
      const i = _tmp$23;
      if (i < 30) {
        const _bind$3 = i >>> 0 < b.length ? b[i] : $oob();
        const _tmp$24 = i + 1 | 0;
        const _bind$4 = _tmp$24 >>> 0 < b.length ? b[_tmp$24] : $oob();
        let _tmp$25 = _bind$3;
        while (true) {
          const j = _tmp$25;
          if (j < _bind$4) {
            if (j >>> 0 < r.length) {
              r[j] = j - (i >>> 0 < b.length ? b[i] : $oob()) << 5 | i;
            } else {
              $oob();
            }
            _tmp$25 = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { _0: b, _1: r };
  }
  function _M0FP27hustcer4fzip6h__map(cd, mb, r) {
    const s = cd.length;
    const l = $make_array_len_and_init(mb, 0);
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < s) {
        if ((i >>> 0 < cd.length ? cd[i] : $oob()) !== 0) {
          const _tmp$23 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
          const _tmp$24 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
          if (_tmp$23 >>> 0 < l.length) {
            l[_tmp$23] = (_tmp$24 >>> 0 < l.length ? l[_tmp$24] : $oob()) + 1 | 0;
          } else {
            $oob();
          }
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const le = $make_array_len_and_init(mb, 0);
    let _tmp$23 = 1;
    while (true) {
      const i = _tmp$23;
      if (i < mb) {
        const _tmp$24 = i - 1 | 0;
        const _tmp$25 = _tmp$24 >>> 0 < le.length ? le[_tmp$24] : $oob();
        const _tmp$26 = i - 1 | 0;
        if (i >>> 0 < le.length) {
          le[i] = _tmp$25 + (_tmp$26 >>> 0 < l.length ? l[_tmp$26] : $oob()) << 1;
        } else {
          $oob();
        }
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (r !== 0) {
      const co2 = $make_array_len_and_init(1 << mb, 0);
      const rvb = 15 - mb | 0;
      let _tmp$24 = 0;
      while (true) {
        const i = _tmp$24;
        if (i < s) {
          if ((i >>> 0 < cd.length ? cd[i] : $oob()) !== 0) {
            const sv = i << 4 | (i >>> 0 < cd.length ? cd[i] : $oob());
            const rb = mb - (i >>> 0 < cd.length ? cd[i] : $oob()) | 0;
            const _tmp$25 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            let v = (_tmp$25 >>> 0 < le.length ? le[_tmp$25] : $oob()) << rb;
            const _tmp$26 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            const _tmp$27 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            if (_tmp$26 >>> 0 < le.length) {
              le[_tmp$26] = (_tmp$27 >>> 0 < le.length ? le[_tmp$27] : $oob()) + 1 | 0;
            } else {
              $oob();
            }
            const m = v | ((1 << rb) - 1 | 0);
            while (true) {
              if (v <= m) {
                const _tmp$28 = v;
                const _tmp$29 = (_tmp$28 >>> 0 < _M0FP27hustcer4fzip3rev.length ? _M0FP27hustcer4fzip3rev[_tmp$28] : $oob()) >> rvb;
                if (_tmp$29 >>> 0 < co2.length) {
                  co2[_tmp$29] = sv;
                } else {
                  $oob();
                }
                v = v + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          _tmp$24 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return co2;
    } else {
      const co2 = $make_array_len_and_init(s, 0);
      let _tmp$24 = 0;
      while (true) {
        const i = _tmp$24;
        if (i < s) {
          if ((i >>> 0 < cd.length ? cd[i] : $oob()) !== 0) {
            const _tmp$25 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            const _tmp$26 = _tmp$25 >>> 0 < le.length ? le[_tmp$25] : $oob();
            if (i >>> 0 < co2.length) {
              co2[i] = (_tmp$26 >>> 0 < _M0FP27hustcer4fzip3rev.length ? _M0FP27hustcer4fzip3rev[_tmp$26] : $oob()) >> (15 - (i >>> 0 < cd.length ? cd[i] : $oob()) | 0);
            } else {
              $oob();
            }
            const _tmp$27 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            const _tmp$28 = (i >>> 0 < cd.length ? cd[i] : $oob()) - 1 | 0;
            if (_tmp$27 >>> 0 < le.length) {
              le[_tmp$27] = (_tmp$28 >>> 0 < le.length ? le[_tmp$28] : $oob()) + 1 | 0;
            } else {
              $oob();
            }
          }
          _tmp$24 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return co2;
    }
  }
  function _M0MP27hustcer4fzip10AdlerState11push__range(self, data, offset, len) {
    let n = self.a;
    let m = self.b;
    const end = offset + len | 0;
    let i = offset;
    while (true) {
      if (i < end) {
        const e = (i + 2655 | 0) < end ? i + 2655 | 0 : end;
        while (true) {
          if ((i + 7 | 0) < e) {
            const _tmp$22 = i;
            const _p = _tmp$22 >>> 0 < data.length ? data[_tmp$22] : $oob();
            const b0 = _p;
            const _tmp$23 = i + 1 | 0;
            const _p$2 = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
            const b1 = _p$2;
            const _tmp$24 = i + 2 | 0;
            const _p$3 = _tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob();
            const b2 = _p$3;
            const _tmp$25 = i + 3 | 0;
            const _p$4 = _tmp$25 >>> 0 < data.length ? data[_tmp$25] : $oob();
            const b3 = _p$4;
            const _tmp$26 = i + 4 | 0;
            const _p$5 = _tmp$26 >>> 0 < data.length ? data[_tmp$26] : $oob();
            const b4 = _p$5;
            const _tmp$27 = i + 5 | 0;
            const _p$6 = _tmp$27 >>> 0 < data.length ? data[_tmp$27] : $oob();
            const b5 = _p$6;
            const _tmp$28 = i + 6 | 0;
            const _p$7 = _tmp$28 >>> 0 < data.length ? data[_tmp$28] : $oob();
            const b6 = _p$7;
            const _tmp$29 = i + 7 | 0;
            const _p$8 = _tmp$29 >>> 0 < data.length ? data[_tmp$29] : $oob();
            const b7 = _p$8;
            n = (n >>> 0) + (b0 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b1 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b2 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b3 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b4 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b5 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b6 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            n = (n >>> 0) + (b7 >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            i = i + 8 | 0;
            continue;
          } else {
            break;
          }
        }
        while (true) {
          if (i < e) {
            const _tmp$22 = n;
            const _tmp$23 = i;
            const _p = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
            n = (_tmp$22 >>> 0) + (_p >>> 0) | 0;
            m = (m >>> 0) + (n >>> 0) | 0;
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        n = ((n & 65535) >>> 0) + ((Math.imul(15, n >>> 16 | 0) | 0) >>> 0) | 0;
        m = ((m & 65535) >>> 0) + ((Math.imul(15, m >>> 16 | 0) | 0) >>> 0) | 0;
        continue;
      } else {
        break;
      }
    }
    self.a = n;
    self.b = m;
  }
  function _M0FP27hustcer4fzip20crc32__update__range(crc, data, offset, len) {
    const end = offset + len | 0;
    let c = crc;
    let i = offset;
    while (true) {
      if ((i + 15 | 0) < end) {
        const _tmp$22 = c;
        const _tmp$23 = i;
        const _p = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
        const _tmp$24 = i + 1 | 0;
        const _p$2 = _tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob();
        const _tmp$25 = _p | _p$2 << 8;
        const _tmp$26 = i + 2 | 0;
        const _p$3 = _tmp$26 >>> 0 < data.length ? data[_tmp$26] : $oob();
        const _tmp$27 = _tmp$25 | _p$3 << 16;
        const _tmp$28 = i + 3 | 0;
        const _p$4 = _tmp$28 >>> 0 < data.length ? data[_tmp$28] : $oob();
        c = _tmp$22 ^ (_tmp$27 | _p$4 << 24);
        const _tmp$29 = i + 4 | 0;
        const _p$5 = _tmp$29 >>> 0 < data.length ? data[_tmp$29] : $oob();
        const _tmp$30 = i + 5 | 0;
        const _p$6 = _tmp$30 >>> 0 < data.length ? data[_tmp$30] : $oob();
        const _tmp$31 = _p$5 | _p$6 << 8;
        const _tmp$32 = i + 6 | 0;
        const _p$7 = _tmp$32 >>> 0 < data.length ? data[_tmp$32] : $oob();
        const _tmp$33 = _tmp$31 | _p$7 << 16;
        const _tmp$34 = i + 7 | 0;
        const _p$8 = _tmp$34 >>> 0 < data.length ? data[_tmp$34] : $oob();
        const d = _tmp$33 | _p$8 << 24;
        const _tmp$35 = c & 255;
        const _tmp$36 = _tmp$35 >>> 0 < _M0FP27hustcer4fzip6crct15.length ? _M0FP27hustcer4fzip6crct15[_tmp$35] : $oob();
        const _tmp$37 = c >>> 8 & 255;
        const _tmp$38 = _tmp$36 ^ (_tmp$37 >>> 0 < _M0FP27hustcer4fzip6crct14.length ? _M0FP27hustcer4fzip6crct14[_tmp$37] : $oob());
        const _tmp$39 = c >>> 16 & 255;
        const _tmp$40 = _tmp$38 ^ (_tmp$39 >>> 0 < _M0FP27hustcer4fzip6crct13.length ? _M0FP27hustcer4fzip6crct13[_tmp$39] : $oob());
        const _tmp$41 = c >>> 24 | 0;
        const _tmp$42 = _tmp$40 ^ (_tmp$41 >>> 0 < _M0FP27hustcer4fzip6crct12.length ? _M0FP27hustcer4fzip6crct12[_tmp$41] : $oob());
        const _tmp$43 = d & 255;
        const _tmp$44 = _tmp$42 ^ (_tmp$43 >>> 0 < _M0FP27hustcer4fzip6crct11.length ? _M0FP27hustcer4fzip6crct11[_tmp$43] : $oob());
        const _tmp$45 = d >>> 8 & 255;
        const _tmp$46 = _tmp$44 ^ (_tmp$45 >>> 0 < _M0FP27hustcer4fzip6crct10.length ? _M0FP27hustcer4fzip6crct10[_tmp$45] : $oob());
        const _tmp$47 = d >>> 16 & 255;
        const _tmp$48 = _tmp$46 ^ (_tmp$47 >>> 0 < _M0FP27hustcer4fzip5crct9.length ? _M0FP27hustcer4fzip5crct9[_tmp$47] : $oob());
        const _tmp$49 = d >>> 24 | 0;
        const _tmp$50 = _tmp$48 ^ (_tmp$49 >>> 0 < _M0FP27hustcer4fzip5crct8.length ? _M0FP27hustcer4fzip5crct8[_tmp$49] : $oob());
        const _tmp$51 = i + 8 | 0;
        const _tmp$52 = _tmp$51 >>> 0 < data.length ? data[_tmp$51] : $oob();
        const _tmp$53 = _tmp$50 ^ (_tmp$52 >>> 0 < _M0FP27hustcer4fzip5crct7.length ? _M0FP27hustcer4fzip5crct7[_tmp$52] : $oob());
        const _tmp$54 = i + 9 | 0;
        const _tmp$55 = _tmp$54 >>> 0 < data.length ? data[_tmp$54] : $oob();
        const _tmp$56 = _tmp$53 ^ (_tmp$55 >>> 0 < _M0FP27hustcer4fzip5crct6.length ? _M0FP27hustcer4fzip5crct6[_tmp$55] : $oob());
        const _tmp$57 = i + 10 | 0;
        const _tmp$58 = _tmp$57 >>> 0 < data.length ? data[_tmp$57] : $oob();
        const _tmp$59 = _tmp$56 ^ (_tmp$58 >>> 0 < _M0FP27hustcer4fzip5crct5.length ? _M0FP27hustcer4fzip5crct5[_tmp$58] : $oob());
        const _tmp$60 = i + 11 | 0;
        const _tmp$61 = _tmp$60 >>> 0 < data.length ? data[_tmp$60] : $oob();
        const _tmp$62 = _tmp$59 ^ (_tmp$61 >>> 0 < _M0FP27hustcer4fzip5crct4.length ? _M0FP27hustcer4fzip5crct4[_tmp$61] : $oob());
        const _tmp$63 = i + 12 | 0;
        const _tmp$64 = _tmp$63 >>> 0 < data.length ? data[_tmp$63] : $oob();
        const _tmp$65 = _tmp$62 ^ (_tmp$64 >>> 0 < _M0FP27hustcer4fzip5crct3.length ? _M0FP27hustcer4fzip5crct3[_tmp$64] : $oob());
        const _tmp$66 = i + 13 | 0;
        const _tmp$67 = _tmp$66 >>> 0 < data.length ? data[_tmp$66] : $oob();
        const _tmp$68 = _tmp$65 ^ (_tmp$67 >>> 0 < _M0FP27hustcer4fzip5crct2.length ? _M0FP27hustcer4fzip5crct2[_tmp$67] : $oob());
        const _tmp$69 = i + 14 | 0;
        const _tmp$70 = _tmp$69 >>> 0 < data.length ? data[_tmp$69] : $oob();
        const _tmp$71 = _tmp$68 ^ (_tmp$70 >>> 0 < _M0FP27hustcer4fzip5crct1.length ? _M0FP27hustcer4fzip5crct1[_tmp$70] : $oob());
        const _tmp$72 = i + 15 | 0;
        const _tmp$73 = _tmp$72 >>> 0 < data.length ? data[_tmp$72] : $oob();
        c = _tmp$71 ^ (_tmp$73 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$73] : $oob());
        i = i + 16 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if ((i + 7 | 0) < end) {
        const _tmp$22 = c;
        const _tmp$23 = i;
        const _p = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
        const _tmp$24 = i + 1 | 0;
        const _p$2 = _tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob();
        const _tmp$25 = _p | _p$2 << 8;
        const _tmp$26 = i + 2 | 0;
        const _p$3 = _tmp$26 >>> 0 < data.length ? data[_tmp$26] : $oob();
        const _tmp$27 = _tmp$25 | _p$3 << 16;
        const _tmp$28 = i + 3 | 0;
        const _p$4 = _tmp$28 >>> 0 < data.length ? data[_tmp$28] : $oob();
        c = _tmp$22 ^ (_tmp$27 | _p$4 << 24);
        const _tmp$29 = c & 255;
        const _tmp$30 = _tmp$29 >>> 0 < _M0FP27hustcer4fzip5crct7.length ? _M0FP27hustcer4fzip5crct7[_tmp$29] : $oob();
        const _tmp$31 = c >>> 8 & 255;
        const _tmp$32 = _tmp$30 ^ (_tmp$31 >>> 0 < _M0FP27hustcer4fzip5crct6.length ? _M0FP27hustcer4fzip5crct6[_tmp$31] : $oob());
        const _tmp$33 = c >>> 16 & 255;
        const _tmp$34 = _tmp$32 ^ (_tmp$33 >>> 0 < _M0FP27hustcer4fzip5crct5.length ? _M0FP27hustcer4fzip5crct5[_tmp$33] : $oob());
        const _tmp$35 = c >>> 24 | 0;
        const _tmp$36 = _tmp$34 ^ (_tmp$35 >>> 0 < _M0FP27hustcer4fzip5crct4.length ? _M0FP27hustcer4fzip5crct4[_tmp$35] : $oob());
        const _tmp$37 = i + 4 | 0;
        const _tmp$38 = _tmp$37 >>> 0 < data.length ? data[_tmp$37] : $oob();
        const _tmp$39 = _tmp$36 ^ (_tmp$38 >>> 0 < _M0FP27hustcer4fzip5crct3.length ? _M0FP27hustcer4fzip5crct3[_tmp$38] : $oob());
        const _tmp$40 = i + 5 | 0;
        const _tmp$41 = _tmp$40 >>> 0 < data.length ? data[_tmp$40] : $oob();
        const _tmp$42 = _tmp$39 ^ (_tmp$41 >>> 0 < _M0FP27hustcer4fzip5crct2.length ? _M0FP27hustcer4fzip5crct2[_tmp$41] : $oob());
        const _tmp$43 = i + 6 | 0;
        const _tmp$44 = _tmp$43 >>> 0 < data.length ? data[_tmp$43] : $oob();
        const _tmp$45 = _tmp$42 ^ (_tmp$44 >>> 0 < _M0FP27hustcer4fzip5crct1.length ? _M0FP27hustcer4fzip5crct1[_tmp$44] : $oob());
        const _tmp$46 = i + 7 | 0;
        const _tmp$47 = _tmp$46 >>> 0 < data.length ? data[_tmp$46] : $oob();
        c = _tmp$45 ^ (_tmp$47 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$47] : $oob());
        i = i + 8 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (i < end) {
        const _tmp$22 = c;
        const _tmp$23 = i;
        const _p = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
        const _tmp$24 = (_tmp$22 ^ _p) & 255;
        c = (_tmp$24 >>> 0 < _M0FP27hustcer4fzip4crct.length ? _M0FP27hustcer4fzip4crct[_tmp$24] : $oob()) ^ (c >>> 8 | 0);
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return c;
  }
  function _M0MP27hustcer4fzip10CRC32State11push__range(self, data, offset, len) {
    self.c = _M0FP27hustcer4fzip20crc32__update__range(self.c, data, offset, len);
  }
  function _M0FP27hustcer4fzip11slc_2einner(v, s, e) {
    const start = s < 0 ? 0 : s;
    const end = e > v.length ? v.length : e;
    const len = end - start | 0;
    if (len <= 0) {
      return $makebytes(0, 0);
    }
    const result = $makebytes(len, 0);
    _M0MPC15array10FixedArray16blit__to_2einnerGyE(v, result, len, start, 0);
    return result;
  }
  function _M0FP27hustcer4fzip2b4(d, b) {
    if ((b + 3 | 0) >= d.length) {
      return new _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, "not enough bytes for b4"));
    }
    const _tmp$22 = b >>> 0 < d.length ? d[b] : $oob();
    const _tmp$23 = b + 1 | 0;
    const _tmp$24 = _tmp$22 | (_tmp$23 >>> 0 < d.length ? d[_tmp$23] : $oob()) << 8;
    const _tmp$25 = b + 2 | 0;
    const _tmp$26 = _tmp$24 | (_tmp$25 >>> 0 < d.length ? d[_tmp$25] : $oob()) << 16;
    const _tmp$27 = b + 3 | 0;
    return new _M0DTPC16result6ResultGjRP27hustcer4fzip9FzipErrorE2Ok(_tmp$26 | (_tmp$27 >>> 0 < d.length ? d[_tmp$27] : $oob()) << 24);
  }
  function _M0FP27hustcer4fzip11ensure__buf(buf, need, max_size) {
    const bl = buf.length;
    let _tmp$22;
    if (need > bl) {
      if (need > max_size || need < 0) {
        return new _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "uncompressed size exceeds max_output_size"));
      }
      const new_size = bl > 0 && (bl < (max_size / 2 | 0) && (Math.imul(bl, 2) | 0) > need) ? Math.imul(bl, 2) | 0 : need;
      const nbuf = $makebytes(new_size, 0);
      _M0MPC15array10FixedArray16blit__to_2einnerGyE(buf, nbuf, bl, 0, 0);
      _tmp$22 = nbuf;
    } else {
      _tmp$22 = buf;
    }
    return new _M0DTPC16result6ResultGAyRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
  }
  function _M0FP27hustcer4fzip22initial__inflate__size(sl, max_output_size) {
    const max_safe = max_output_size / 3 | 0;
    if (sl > max_safe) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "input too large for safe allocation"));
    }
    const base = Math.imul(sl, 3) | 0;
    let _tmp$22;
    if (sl >= 512 && sl < 2048) {
      const expanded = Math.imul(sl, 160) | 0;
      _tmp$22 = expanded > max_output_size ? max_output_size : expanded;
    } else {
      _tmp$22 = base;
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
  }
  function _M0FP27hustcer4fzip8max__val(a) {
    const _p = 0 >>> 0 < a.length ? a[0] : $oob();
    const _p$2 = a.length;
    let _tmp$22 = 0;
    let _tmp$23 = _p;
    while (true) {
      const _p$3 = _tmp$22;
      const _p$4 = _tmp$23;
      if (_p$3 < _p$2) {
        const _p$5 = a[_p$3];
        _tmp$22 = _p$3 + 1 | 0;
        const _p$6 = _p$5;
        _tmp$23 = _p$6 > _p$4 ? _p$6 : _p$4;
        continue;
      } else {
        return _p$4;
      }
    }
  }
  function _M0FP27hustcer4fzip13inflt_2einner(dat, st, buf, dict, max_input_size, max_output_size, dat_off, dat_end, crc_state, adler_state) {
    const sl = dat_end - dat_off | 0;
    if (sl > max_input_size) {
      return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "input exceeds max_input_size"));
    }
    let dl;
    if (dict === undefined) {
      dl = 0;
    } else {
      const _Some = dict;
      const _d = _Some;
      dl = _d.length;
    }
    _L: {
      _L$2: {
        if (sl === 0) {
          break _L$2;
        } else {
          if (st.final_ !== 0) {
            const _bind$3 = st.lm;
            if (_bind$3 === undefined) {
              break _L$2;
            }
          }
        }
        break _L;
      }
      let _tmp$22;
      if (buf === undefined) {
        _tmp$22 = { _0: $makebytes(0, 0), _1: 0 };
      } else {
        const _Some = buf;
        const _b$2 = _Some;
        _tmp$22 = { _0: _b$2, _1: st.bt };
      }
      return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
    }
    const no_buf = buf === undefined;
    const resize = no_buf || st.i !== 2;
    const no_st = st.i;
    let buf$2;
    if (buf === undefined) {
      const _bind$3 = _M0FP27hustcer4fzip22initial__inflate__size(sl, max_output_size);
      let initial_size;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        initial_size = _ok._0;
      } else {
        return _bind$3;
      }
      buf$2 = $makebytes(initial_size, 0);
    } else {
      const _Some = buf;
      buf$2 = _Some;
    }
    const fixed_limit = buf$2.length;
    let grow;
    if (sl < 43690) {
      const safe_grow = Math.imul(sl, 3) | 0;
      grow = safe_grow < 131072 ? safe_grow + 512 | 0 : 131072;
    } else {
      grow = 131072;
    }
    const tbts = Math.imul(dat_end, 8) | 0;
    let final_ = st.final_;
    const init_pos = st.pos + (Math.imul(dat_off, 8) | 0) | 0;
    let bpos = init_pos >> 3;
    let bbuf = 0;
    let bcnt = 0;
    const boff = init_pos & 7;
    if (boff > 0 && bpos < dat_end) {
      const _tmp$22 = bpos;
      bbuf = (_tmp$22 >>> 0 < dat.length ? dat[_tmp$22] : $oob()) >> boff;
      bcnt = 8 - boff | 0;
      bpos = bpos + 1 | 0;
    }
    let bt = st.bt;
    let cksum_bt = bt;
    let lm = st.lm;
    let dm = st.dm;
    let lbt = st.lbt;
    let dbt = st.dbt;
    let continue_loop = true;
    while (true) {
      if (continue_loop) {
        const _bind$3 = lm;
        if (_bind$3 === undefined) {
          if (final_ !== 0) {
            break;
          }
          while (true) {
            if (bcnt < 3 && bpos < dat_end) {
              const _tmp$22 = bbuf;
              const _tmp$23 = bpos;
              bbuf = _tmp$22 | (_tmp$23 >>> 0 < dat.length ? dat[_tmp$23] : $oob()) << bcnt;
              bpos = bpos + 1 | 0;
              bcnt = bcnt + 8 | 0;
              continue;
            } else {
              break;
            }
          }
          final_ = bbuf & 1;
          const btype = bbuf >> 1 & 3;
          bbuf = bbuf >> 3;
          bcnt = bcnt - 3 | 0;
          if (btype === 0) {
            const cur_pos = (Math.imul(bpos, 8) | 0) - bcnt | 0;
            const s = ((cur_pos + 7 | 0) / 8 | 0) + 4 | 0;
            bbuf = 0;
            bcnt = 0;
            if (s > dat_end) {
              if (no_st !== 0) {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, ""));
              }
              break;
            }
            const _tmp$22 = s - 4 | 0;
            const _tmp$23 = _tmp$22 >>> 0 < dat.length ? dat[_tmp$22] : $oob();
            const _tmp$24 = s - 3 | 0;
            const l = _tmp$23 | (_tmp$24 >>> 0 < dat.length ? dat[_tmp$24] : $oob()) << 8;
            const t$19 = s + l | 0;
            if (t$19 > dat_end) {
              if (no_st !== 0) {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, ""));
              }
              break;
            }
            if (resize) {
              const _bind$4 = _M0FP27hustcer4fzip11ensure__buf(buf$2, bt + l | 0, max_output_size);
              let _tmp$25;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp$25 = _ok._0;
              } else {
                return _bind$4;
              }
              buf$2 = _tmp$25;
            } else {
              if ((bt + l | 0) > fixed_limit) {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "output buffer too small"));
              }
            }
            _M0MPC15array10FixedArray16blit__to_2einnerGyE(dat, buf$2, l, s, bt);
            if (crc_state === undefined) {
            } else {
              const _Some = crc_state;
              const _cs = _Some;
              _M0MP27hustcer4fzip10CRC32State11push__range(_cs, buf$2, bt, l);
            }
            if (adler_state === undefined) {
            } else {
              const _Some = adler_state;
              const _a_s = _Some;
              _M0MP27hustcer4fzip10AdlerState11push__range(_a_s, buf$2, bt, l);
            }
            bt = bt + l | 0;
            st.bt = bt;
            cksum_bt = bt;
            bpos = t$19;
            st.pos = Math.imul(bpos, 8) | 0;
            st.final_ = final_;
            continue;
          } else {
            if (btype === 1) {
              lm = _M0FP27hustcer4fzip4flrm;
              dm = _M0FP27hustcer4fzip4fdrm;
              lbt = 9;
              dbt = 5;
            } else {
              if (btype === 2) {
                while (true) {
                  if (bcnt < 14 && bpos < dat_end) {
                    const _tmp$22 = bbuf;
                    const _tmp$23 = bpos;
                    bbuf = _tmp$22 | (_tmp$23 >>> 0 < dat.length ? dat[_tmp$23] : $oob()) << bcnt;
                    bpos = bpos + 1 | 0;
                    bcnt = bcnt + 8 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                const h_lit = (bbuf & 31) + 257 | 0;
                const tl = (h_lit + (bbuf >> 5 & 31) | 0) + 1 | 0;
                const hc_len = (bbuf >> 10 & 15) + 4 | 0;
                bbuf = bbuf >> 14;
                bcnt = bcnt - 14 | 0;
                if (h_lit > 286) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(2, "HLIT exceeds 286-symbol length/literal alphabet"));
                }
                if ((tl - h_lit | 0) > 30) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(3, "HDIST exceeds 30-symbol distance alphabet"));
                }
                const ldt = $makebytes(tl, 0);
                const clt_arr = $makebytes(19, 0);
                let _tmp$22 = 0;
                while (true) {
                  const i = _tmp$22;
                  if (i < hc_len) {
                    while (true) {
                      if (bcnt < 3 && bpos < dat_end) {
                        const _tmp$23 = bbuf;
                        const _tmp$24 = bpos;
                        bbuf = _tmp$23 | (_tmp$24 >>> 0 < dat.length ? dat[_tmp$24] : $oob()) << bcnt;
                        bpos = bpos + 1 | 0;
                        bcnt = bcnt + 8 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    const _tmp$23 = i >>> 0 < _M0FP27hustcer4fzip4clim.length ? _M0FP27hustcer4fzip4clim[i] : $oob();
                    if (_tmp$23 >>> 0 < clt_arr.length) {
                      clt_arr[_tmp$23] = bbuf & 7 & 255;
                    } else {
                      $oob();
                    }
                    bbuf = bbuf >> 3;
                    bcnt = bcnt - 3 | 0;
                    _tmp$22 = i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                const clb = _M0FP27hustcer4fzip8max__val(clt_arr);
                const clbmsk = (1 << clb) - 1 | 0;
                const clm = _M0FP27hustcer4fzip6h__map(clt_arr, clb, 1);
                let i = 0;
                while (true) {
                  if (i < tl) {
                    while (true) {
                      if (bcnt < clb && bpos < dat_end) {
                        const _tmp$23 = bbuf;
                        const _tmp$24 = bpos;
                        bbuf = _tmp$23 | (_tmp$24 >>> 0 < dat.length ? dat[_tmp$24] : $oob()) << bcnt;
                        bpos = bpos + 1 | 0;
                        bcnt = bcnt + 8 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    const _tmp$23 = bbuf & clbmsk;
                    const r = _tmp$23 >>> 0 < clm.length ? clm[_tmp$23] : $oob();
                    const rbits = r & 15;
                    bbuf = bbuf >> rbits;
                    bcnt = bcnt - rbits | 0;
                    const s = r >> 4;
                    if (s < 16) {
                      const _tmp$24 = i;
                      if (_tmp$24 >>> 0 < ldt.length) {
                        ldt[_tmp$24] = s & 255;
                      } else {
                        $oob();
                      }
                      i = i + 1 | 0;
                    } else {
                      let c = 0;
                      let n = 0;
                      if (s === 16) {
                        if (i === 0) {
                          return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(2, ""));
                        }
                        while (true) {
                          if (bcnt < 2 && bpos < dat_end) {
                            const _tmp$24 = bbuf;
                            const _tmp$25 = bpos;
                            bbuf = _tmp$24 | (_tmp$25 >>> 0 < dat.length ? dat[_tmp$25] : $oob()) << bcnt;
                            bpos = bpos + 1 | 0;
                            bcnt = bcnt + 8 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        n = 3 + (bbuf & 3) | 0;
                        bbuf = bbuf >> 2;
                        bcnt = bcnt - 2 | 0;
                        const _tmp$24 = i - 1 | 0;
                        c = _tmp$24 >>> 0 < ldt.length ? ldt[_tmp$24] : $oob();
                      } else {
                        if (s === 17) {
                          while (true) {
                            if (bcnt < 3 && bpos < dat_end) {
                              const _tmp$24 = bbuf;
                              const _tmp$25 = bpos;
                              bbuf = _tmp$24 | (_tmp$25 >>> 0 < dat.length ? dat[_tmp$25] : $oob()) << bcnt;
                              bpos = bpos + 1 | 0;
                              bcnt = bcnt + 8 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          n = 3 + (bbuf & 7) | 0;
                          bbuf = bbuf >> 3;
                          bcnt = bcnt - 3 | 0;
                        } else {
                          if (s === 18) {
                            while (true) {
                              if (bcnt < 7 && bpos < dat_end) {
                                const _tmp$24 = bbuf;
                                const _tmp$25 = bpos;
                                bbuf = _tmp$24 | (_tmp$25 >>> 0 < dat.length ? dat[_tmp$25] : $oob()) << bcnt;
                                bpos = bpos + 1 | 0;
                                bcnt = bcnt + 8 | 0;
                                continue;
                              } else {
                                break;
                              }
                            }
                            n = 11 + (bbuf & 127) | 0;
                            bbuf = bbuf >> 7;
                            bcnt = bcnt - 7 | 0;
                          }
                        }
                      }
                      if (n > (tl - i | 0)) {
                        return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(2, ""));
                      }
                      while (true) {
                        if (n > 0) {
                          const _tmp$24 = i;
                          if (_tmp$24 >>> 0 < ldt.length) {
                            ldt[_tmp$24] = c & 255;
                          } else {
                            $oob();
                          }
                          i = i + 1 | 0;
                          n = n - 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                    }
                    continue;
                  } else {
                    break;
                  }
                }
                const lt = $makebytes(h_lit, 0);
                const dt = $makebytes(tl - h_lit | 0, 0);
                _M0MPC15array10FixedArray16blit__to_2einnerGyE(ldt, lt, h_lit, 0, 0);
                _M0MPC15array10FixedArray16blit__to_2einnerGyE(ldt, dt, tl - h_lit | 0, h_lit, 0);
                lbt = _M0FP27hustcer4fzip8max__val(lt);
                dbt = _M0FP27hustcer4fzip8max__val(dt);
                lm = _M0FP27hustcer4fzip6h__map(lt, lbt, 1);
                dm = _M0FP27hustcer4fzip6h__map(dt, dbt, 1);
              } else {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(1, ""));
              }
            }
          }
          if (((Math.imul(bpos, 8) | 0) - bcnt | 0) > tbts) {
            if (no_st !== 0) {
              return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, ""));
            }
            break;
          }
        }
        if (resize) {
          const growth_target = grow > (max_output_size - bt | 0) ? max_output_size : bt + grow | 0;
          const _bind$4 = _M0FP27hustcer4fzip11ensure__buf(buf$2, growth_target, max_output_size);
          let _tmp$22;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$22 = _ok._0;
          } else {
            return _bind$4;
          }
          buf$2 = _tmp$22;
        }
        const lms = (1 << lbt) - 1 | 0;
        const dms = (1 << dbt) - 1 | 0;
        let lpos = (Math.imul(bpos, 8) | 0) - bcnt | 0;
        const _bind$4 = lm;
        let lm_arr;
        if (_bind$4 === undefined) {
          lm_arr = $make_array_len_and_init(0, 0);
        } else {
          const _Some = _bind$4;
          lm_arr = _Some;
        }
        const _bind$5 = dm;
        let dm_arr;
        if (_bind$5 === undefined) {
          dm_arr = $make_array_len_and_init(0, 0);
        } else {
          const _Some = _bind$5;
          dm_arr = _Some;
        }
        let break_outer = false;
        while (true) {
          lpos = (Math.imul(bpos, 8) | 0) - bcnt | 0;
          while (true) {
            if (bcnt < lbt && bpos < dat_end) {
              const _tmp$22 = bbuf;
              const _tmp$23 = bpos;
              bbuf = _tmp$22 | (_tmp$23 >>> 0 < dat.length ? dat[_tmp$23] : $oob()) << bcnt;
              bpos = bpos + 1 | 0;
              bcnt = bcnt + 8 | 0;
              continue;
            } else {
              break;
            }
          }
          const _tmp$22 = bbuf & lms;
          const c = _tmp$22 >>> 0 < lm_arr.length ? lm_arr[_tmp$22] : $oob();
          const sym = c >> 4;
          const cbits = c & 15;
          bbuf = bbuf >> cbits;
          bcnt = bcnt - cbits | 0;
          if (((Math.imul(bpos, 8) | 0) - bcnt | 0) > tbts) {
            if (no_st !== 0) {
              return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, ""));
            }
            break_outer = true;
            break;
          }
          if (c === 0) {
            return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(2, ""));
          }
          if (sym < 256) {
            if (bt >= buf$2.length) {
              if (resize) {
                const _bind$6 = _M0FP27hustcer4fzip11ensure__buf(buf$2, bt + 1 | 0, max_output_size);
                let _tmp$23;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _tmp$23 = _ok._0;
                } else {
                  return _bind$6;
                }
                buf$2 = _tmp$23;
              } else {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "output buffer too small"));
              }
            }
            const _tmp$23 = buf$2;
            const _tmp$24 = bt;
            if (_tmp$24 >>> 0 < _tmp$23.length) {
              _tmp$23[_tmp$24] = sym & 255;
            } else {
              $oob();
            }
            bt = bt + 1 | 0;
          } else {
            if (sym === 256) {
              if (bt > cksum_bt) {
                if (crc_state === undefined) {
                } else {
                  const _Some = crc_state;
                  const _cs = _Some;
                  _M0MP27hustcer4fzip10CRC32State11push__range(_cs, buf$2, cksum_bt, bt - cksum_bt | 0);
                }
                if (adler_state === undefined) {
                } else {
                  const _Some = adler_state;
                  const _a_s = _Some;
                  _M0MP27hustcer4fzip10AdlerState11push__range(_a_s, buf$2, cksum_bt, bt - cksum_bt | 0);
                }
                cksum_bt = bt;
              }
              lpos = (Math.imul(bpos, 8) | 0) - bcnt | 0;
              lm = undefined;
              break;
            } else {
              let add = sym - 254 | 0;
              if (sym > 264) {
                const idx = sym - 257 | 0;
                const b = idx >>> 0 < _M0FP27hustcer4fzip4fleb.length ? _M0FP27hustcer4fzip4fleb[idx] : $oob();
                while (true) {
                  if (bcnt < b && bpos < dat_end) {
                    const _tmp$23 = bbuf;
                    const _tmp$24 = bpos;
                    bbuf = _tmp$23 | (_tmp$24 >>> 0 < dat.length ? dat[_tmp$24] : $oob()) << bcnt;
                    bpos = bpos + 1 | 0;
                    bcnt = bcnt + 8 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                add = (bbuf & ((1 << b) - 1 | 0)) + (idx >>> 0 < _M0FP27hustcer4fzip2fl.length ? _M0FP27hustcer4fzip2fl[idx] : $oob()) | 0;
                bbuf = bbuf >> b;
                bcnt = bcnt - b | 0;
              }
              while (true) {
                if (bcnt < dbt && bpos < dat_end) {
                  const _tmp$23 = bbuf;
                  const _tmp$24 = bpos;
                  bbuf = _tmp$23 | (_tmp$24 >>> 0 < dat.length ? dat[_tmp$24] : $oob()) << bcnt;
                  bpos = bpos + 1 | 0;
                  bcnt = bcnt + 8 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const _tmp$23 = bbuf & dms;
              const d = _tmp$23 >>> 0 < dm_arr.length ? dm_arr[_tmp$23] : $oob();
              const dsym = d >> 4;
              if (d === 0) {
                return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(3, ""));
              }
              const dbits = d & 15;
              bbuf = bbuf >> dbits;
              bcnt = bcnt - dbits | 0;
              let dt_val = dsym >>> 0 < _M0FP27hustcer4fzip2fd.length ? _M0FP27hustcer4fzip2fd[dsym] : $oob();
              if (dsym > 3) {
                const b = dsym >>> 0 < _M0FP27hustcer4fzip4fdeb.length ? _M0FP27hustcer4fzip4fdeb[dsym] : $oob();
                while (true) {
                  if (bcnt < b && bpos < dat_end) {
                    const _tmp$24 = bbuf;
                    const _tmp$25 = bpos;
                    bbuf = _tmp$24 | (_tmp$25 >>> 0 < dat.length ? dat[_tmp$25] : $oob()) << bcnt;
                    bpos = bpos + 1 | 0;
                    bcnt = bcnt + 8 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                dt_val = dt_val + (bbuf & ((1 << b) - 1 | 0)) | 0;
                bbuf = bbuf >> b;
                bcnt = bcnt - b | 0;
              }
              if (((Math.imul(bpos, 8) | 0) - bcnt | 0) > tbts) {
                if (no_st !== 0) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, ""));
                }
                break_outer = true;
                break;
              }
              const end = bt + add | 0;
              if (resize) {
                if (end > buf$2.length) {
                  if (end > max_output_size || end < 0) {
                    return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "uncompressed size exceeds max_output_size"));
                  }
                  const growth_target = grow > (max_output_size - bt | 0) ? max_output_size : bt + grow | 0;
                  const _bind$6 = _M0FP27hustcer4fzip11ensure__buf(buf$2, growth_target, max_output_size);
                  let _tmp$24;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _tmp$24 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  buf$2 = _tmp$24;
                }
              } else {
                if (end > fixed_limit) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "output buffer too small"));
                }
              }
              if (bt < dt_val) {
                const shift = dl - dt_val | 0;
                const dend = dt_val < end ? dt_val : end;
                if ((shift + bt | 0) < 0) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(3, ""));
                }
                if (dict === undefined) {
                  return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(3, ""));
                } else {
                  const _Some = dict;
                  const _dict_arr = _Some;
                  while (true) {
                    if (bt < dend) {
                      const _tmp$24 = buf$2;
                      const _tmp$25 = bt;
                      const _tmp$26 = shift + bt | 0;
                      if (_tmp$25 >>> 0 < _tmp$24.length) {
                        _tmp$24[_tmp$25] = _tmp$26 >>> 0 < _dict_arr.length ? _dict_arr[_tmp$26] : $oob();
                      } else {
                        $oob();
                      }
                      bt = bt + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              }
              if (bt < end) {
                const need = end - bt | 0;
                if (dt_val === 1) {
                  const _tmp$24 = buf$2;
                  const _tmp$25 = buf$2;
                  const _tmp$26 = bt - 1 | 0;
                  _M0MPC15array10FixedArray12fill_2einnerGyE(_tmp$24, _tmp$26 >>> 0 < _tmp$25.length ? _tmp$25[_tmp$26] : $oob(), bt, end);
                  bt = end;
                } else {
                  if (dt_val >= need) {
                    _M0MPC15array10FixedArray16blit__to_2einnerGyE(buf$2, buf$2, need, bt - dt_val | 0, bt);
                    bt = end;
                  } else {
                    _M0MPC15array10FixedArray16blit__to_2einnerGyE(buf$2, buf$2, dt_val, bt - dt_val | 0, bt);
                    let copied;
                    let _tmp$24 = dt_val;
                    while (true) {
                      const copied$2 = _tmp$24;
                      if ((copied$2 + copied$2 | 0) <= need) {
                        _M0MPC15array10FixedArray16blit__to_2einnerGyE(buf$2, buf$2, copied$2, bt, bt + copied$2 | 0);
                        _tmp$24 = copied$2 + copied$2 | 0;
                        continue;
                      } else {
                        copied = copied$2;
                        break;
                      }
                    }
                    if (copied < need) {
                      _M0MPC15array10FixedArray16blit__to_2einnerGyE(buf$2, buf$2, need - copied | 0, bt, bt + copied | 0);
                    }
                    bt = end;
                  }
                }
              }
            }
          }
          continue;
        }
        if (break_outer) {
          break;
        }
        st.lm = lm;
        st.pos = lpos;
        st.bt = bt;
        st.final_ = final_;
        const _bind$6 = lm;
        if (!(_bind$6 === undefined)) {
          final_ = 1;
          st.lbt = lbt;
          st.dm = dm;
          st.dbt = dbt;
        }
        if (final_ !== 0) {
          continue_loop = false;
        }
        continue;
      } else {
        break;
      }
    }
    if (bt > cksum_bt) {
      if (crc_state === undefined) {
      } else {
        const _Some = crc_state;
        const _cs = _Some;
        _M0MP27hustcer4fzip10CRC32State11push__range(_cs, buf$2, cksum_bt, bt - cksum_bt | 0);
      }
      if (adler_state === undefined) {
      } else {
        const _Some = adler_state;
        const _a_s = _Some;
        _M0MP27hustcer4fzip10AdlerState11push__range(_a_s, buf$2, cksum_bt, bt - cksum_bt | 0);
      }
    }
    return new _M0DTPC16result6ResultGUAyiERP27hustcer4fzip9FzipErrorE2Ok({ _0: buf$2, _1: bt });
  }
  function _M0FP27hustcer4fzip5inflt(dat, st, buf, dict, max_input_size, max_output_size, dat_off$46$opt, dat_end$46$opt, crc_state$46$opt, adler_state$46$opt) {
    let dat_off;
    if (dat_off$46$opt === undefined) {
      dat_off = 0;
    } else {
      const _Some = dat_off$46$opt;
      dat_off = _Some;
    }
    let dat_end;
    if (dat_end$46$opt === undefined) {
      dat_end = dat.length;
    } else {
      const _Some = dat_end$46$opt;
      dat_end = _Some;
    }
    let crc_state;
    if (crc_state$46$opt.$tag === 1) {
      const _Some = crc_state$46$opt;
      crc_state = _Some._0;
    } else {
      crc_state = undefined;
    }
    let adler_state;
    if (adler_state$46$opt.$tag === 1) {
      const _Some = adler_state$46$opt;
      adler_state = _Some._0;
    } else {
      adler_state = undefined;
    }
    return _M0FP27hustcer4fzip13inflt_2einner(dat, st, buf, dict, max_input_size, max_output_size, dat_off, dat_end, crc_state, adler_state);
  }
  function _M0MP27hustcer4fzip12InflateState3new(i) {
    return new _M0TP27hustcer4fzip12InflateState(undefined, undefined, 0, 0, 0, 0, 0, i);
  }
  function _M0FP27hustcer4fzip16read__zip64__int(data, offset, context) {
    const _bind$3 = _M0FP27hustcer4fzip2b4(data, offset);
    let lo;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      lo = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP27hustcer4fzip2b4(data, offset + 4 | 0);
    let hi;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      hi = _ok._0;
    } else {
      return _bind$4;
    }
    if (hi !== 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(16, `${context}: value > 2^32 not representable`));
    }
    if (lo >>> 0 > (-1 >>> 1 | 0) >>> 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(16, `${context}: value exceeds Int range`));
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(lo);
  }
  function _M0FP27hustcer4fzip14zip32__to__int(v, context) {
    if (v >>> 0 > (-1 >>> 1 | 0) >>> 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(16, `${context}: value exceeds Int range`));
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(v);
  }
  function _M0FP27hustcer4fzip2b2(d, b) {
    if ((b + 1 | 0) >= d.length) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(0, "not enough bytes for b2"));
    }
    const _tmp$22 = b >>> 0 < d.length ? d[b] : $oob();
    const _tmp$23 = b + 1 | 0;
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22 | (_tmp$23 >>> 0 < d.length ? d[_tmp$23] : $oob()) << 8);
  }
  function _M0FP27hustcer4fzip25read__zip64__entry__extra(data, extra_offset, extra_len, classic_compressed, classic_uncompressed, classic_local_offset) {
    if (extra_len > 4096) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(9, "extra field length exceeds maximum"));
    }
    const need_uncomp = classic_uncompressed === -1;
    const need_comp = classic_compressed === -1;
    const need_local = classic_local_offset === -1;
    const end = extra_offset + extra_len | 0;
    let p = extra_offset;
    while (true) {
      if ((p + 4 | 0) <= end) {
        const _bind$3 = _M0FP27hustcer4fzip2b2(data, p);
        let header_id;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          header_id = _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0FP27hustcer4fzip2b2(data, p + 2 | 0);
        let field_len;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          field_len = _ok._0;
        } else {
          return _bind$4;
        }
        if (((p + 4 | 0) + field_len | 0) > end) {
          return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "extra field truncated"));
        }
        if (header_id === 1) {
          const field_start = p + 4 | 0;
          const field_end = field_start + field_len | 0;
          let fp = field_start;
          let uncompressed;
          if (need_uncomp) {
            if ((fp + 8 | 0) > field_end) {
              return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 extra missing uncompressed size"));
            }
            const _bind$5 = _M0FP27hustcer4fzip16read__zip64__int(data, fp, "ZIP64 entry uncompressed size");
            let v;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              v = _ok._0;
            } else {
              return _bind$5;
            }
            fp = fp + 8 | 0;
            uncompressed = v;
          } else {
            const _bind$5 = _M0FP27hustcer4fzip14zip32__to__int(classic_uncompressed, "ZIP64 entry classic uncompressed size");
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              uncompressed = _ok._0;
            } else {
              return _bind$5;
            }
          }
          let compressed;
          if (need_comp) {
            if ((fp + 8 | 0) > field_end) {
              return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 extra missing compressed size"));
            }
            const _bind$5 = _M0FP27hustcer4fzip16read__zip64__int(data, fp, "ZIP64 entry compressed size");
            let v;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              v = _ok._0;
            } else {
              return _bind$5;
            }
            fp = fp + 8 | 0;
            compressed = v;
          } else {
            const _bind$5 = _M0FP27hustcer4fzip14zip32__to__int(classic_compressed, "ZIP64 entry classic compressed size");
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              compressed = _ok._0;
            } else {
              return _bind$5;
            }
          }
          let local_offset;
          if (need_local) {
            if ((fp + 8 | 0) > field_end) {
              return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 extra missing local header offset"));
            }
            const _bind$5 = _M0FP27hustcer4fzip16read__zip64__int(data, fp, "ZIP64 entry local header offset");
            let v;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              v = _ok._0;
            } else {
              return _bind$5;
            }
            fp = fp + 8 | 0;
            local_offset = v;
          } else {
            const _bind$5 = _M0FP27hustcer4fzip14zip32__to__int(classic_local_offset, "ZIP64 entry classic local header offset");
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              local_offset = _ok._0;
            } else {
              return _bind$5;
            }
          }
          const remaining = field_end - fp | 0;
          if (remaining !== 0 && remaining !== 4) {
            return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 extra has invalid trailing bytes"));
          }
          if (remaining === 4) {
            const _bind$5 = _M0FP27hustcer4fzip2b4(data, fp);
            let disk;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              disk = _ok._0;
            } else {
              return _bind$5;
            }
            if (disk !== 0) {
              return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
            }
          }
          return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE2Ok(new _M0TP27hustcer4fzip13ZipEntrySizes(compressed, uncompressed, local_offset));
        }
        p = (p + 4 | 0) + field_len | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP27hustcer4fzip13ZipEntrySizesRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "required ZIP64 extra field not present"));
  }
  function _M0FP27hustcer4fzip16is__unsafe__path(path) {
    let _tmp$22;
    if (path.length > 0) {
      let _tmp$23;
      const _p = 0 >>> 0 < path.length ? path.charCodeAt(0) : $oob();
      const _p$2 = 47;
      if (_p === _p$2) {
        _tmp$23 = true;
      } else {
        const _p$3 = 0 >>> 0 < path.length ? path.charCodeAt(0) : $oob();
        const _p$4 = 92;
        _tmp$23 = _p$3 === _p$4;
      }
      _tmp$22 = _tmp$23;
    } else {
      _tmp$22 = false;
    }
    if (_tmp$22) {
      return true;
    }
    let _tmp$23;
    if (path.length >= 3) {
      let _tmp$24;
      if ((0 >>> 0 < path.length ? path.charCodeAt(0) : $oob()) >= 65 && (0 >>> 0 < path.length ? path.charCodeAt(0) : $oob()) <= 90 || (0 >>> 0 < path.length ? path.charCodeAt(0) : $oob()) >= 97 && (0 >>> 0 < path.length ? path.charCodeAt(0) : $oob()) <= 122) {
        let _tmp$25;
        const _p = 1 >>> 0 < path.length ? path.charCodeAt(1) : $oob();
        const _p$2 = 58;
        if (_p === _p$2) {
          let _tmp$26;
          const _p$3 = 2 >>> 0 < path.length ? path.charCodeAt(2) : $oob();
          const _p$4 = 47;
          if (_p$3 === _p$4) {
            _tmp$26 = true;
          } else {
            const _p$5 = 2 >>> 0 < path.length ? path.charCodeAt(2) : $oob();
            const _p$6 = 92;
            _tmp$26 = _p$5 === _p$6;
          }
          _tmp$25 = _tmp$26;
        } else {
          _tmp$25 = false;
        }
        _tmp$24 = _tmp$25;
      } else {
        _tmp$24 = false;
      }
      _tmp$23 = _tmp$24;
    } else {
      _tmp$23 = false;
    }
    if (_tmp$23) {
      return true;
    }
    const l = path.length;
    let i = 0;
    while (true) {
      if (i < l) {
        let at_start;
        if (i === 0) {
          at_start = true;
        } else {
          let _tmp$24;
          if (i > 0) {
            let _tmp$25;
            const _tmp$26 = i - 1 | 0;
            const _p = _tmp$26 >>> 0 < path.length ? path.charCodeAt(_tmp$26) : $oob();
            const _p$2 = 47;
            if (_p === _p$2) {
              _tmp$25 = true;
            } else {
              const _tmp$27 = i - 1 | 0;
              const _p$3 = _tmp$27 >>> 0 < path.length ? path.charCodeAt(_tmp$27) : $oob();
              const _p$4 = 92;
              _tmp$25 = _p$3 === _p$4;
            }
            _tmp$24 = _tmp$25;
          } else {
            _tmp$24 = false;
          }
          at_start = _tmp$24;
        }
        let _tmp$24;
        if (at_start) {
          let _tmp$25;
          if ((i + 1 | 0) < l) {
            let _tmp$26;
            const _tmp$27 = i;
            const _p = _tmp$27 >>> 0 < path.length ? path.charCodeAt(_tmp$27) : $oob();
            const _p$2 = 46;
            if (_p === _p$2) {
              const _tmp$28 = i + 1 | 0;
              const _p$3 = _tmp$28 >>> 0 < path.length ? path.charCodeAt(_tmp$28) : $oob();
              const _p$4 = 46;
              _tmp$26 = _p$3 === _p$4;
            } else {
              _tmp$26 = false;
            }
            _tmp$25 = _tmp$26;
          } else {
            _tmp$25 = false;
          }
          _tmp$24 = _tmp$25;
        } else {
          _tmp$24 = false;
        }
        if (_tmp$24) {
          let _tmp$25;
          if ((i + 2 | 0) >= l) {
            _tmp$25 = true;
          } else {
            let _tmp$26;
            const _tmp$27 = i + 2 | 0;
            const _p = _tmp$27 >>> 0 < path.length ? path.charCodeAt(_tmp$27) : $oob();
            const _p$2 = 47;
            if (_p === _p$2) {
              _tmp$26 = true;
            } else {
              const _tmp$28 = i + 2 | 0;
              const _p$3 = _tmp$28 >>> 0 < path.length ? path.charCodeAt(_tmp$28) : $oob();
              const _p$4 = 92;
              _tmp$26 = _p$3 === _p$4;
            }
            _tmp$25 = _tmp$26;
          }
          if (_tmp$25) {
            return true;
          }
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP27hustcer4fzip19local__data__offset(data, local_offset, compressed_size) {
    if (local_offset < 0 || local_offset > (data.length - 30 | 0)) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "local file header out of bounds"));
    }
    const _bind$3 = _M0FP27hustcer4fzip2b4(data, local_offset);
    let _tmp$22;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$22 = _ok._0;
    } else {
      return _bind$3;
    }
    if (_tmp$22 !== 67324752) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "invalid local file header signature"));
    }
    const _bind$4 = _M0FP27hustcer4fzip2b2(data, local_offset + 6 | 0);
    let flag;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      flag = _ok._0;
    } else {
      return _bind$4;
    }
    if ((flag & 1) !== 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "encrypted ZIP entries are not supported"));
    }
    const _bind$5 = _M0FP27hustcer4fzip2b2(data, local_offset + 26 | 0);
    let fnl;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      fnl = _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0FP27hustcer4fzip2b2(data, local_offset + 28 | 0);
    let exl;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      exl = _ok._0;
    } else {
      return _bind$6;
    }
    if (exl > 4096) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(9, "local-header extra field length exceeds maximum"));
    }
    const header_len = (30 + fnl | 0) + exl | 0;
    if (local_offset > (data.length - header_len | 0)) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "local header filename/extra exceed bounds"));
    }
    const data_off = local_offset + header_len | 0;
    if (compressed_size < 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "negative compressed size"));
    }
    if (data_off > (data.length - compressed_size | 0)) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "entry data range exceeds bounds"));
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(data_off);
  }
  function _M0FP27hustcer4fzip21str__from__u8_2einner(data, latin1, offset, len) {
    const actual_len = len < 0 ? data.length - offset | 0 : len;
    const end = offset + actual_len | 0;
    if (latin1) {
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      let _tmp$22 = offset;
      while (true) {
        const i = _tmp$22;
        if (i < end) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, i >>> 0 < data.length ? data[i] : $oob());
          _tmp$22 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE2Ok(buf.val);
    }
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let i = offset;
    while (true) {
      if (i < end) {
        const _tmp$22 = i;
        const c = _tmp$22 >>> 0 < data.length ? data[_tmp$22] : $oob();
        if (c < 128) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
          i = i + 1 | 0;
        } else {
          if (c < 194) {
            return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
          } else {
            if (c < 224) {
              if ((i + 1 | 0) >= end) {
                return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
              }
              const _tmp$23 = i + 1 | 0;
              const c1 = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
              if ((c1 & 192) !== 128) {
                return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
              }
              const cp = (c & 31) << 6 | c1 & 63;
              _M0IPB13StringBuilderPB6Logger11write__char(buf, cp);
              i = i + 2 | 0;
            } else {
              if (c < 240) {
                if ((i + 2 | 0) >= end) {
                  return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                }
                const _tmp$23 = i + 1 | 0;
                const c1 = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
                const _tmp$24 = i + 2 | 0;
                const c2 = _tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob();
                if ((c1 & 192) !== 128 || (c2 & 192) !== 128) {
                  return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                }
                const cp = (c & 15) << 12 | (c1 & 63) << 6 | c2 & 63;
                if (cp < 2048 || cp >= 55296 && cp <= 57343) {
                  return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                }
                _M0IPB13StringBuilderPB6Logger11write__char(buf, cp);
                i = i + 3 | 0;
              } else {
                if (c < 245) {
                  if ((i + 3 | 0) >= end) {
                    return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                  }
                  const _tmp$23 = i + 1 | 0;
                  const c1 = _tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob();
                  const _tmp$24 = i + 2 | 0;
                  const c2 = _tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob();
                  const _tmp$25 = i + 3 | 0;
                  const c3 = _tmp$25 >>> 0 < data.length ? data[_tmp$25] : $oob();
                  if ((c1 & 192) !== 128 || ((c2 & 192) !== 128 || (c3 & 192) !== 128)) {
                    return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                  }
                  const cp = (c & 7) << 18 | (c1 & 63) << 12 | (c2 & 63) << 6 | c3 & 63;
                  if (cp < 65536 || cp > 1114111) {
                    return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                  }
                  const v = cp - 65536 | 0;
                  _M0IPB13StringBuilderPB6Logger11write__char(buf, 55296 | v >> 10);
                  _M0IPB13StringBuilderPB6Logger11write__char(buf, 56320 | v & 1023);
                  i = i + 4 | 0;
                } else {
                  return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(8, ""));
                }
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP27hustcer4fzip9FzipErrorE2Ok(buf.val);
  }
  function _M0FP27hustcer4fzip39read__central__directory__entry_2einner(data, offset, cd_end, zip64, read_crc) {
    if (offset < 0 || (cd_end < 46 || offset > (cd_end - 46 | 0))) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "central directory header exceeds CD bounds"));
    }
    const _bind$3 = _M0FP27hustcer4fzip2b4(data, offset);
    let _tmp$22;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$22 = _ok._0;
    } else {
      return _bind$3;
    }
    if (_tmp$22 !== 33639248) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "invalid central directory header signature"));
    }
    const _bind$4 = _M0FP27hustcer4fzip2b2(data, offset + 8 | 0);
    let flag;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      flag = _ok._0;
    } else {
      return _bind$4;
    }
    if ((flag & 1) !== 0) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "encrypted ZIP entries are not supported"));
    }
    const _bind$5 = _M0FP27hustcer4fzip2b2(data, offset + 10 | 0);
    let compression;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      compression = _ok._0;
    } else {
      return _bind$5;
    }
    let crc;
    if (read_crc) {
      const _bind$6 = _M0FP27hustcer4fzip2b4(data, offset + 16 | 0);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        crc = _ok._0;
      } else {
        return _bind$6;
      }
    } else {
      crc = 0;
    }
    const _bind$6 = _M0FP27hustcer4fzip2b4(data, offset + 20 | 0);
    let comp_size_classic;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      comp_size_classic = _ok._0;
    } else {
      return _bind$6;
    }
    const _bind$7 = _M0FP27hustcer4fzip2b4(data, offset + 24 | 0);
    let uncomp_size_classic;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      uncomp_size_classic = _ok._0;
    } else {
      return _bind$7;
    }
    const _bind$8 = _M0FP27hustcer4fzip2b2(data, offset + 28 | 0);
    let filename_len;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      filename_len = _ok._0;
    } else {
      return _bind$8;
    }
    const _bind$9 = _M0FP27hustcer4fzip2b2(data, offset + 30 | 0);
    let extra_len;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      extra_len = _ok._0;
    } else {
      return _bind$9;
    }
    const _bind$10 = _M0FP27hustcer4fzip2b2(data, offset + 32 | 0);
    let comment_len;
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      comment_len = _ok._0;
    } else {
      return _bind$10;
    }
    const _bind$11 = _M0FP27hustcer4fzip2b2(data, offset + 34 | 0);
    let disk_number_start;
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      disk_number_start = _ok._0;
    } else {
      return _bind$11;
    }
    const _bind$12 = _M0FP27hustcer4fzip2b4(data, offset + 42 | 0);
    let local_offset_classic;
    if (_bind$12.$tag === 1) {
      const _ok = _bind$12;
      local_offset_classic = _ok._0;
    } else {
      return _bind$12;
    }
    if (filename_len > 4096) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "zip filename too long"));
    }
    if (extra_len > 4096) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(9, "central-directory extra field length exceeds maximum"));
    }
    if (disk_number_start !== 0) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    const entry_total = ((46 + filename_len | 0) + extra_len | 0) + comment_len | 0;
    if (offset > (cd_end - entry_total | 0)) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "central directory entry exceeds CD bounds"));
    }
    const is_utf8 = (flag & 2048) !== 0;
    const _bind$13 = _M0FP27hustcer4fzip21str__from__u8_2einner(data, !is_utf8, offset + 46 | 0, filename_len);
    let name;
    if (_bind$13.$tag === 1) {
      const _ok = _bind$13;
      name = _ok._0;
    } else {
      return _bind$13;
    }
    const need_uncomp = uncomp_size_classic === -1;
    const need_comp = comp_size_classic === -1;
    const need_local = local_offset_classic === -1;
    const any_zip64 = need_uncomp || (need_comp || need_local);
    let compressed_size;
    let uncompressed_size;
    let local_offset;
    _L: {
      if (any_zip64) {
        if (!zip64) {
          return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "entry uses ZIP64 sentinels but archive is not ZIP64"));
        }
        const extra_offset = (offset + 46 | 0) + filename_len | 0;
        const _bind$14 = _M0FP27hustcer4fzip25read__zip64__entry__extra(data, extra_offset, extra_len, comp_size_classic, uncomp_size_classic, local_offset_classic);
        let sizes;
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          sizes = _ok._0;
        } else {
          return _bind$14;
        }
        compressed_size = sizes.compressed;
        uncompressed_size = sizes.uncompressed;
        local_offset = sizes.local_offset;
        break _L;
      } else {
        const _bind$14 = _M0FP27hustcer4fzip14zip32__to__int(comp_size_classic, "classic entry compressed size");
        let _tmp$23;
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          _tmp$23 = _ok._0;
        } else {
          return _bind$14;
        }
        const _tmp$24 = _tmp$23;
        const _bind$15 = _M0FP27hustcer4fzip14zip32__to__int(uncomp_size_classic, "classic entry uncompressed size");
        let _tmp$25;
        if (_bind$15.$tag === 1) {
          const _ok = _bind$15;
          _tmp$25 = _ok._0;
        } else {
          return _bind$15;
        }
        const _tmp$26 = _tmp$25;
        const _bind$16 = _M0FP27hustcer4fzip14zip32__to__int(local_offset_classic, "classic entry local header offset");
        let _tmp$27;
        if (_bind$16.$tag === 1) {
          const _ok = _bind$16;
          _tmp$27 = _ok._0;
        } else {
          return _bind$16;
        }
        compressed_size = _tmp$24;
        uncompressed_size = _tmp$26;
        local_offset = _tmp$27;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGRP27hustcer4fzip14ZipEntryHeaderRP27hustcer4fzip9FzipErrorE2Ok(new _M0TP27hustcer4fzip14ZipEntryHeader(compression, crc, compressed_size, uncompressed_size, name, offset + entry_total | 0, local_offset));
  }
  function _M0FP27hustcer4fzip25validate__zip__input__len(len) {
    if (len > 1073741824) {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP input exceeds default_max_input_size"));
    } else {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
  }
  function _M0FP27hustcer4fzip27validate__zip__entry__count(entries) {
    if (entries > 100000) {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP entry count exceeds max_zip_entries"));
    } else {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
  }
  function _M0FP27hustcer4fzip24add__zip__output__budget(total, entry_size) {
    if (entry_size < 0) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "negative ZIP entry output size"));
    }
    if (entry_size > 104857600) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "entry uncompressed size exceeds default_max_output_size"));
    }
    if (total > (104857600 - entry_size | 0)) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "total ZIP output exceeds max_zip_total_output_size"));
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(total + entry_size | 0);
  }
  function _M0FP27hustcer4fzip33validate__zip__compression__ratio(compressed_size, uncompressed_size) {
    if (compressed_size < 0 || uncompressed_size < 0) {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "negative ZIP entry size"));
    }
    if (compressed_size === 0) {
      if (uncompressed_size > 0) {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "zip compressed size is zero for non-empty deflated entry"));
      }
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
    const limit = compressed_size > ((-1 >>> 1 | 0) / 1000 | 0) ? -1 >>> 1 | 0 : Math.imul(compressed_size, 1000) | 0;
    if (uncompressed_size > limit) {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "zip compression ratio too high (potential zip bomb)"));
    } else {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
  }
  function _M0FP27hustcer4fzip18validate__zip__crc(actual, expected) {
    if (actual !== expected) {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(15, "ZIP entry CRC-32 mismatch"));
    } else {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
  }
  function _M0FP27hustcer4fzip23read__classic__cd__info(data, entries_disk, entries_total, cd_size_classic, cd_offset_classic) {
    if (entries_disk !== entries_total) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    const _bind$3 = _M0FP27hustcer4fzip14zip32__to__int(cd_size_classic, "classic central directory size");
    let size;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      size = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP27hustcer4fzip14zip32__to__int(cd_offset_classic, "classic central directory offset");
    let offset;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      offset = _ok._0;
    } else {
      return _bind$4;
    }
    if (offset > data.length || size > (data.length - offset | 0)) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "central directory bounds exceed archive"));
    }
    const _bind$5 = _M0FP27hustcer4fzip27validate__zip__entry__count(entries_total);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(new _M0TP27hustcer4fzip9ZipCdInfo(entries_total, offset, size, false));
  }
  function _M0FP27hustcer4fzip21read__zip64__cd__info(data, eocd) {
    let _tmp$22;
    if (eocd < 20) {
      _tmp$22 = true;
    } else {
      const _bind$3 = _M0FP27hustcer4fzip2b4(data, eocd - 20 | 0);
      let _tmp$23;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$23 = _ok._0;
      } else {
        return _bind$3;
      }
      _tmp$22 = _tmp$23 !== 117853008;
    }
    if (_tmp$22) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 locator missing"));
    }
    const locator_off = eocd - 20 | 0;
    const _bind$3 = _M0FP27hustcer4fzip2b4(data, locator_off + 4 | 0);
    let zip64_eocd_disk;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      zip64_eocd_disk = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP27hustcer4fzip2b4(data, locator_off + 16 | 0);
    let total_disks;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      total_disks = _ok._0;
    } else {
      return _bind$4;
    }
    if (zip64_eocd_disk !== 0 || total_disks !== 1) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    const _bind$5 = _M0FP27hustcer4fzip16read__zip64__int(data, locator_off + 8 | 0, "zip64 EOCD offset");
    let zip64_eocd_off;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      zip64_eocd_off = _ok._0;
    } else {
      return _bind$5;
    }
    if (zip64_eocd_off > (locator_off - 12 | 0)) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD record offset overlaps locator"));
    }
    const _bind$6 = _M0FP27hustcer4fzip2b4(data, zip64_eocd_off);
    let _tmp$23;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp$23 = _ok._0;
    } else {
      return _bind$6;
    }
    if (_tmp$23 !== 101075792) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD record signature missing"));
    }
    const _bind$7 = _M0FP27hustcer4fzip16read__zip64__int(data, zip64_eocd_off + 4 | 0, "ZIP64 EOCD record size");
    let record_size_raw;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      record_size_raw = _ok._0;
    } else {
      return _bind$7;
    }
    if (record_size_raw < 44) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD record size too small"));
    }
    const max_record_size = (locator_off - zip64_eocd_off | 0) - 12 | 0;
    if (record_size_raw > max_record_size) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD record exceeds locator boundary"));
    }
    const _bind$8 = _M0FP27hustcer4fzip2b4(data, zip64_eocd_off + 16 | 0);
    let z64_disk;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      z64_disk = _ok._0;
    } else {
      return _bind$8;
    }
    const _bind$9 = _M0FP27hustcer4fzip2b4(data, zip64_eocd_off + 20 | 0);
    let z64_disk_with_cd;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      z64_disk_with_cd = _ok._0;
    } else {
      return _bind$9;
    }
    const _bind$10 = _M0FP27hustcer4fzip16read__zip64__int(data, zip64_eocd_off + 24 | 0, "ZIP64 entries on disk");
    let z64_entries_disk;
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      z64_entries_disk = _ok._0;
    } else {
      return _bind$10;
    }
    const _bind$11 = _M0FP27hustcer4fzip16read__zip64__int(data, zip64_eocd_off + 32 | 0, "ZIP64 total entries");
    let z64_entries_total;
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      z64_entries_total = _ok._0;
    } else {
      return _bind$11;
    }
    const _bind$12 = _M0FP27hustcer4fzip16read__zip64__int(data, zip64_eocd_off + 40 | 0, "ZIP64 central directory size");
    let z64_size;
    if (_bind$12.$tag === 1) {
      const _ok = _bind$12;
      z64_size = _ok._0;
    } else {
      return _bind$12;
    }
    const _bind$13 = _M0FP27hustcer4fzip16read__zip64__int(data, zip64_eocd_off + 48 | 0, "ZIP64 central directory offset");
    let z64_offset;
    if (_bind$13.$tag === 1) {
      const _ok = _bind$13;
      z64_offset = _ok._0;
    } else {
      return _bind$13;
    }
    if (z64_disk !== 0 || z64_disk_with_cd !== 0) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    if (z64_entries_disk !== z64_entries_total) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    if (z64_offset > data.length || z64_size > (data.length - z64_offset | 0)) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 central directory bounds exceed archive"));
    }
    const _bind$14 = _M0FP27hustcer4fzip27validate__zip__entry__count(z64_entries_total);
    if (_bind$14.$tag === 1) {
      const _ok = _bind$14;
      _ok._0;
    } else {
      return _bind$14;
    }
    return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(new _M0TP27hustcer4fzip9ZipCdInfo(z64_entries_total, z64_offset, z64_size, true));
  }
  function _M0FP27hustcer4fzip37validate__zip64__cd__matches__classic(info, entries_disk, entries_total, cd_size_classic, cd_offset_classic, count_sentinel, size_sentinel, offset_sentinel) {
    if (!count_sentinel) {
      if (entries_disk !== entries_total) {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
      }
      if (info.entries !== entries_total) {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD entry count disagrees with classic EOCD"));
      }
    }
    if (!size_sentinel) {
      const _bind$3 = _M0FP27hustcer4fzip14zip32__to__int(cd_size_classic, "classic central directory size");
      let classic_size;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        classic_size = _ok._0;
      } else {
        return _bind$3;
      }
      if (info.size !== classic_size) {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD central directory size disagrees with classic EOCD"));
      }
    }
    if (!offset_sentinel) {
      const _bind$3 = _M0FP27hustcer4fzip14zip32__to__int(cd_offset_classic, "classic central directory offset");
      let classic_offset;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        classic_offset = _ok._0;
      } else {
        return _bind$3;
      }
      if (info.offset !== classic_offset) {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 EOCD central directory offset disagrees with classic EOCD"));
      } else {
        return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
      }
    } else {
      return new _M0DTPC16result6ResultGuRP27hustcer4fzip9FzipErrorE2Ok(undefined);
    }
  }
  function _M0FP27hustcer4fzip10find__eocd(data) {
    if (data.length < 22) {
      return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "data too short for zip archive"));
    }
    let e = data.length - 22 | 0;
    while (true) {
      if (e >= 0) {
        const _bind$3 = _M0FP27hustcer4fzip2b4(data, e);
        let _tmp$22;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$22 = _ok._0;
        } else {
          return _bind$3;
        }
        if (_tmp$22 === 101010256) {
          const _bind$4 = _M0FP27hustcer4fzip2b2(data, e + 20 | 0);
          let comment_length;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            comment_length = _ok._0;
          } else {
            return _bind$4;
          }
          if (((e + 22 | 0) + comment_length | 0) === data.length) {
            return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE2Ok(e);
          }
        }
        e = e - 1 | 0;
        if ((data.length - e | 0) > 65558) {
          break;
        }
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGiRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "EOCD signature not found"));
  }
  function _M0FP27hustcer4fzip12fzip__resultGRP27hustcer4fzip9ZipCdInfoE(f) {
    let _try_err;
    _L: {
      const _bind$3 = f();
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(_bind$4);
    }
    return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_try_err);
  }
  function _M0FP27hustcer4fzip30read__central__directory__info(data, eocd) {
    const _bind$3 = _M0FP27hustcer4fzip2b2(data, eocd + 4 | 0);
    let disk_num;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      disk_num = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP27hustcer4fzip2b2(data, eocd + 6 | 0);
    let cd_disk;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      cd_disk = _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0FP27hustcer4fzip2b2(data, eocd + 8 | 0);
    let entries_disk;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      entries_disk = _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0FP27hustcer4fzip2b2(data, eocd + 10 | 0);
    let entries_total;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      entries_total = _ok._0;
    } else {
      return _bind$6;
    }
    const _bind$7 = _M0FP27hustcer4fzip2b4(data, eocd + 12 | 0);
    let cd_size_classic;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      cd_size_classic = _ok._0;
    } else {
      return _bind$7;
    }
    const _bind$8 = _M0FP27hustcer4fzip2b4(data, eocd + 16 | 0);
    let cd_offset_classic;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      cd_offset_classic = _ok._0;
    } else {
      return _bind$8;
    }
    if (disk_num !== 0 || cd_disk !== 0) {
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "multi-disk ZIP archives are not supported"));
    }
    const count_sentinel = entries_total === 65535;
    const size_sentinel = cd_size_classic === -1;
    const offset_sentinel = cd_offset_classic === -1;
    const any_sentinel = count_sentinel || (size_sentinel || offset_sentinel);
    let locator_candidate;
    if (eocd >= 20) {
      const _bind$9 = _M0FP27hustcer4fzip2b4(data, eocd - 20 | 0);
      let _tmp$22;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$22 = _ok._0;
      } else {
        return _bind$9;
      }
      locator_candidate = _tmp$22 === 117853008;
    } else {
      locator_candidate = false;
    }
    if (!any_sentinel && !locator_candidate) {
      const _bind$9 = _M0FP27hustcer4fzip23read__classic__cd__info(data, entries_disk, entries_total, cd_size_classic, cd_offset_classic);
      let _tmp$22;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$22 = _ok._0;
      } else {
        return _bind$9;
      }
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
    }
    if (!locator_candidate) {
      if (count_sentinel && (!size_sentinel && !offset_sentinel)) {
        const _bind$9 = _M0FP27hustcer4fzip23read__classic__cd__info(data, entries_disk, 65535, cd_size_classic, cd_offset_classic);
        let _tmp$22;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$22 = _ok._0;
        } else {
          return _bind$9;
        }
        return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
      }
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "ZIP64 sentinel set but no valid ZIP64 locator"));
    }
    const z64_result = _M0FP27hustcer4fzip12fzip__resultGRP27hustcer4fzip9ZipCdInfoE(() => _M0FP27hustcer4fzip21read__zip64__cd__info(data, eocd));
    if (z64_result.$tag === 1) {
      const _Ok = z64_result;
      const _info = _Ok._0;
      const _bind$9 = _M0FP27hustcer4fzip37validate__zip64__cd__matches__classic(_info, entries_disk, entries_total, cd_size_classic, cd_offset_classic, count_sentinel, size_sentinel, offset_sentinel);
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        return _bind$9;
      }
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(_info);
    } else {
      const _Err = z64_result;
      const _err = _Err._0;
      if (!any_sentinel) {
        const _bind$9 = _M0FP27hustcer4fzip23read__classic__cd__info(data, entries_disk, entries_total, cd_size_classic, cd_offset_classic);
        let _tmp$22;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$22 = _ok._0;
        } else {
          return _bind$9;
        }
        return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE2Ok(_tmp$22);
      }
      return new _M0DTPC16result6ResultGRP27hustcer4fzip9ZipCdInfoRP27hustcer4fzip9FzipErrorE3Err(_err);
    }
  }
  function _M0FP27hustcer4fzip5crc32(data) {
    return _M0FP27hustcer4fzip20crc32__update__range(-1, data, 0, data.length) ^ -1;
  }
  function _M0FP27hustcer4fzip19unzip__sync_2einner(data, opts) {
    const _bind$3 = _M0FP27hustcer4fzip25validate__zip__input__len(data.length);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const files = [];
    const _bind$4 = _M0FP27hustcer4fzip10find__eocd(data);
    let eocd;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      eocd = _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0FP27hustcer4fzip30read__central__directory__info(data, eocd);
    let cd;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      cd = _ok._0;
    } else {
      return _bind$5;
    }
    if (cd.entries === 0) {
      return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE2Ok(files);
    }
    const cd_end = cd.offset + cd.size | 0;
    let o = cd.offset;
    let total_output = 0;
    const _bind$6 = cd.entries;
    let _tmp$22 = 0;
    while (true) {
      const _i = _tmp$22;
      if (_i < _bind$6) {
        const _bind$7 = _M0FP27hustcer4fzip39read__central__directory__entry_2einner(data, o, cd_end, cd.zip64, opts.verify_checksum);
        let header;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          header = _ok._0;
        } else {
          return _bind$7;
        }
        if (_M0FP27hustcer4fzip16is__unsafe__path(header.name)) {
          return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, `zip entry contains unsafe path: ${header.name}`));
        }
        o = header.next_offset;
        const sc = header.compressed_size;
        const su = header.uncompressed_size;
        const _bind$8 = _M0FP27hustcer4fzip24add__zip__output__budget(total_output, su);
        let _tmp$23;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$23 = _ok._0;
        } else {
          return _bind$8;
        }
        total_output = _tmp$23;
        const _bind$9 = _M0FP27hustcer4fzip19local__data__offset(data, header.local_offset, sc);
        let b_off;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          b_off = _ok._0;
        } else {
          return _bind$9;
        }
        if (header.compression === 0) {
          if (sc !== su) {
            return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "stored ZIP entry size mismatch"));
          }
          const buf = _M0FP27hustcer4fzip11slc_2einner(data, b_off, b_off + sc | 0);
          if (opts.verify_checksum) {
            const _bind$10 = _M0FP27hustcer4fzip18validate__zip__crc(_M0FP27hustcer4fzip5crc32(buf), header.crc);
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              _ok._0;
            } else {
              return _bind$10;
            }
          }
          _M0MPC15array5Array4pushGsE(files, { _0: header.name, _1: buf });
        } else {
          if (header.compression === 8) {
            const _bind$10 = _M0FP27hustcer4fzip33validate__zip__compression__ratio(sc, su);
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              _ok._0;
            } else {
              return _bind$10;
            }
            const out = $makebytes(su, 0);
            const _bind$11 = _M0FP27hustcer4fzip5inflt(data, _M0MP27hustcer4fzip12InflateState3new(2), out, undefined, 1073741824, 104857600, b_off, b_off + sc | 0, _M0DTPC16option6OptionGORP27hustcer4fzip10CRC32StateE4None__, _M0DTPC16option6OptionGORP27hustcer4fzip10AdlerStateE4None__);
            let _bind$12;
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              _bind$12 = _ok._0;
            } else {
              return _bind$11;
            }
            const _buf = _bind$12._0;
            const _len = _bind$12._1;
            if (_len !== su) {
              return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "inflated ZIP entry size mismatch"));
            }
            if (opts.verify_checksum) {
              const _bind$13 = _M0FP27hustcer4fzip18validate__zip__crc(_M0FP27hustcer4fzip5crc32(_buf), header.crc);
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                _ok._0;
              } else {
                return _bind$13;
              }
            }
            _M0MPC15array5Array4pushGsE(files, { _0: header.name, _1: _buf });
          } else {
            return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(14, `unknown compression type ${_M0MPC13int3Int18to__string_2einner(header.compression, 10)}`));
          }
        }
        _tmp$22 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (o !== cd_end) {
      return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE3Err(_M0FP27hustcer4fzip17fzip__err_2einner(13, "central directory has trailing or missing bytes"));
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGUsAyEERP27hustcer4fzip9FzipErrorE2Ok(files);
  }
  function _M0FP27hustcer4fzip11unzip__sync(data, opts$46$opt) {
    let opts;
    if (opts$46$opt === undefined) {
      opts = _M0MP27hustcer4fzip12UnzipOptions7defaultN6recordS2604;
    } else {
      const _Some = opts$46$opt;
      opts = _Some;
    }
    return _M0FP27hustcer4fzip19unzip__sync_2einner(data, opts);
  }
  function _M0FP27mik1e806stlkit9push__f32(buf, value) {
    const bits = $i32_reinterpret_f32(Math.fround(value));
    _M0MPC15array5Array4pushGyE(buf, bits & 255);
    _M0MPC15array5Array4pushGyE(buf, bits >> 8 & 255);
    _M0MPC15array5Array4pushGyE(buf, bits >> 16 & 255);
    _M0MPC15array5Array4pushGyE(buf, bits >> 24 & 255);
  }
  function _M0FP27mik1e806stlkit9push__u32(buf, value) {
    _M0MPC15array5Array4pushGyE(buf, value & 255);
    _M0MPC15array5Array4pushGyE(buf, value >> 8 & 255);
    _M0MPC15array5Array4pushGyE(buf, value >> 16 & 255);
    _M0MPC15array5Array4pushGyE(buf, value >> 24 & 255);
  }
  function _M0MP27mik1e806stlkit4Vec35cross(self, other) {
    return new _M0TP27mik1e806stlkit4Vec3(self.y * other.z - self.z * other.y, self.z * other.x - self.x * other.z, self.x * other.y - self.y * other.x);
  }
  function _M0MP27mik1e806stlkit4Vec36length(self) {
    return Math.sqrt(self.x * self.x + self.y * self.y + self.z * self.z);
  }
  function _M0MP27mik1e806stlkit4Vec39normalize(self) {
    const len = _M0MP27mik1e806stlkit4Vec36length(self);
    return len === 0 ? self : new _M0TP27mik1e806stlkit4Vec3(self.x / len, self.y / len, self.z / len);
  }
  function _M0MP27mik1e806stlkit4Vec33sub(self, other) {
    return new _M0TP27mik1e806stlkit4Vec3(self.x - other.x, self.y - other.y, self.z - other.z);
  }
  function _M0MP27mik1e806stlkit8Triangle16computed__normal(self) {
    return _M0MP27mik1e806stlkit4Vec39normalize(_M0MP27mik1e806stlkit4Vec35cross(_M0MP27mik1e806stlkit4Vec33sub(self.b, self.a), _M0MP27mik1e806stlkit4Vec33sub(self.c, self.a)));
  }
  function _M0FP27mik1e806stlkit18write__stl__binary(mesh) {
    const buf = [];
    const header_bytes = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_M0FP27mik1e806stlkit18write__stl__binaryN6headerS745, 0, _M0FP27mik1e806stlkit18write__stl__binaryN6headerS745.length), false);
    const header_len = header_bytes.length > 80 ? 80 : header_bytes.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < header_len) {
        _M0MPC15array5Array4pushGyE(buf, i >>> 0 < header_bytes.length ? header_bytes[i] : $oob());
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$23 = header_len;
    while (true) {
      const i = _tmp$23;
      if (i < 80) {
        _M0MPC15array5Array4pushGyE(buf, 0);
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0FP27mik1e806stlkit9push__u32(buf, mesh.triangles.length);
    const _bind$3 = mesh.triangles;
    const _bind$4 = _bind$3.length;
    let _tmp$24 = 0;
    while (true) {
      const _ = _tmp$24;
      if (_ < _bind$4) {
        const triangle = _bind$3[_];
        const n = _M0MP27mik1e806stlkit8Triangle16computed__normal(triangle);
        _M0FP27mik1e806stlkit9push__f32(buf, n.x);
        _M0FP27mik1e806stlkit9push__f32(buf, n.y);
        _M0FP27mik1e806stlkit9push__f32(buf, n.z);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.a.x);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.a.y);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.a.z);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.b.x);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.b.y);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.b.z);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.c.x);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.c.y);
        _M0FP27mik1e806stlkit9push__f32(buf, triangle.c.z);
        _M0MPC15array5Array4pushGyE(buf, 0);
        _M0MPC15array5Array4pushGyE(buf, 0);
        _tmp$24 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(buf, 0, buf.length));
  }
  function _M0FP27mik1e806stlkit8quantize(value, tolerance) {
    return _M0MPC16double6Double7to__int(_M0MPC16double6Double5round(value / tolerance));
  }
  function _M0FP27mik1e806stlkit14weld__vertices(mesh, tolerance) {
    const _bind$3 = [];
    const lookup = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
    const ids = [];
    let next_id = 0;
    const _bind$4 = mesh.triangles;
    const _bind$5 = _bind$4.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$5) {
        const triangle = _bind$4[_];
        const _bind$6 = [triangle.a, triangle.b, triangle.c];
        const _bind$7 = _bind$6.length;
        let _tmp$23 = 0;
        while (true) {
          const _$2 = _tmp$23;
          if (_$2 < _bind$7) {
            const v = _bind$6[_$2];
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0FP27mik1e806stlkit8quantize(v.x, tolerance));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0FP27mik1e806stlkit8quantize(v.y, tolerance));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0FP27mik1e806stlkit8quantize(v.z, tolerance));
            const key = _string_builder.val;
            const _bind$8 = _M0MPB3Map3getGsiE(lookup, key);
            let id;
            if (_bind$8 === undefined) {
              const id$2 = next_id;
              _M0MPB3Map3setGsiE(lookup, key, id$2);
              next_id = next_id + 1 | 0;
              id = id$2;
            } else {
              const _Some = _bind$8;
              id = _Some;
            }
            _M0MPC15array5Array4pushGiE(ids, id);
            _tmp$23 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP27mik1e806stlkit10WeldResult(ids, next_id);
  }
  function _M0FP27mik1e806stlkit14winding__flags(mesh, tolerance) {
    const n = mesh.triangles.length;
    const flags = [];
    let _tmp$22 = 0;
    while (true) {
      const _i = _tmp$22;
      if (_i < n) {
        _M0MPC15array5Array4pushGbE(flags, false);
        _tmp$22 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (n === 0) {
      return flags;
    }
    const weld = _M0FP27mik1e806stlkit14weld__vertices(mesh, tolerance);
    const ids = [];
    let _tmp$23 = 0;
    while (true) {
      const i = _tmp$23;
      if (i < n) {
        _M0MPC15array5Array4pushGsE(ids, { _0: _M0MPC15array5Array2atGiE(weld.ids, Math.imul(i, 3) | 0), _1: _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 1 | 0), _2: _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 2 | 0) });
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = [];
    const edge_faces = _M0MPB3Map3MapGsRPB5ArrayGUiiEEE(new _M0TPB9ArrayViewGUsRPB5ArrayGUiiEEEE(_bind$3, 0, 0), undefined);
    const _bind$4 = ids.length;
    let _tmp$24 = 0;
    while (true) {
      const i = _tmp$24;
      if (i < _bind$4) {
        const id = ids[i];
        const _a = id._0;
        const _b$2 = id._1;
        const _c = id._2;
        const _bind$5 = [{ _0: _a, _1: _b$2 }, { _0: _b$2, _1: _c }, { _0: _c, _1: _a }];
        const _bind$6 = _bind$5.length;
        let _tmp$25 = 0;
        while (true) {
          const _ = _tmp$25;
          if (_ < _bind$6) {
            const e = _bind$5[_];
            let key;
            if (e._0 < e._1) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._0);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._1);
              key = _string_builder.val;
            } else {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._1);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._0);
              key = _string_builder.val;
            }
            const dir = e._0 < e._1 ? 1 : -1;
            const _bind$7 = _M0MPB3Map3getGsRPB5ArrayGUiiEEE(edge_faces, key);
            let list;
            if (_bind$7.$tag === 1) {
              const _Some = _bind$7;
              list = _Some._0;
            } else {
              const list$2 = [];
              _M0MPB3Map3setGsRPB5ArrayGUiiEEE(edge_faces, key, list$2);
              list = list$2;
            }
            _M0MPC15array5Array4pushGsE(list, { _0: i, _1: dir });
            _tmp$25 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$24 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const visited = [];
    let _tmp$25 = 0;
    while (true) {
      const _i = _tmp$25;
      if (_i < n) {
        _M0MPC15array5Array4pushGbE(visited, false);
        _tmp$25 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$26 = 0;
    while (true) {
      const seed = _tmp$26;
      if (seed < n) {
        _L: {
          if (_M0MPC15array5Array2atGbE(visited, seed)) {
            break _L;
          }
          _M0MPC15array5Array3setGbE(visited, seed, true);
          const queue = [seed];
          while (true) {
            if (queue.length > 0) {
              const _bind$5 = _M0MPC15array5Array3popGiE(queue);
              let cur;
              if (_bind$5 === undefined) {
                continue;
              } else {
                const _Some = _bind$5;
                cur = _Some;
              }
              const _bind$6 = _M0MPC15array5Array2atGsE(ids, cur);
              const _a = _bind$6._0;
              const _b$2 = _bind$6._1;
              const _c = _bind$6._2;
              const _bind$7 = [{ _0: _a, _1: _b$2 }, { _0: _b$2, _1: _c }, { _0: _c, _1: _a }];
              const _bind$8 = _bind$7.length;
              let _tmp$27 = 0;
              while (true) {
                const _ = _tmp$27;
                if (_ < _bind$8) {
                  const e = _bind$7[_];
                  _L$2: {
                    let key;
                    if (e._0 < e._1) {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
                      _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._0);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
                      _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._1);
                      key = _string_builder.val;
                    } else {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
                      _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._1);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
                      _M0MPB13StringBuilder13write__objectGiE(_string_builder, e._0);
                      key = _string_builder.val;
                    }
                    const dir = e._0 < e._1 ? 1 : -1;
                    const _bind$9 = _M0MPB3Map3getGsRPB5ArrayGUiiEEE(edge_faces, key);
                    let list;
                    if (_bind$9.$tag === 1) {
                      const _Some = _bind$9;
                      list = _Some._0;
                    } else {
                      break _L$2;
                    }
                    const _bind$10 = list.length;
                    let _tmp$28 = 0;
                    while (true) {
                      const _$2 = _tmp$28;
                      if (_$2 < _bind$10) {
                        const entry = list[_$2];
                        _L$3: {
                          const _j = entry._0;
                          const _other_dir = entry._1;
                          if (_j === cur || _M0MPC15array5Array2atGbE(visited, _j)) {
                            break _L$3;
                          }
                          _M0MPC15array5Array3setGbE(visited, _j, true);
                          _M0MPC15array5Array3setGbE(flags, _j, dir === _other_dir ? !_M0MPC15array5Array2atGbE(flags, cur) : _M0MPC15array5Array2atGbE(flags, cur));
                          _M0MPC15array5Array4pushGiE(queue, _j);
                          break _L$3;
                        }
                        _tmp$28 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    break _L$2;
                  }
                  _tmp$27 = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        _tmp$26 = seed + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return flags;
  }
  function _M0MP27mik1e806stlkit8Triangle14signed__volume(self) {
    const _p = self.a;
    const _p$2 = _M0MP27mik1e806stlkit4Vec35cross(self.b, self.c);
    return (_p.x * _p$2.x + _p.y * _p$2.y + _p.z * _p$2.z) / 6;
  }
  function _M0FP27mik1e806stlkit14check__winding(mesh, tolerance) {
    const flags = _M0FP27mik1e806stlkit14winding__flags(mesh, tolerance);
    let flipped = 0;
    const _bind$3 = flags.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const f = flags[_];
        if (f) {
          flipped = flipped + 1 | 0;
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let signed = 0;
    const _bind$4 = mesh.triangles;
    const _bind$5 = _bind$4.length;
    let _tmp$23 = 0;
    while (true) {
      const _ = _tmp$23;
      if (_ < _bind$5) {
        const triangle = _bind$4[_];
        signed = signed + _M0MP27mik1e806stlkit8Triangle14signed__volume(triangle);
        _tmp$23 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP27mik1e806stlkit13WindingReport(flipped, flipped === 0, signed);
  }
  function _M0MP27mik1e806stlkit4Mesh3new(triangles) {
    return new _M0TP27mik1e806stlkit4Mesh(triangles);
  }
  function _M0FP27mik1e806stlkit14unify__winding(mesh, tolerance) {
    const flags = _M0FP27mik1e806stlkit14winding__flags(mesh, tolerance);
    const flipped = [];
    const _bind$3 = mesh.triangles;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$4) {
        const triangle = _bind$3[i];
        if (_M0MPC15array5Array2atGbE(flags, i)) {
          _M0MPC15array5Array4pushGsE(flipped, new _M0TP27mik1e806stlkit8Triangle(triangle.normal, triangle.a, triangle.c, triangle.b));
        } else {
          _M0MPC15array5Array4pushGsE(flipped, triangle);
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let signed = 0;
    const _bind$5 = flipped.length;
    let _tmp$23 = 0;
    while (true) {
      const _ = _tmp$23;
      if (_ < _bind$5) {
        const triangle = flipped[_];
        signed = signed + _M0MP27mik1e806stlkit8Triangle14signed__volume(triangle);
        _tmp$23 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (signed >= 0) {
      return _M0MP27mik1e806stlkit4Mesh3new(flipped);
    }
    const outward = [];
    const _bind$6 = flipped.length;
    let _tmp$24 = 0;
    while (true) {
      const _ = _tmp$24;
      if (_ < _bind$6) {
        const triangle = flipped[_];
        _M0MPC15array5Array4pushGsE(outward, new _M0TP27mik1e806stlkit8Triangle(triangle.normal, triangle.a, triangle.c, triangle.b));
        _tmp$24 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MP27mik1e806stlkit4Mesh3new(outward);
  }
  function _M0FP27mik1e806stlkit23check__winding__default(mesh) {
    return _M0FP27mik1e806stlkit14check__winding(mesh, 1e-006);
  }
  function _M0MP27mik1e806stlkit4Vec33new(x, y, z) {
    return new _M0TP27mik1e806stlkit4Vec3(x, y, z);
  }
  function _M0MP27mik1e806stlkit4Vec38is__zero(self, tolerance) {
    return _M0MP27mik1e806stlkit4Vec36length(self) <= tolerance;
  }
  function _M0MP27mik1e806stlkit4Vec35scale(self, factor) {
    return new _M0TP27mik1e806stlkit4Vec3(self.x * factor, self.y * factor, self.z * factor);
  }
  function _M0FP27mik1e806stlkit9edge__key(a, b) {
    return a < b ? { _0: a, _1: b } : { _0: b, _1: a };
  }
  function _M0FP27mik1e806stlkit8validate(mesh, tolerance) {
    const weld = _M0FP27mik1e806stlkit14weld__vertices(mesh, tolerance);
    const _bind$3 = [];
    const edge_counts = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
    let degenerate = 0;
    let wrong_normal = 0;
    const _bind$4 = mesh.triangles;
    const _bind$5 = _bind$4.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$5) {
        const triangle = _bind$4[i];
        const ia = _M0MPC15array5Array2atGiE(weld.ids, Math.imul(i, 3) | 0);
        const ib = _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 1 | 0);
        const ic = _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 2 | 0);
        if (ia === ib || (ib === ic || ia === ic)) {
          degenerate = degenerate + 1 | 0;
        }
        const declared = triangle.normal;
        if (!_M0MP27mik1e806stlkit4Vec38is__zero(declared, 1e-009)) {
          const computed = _M0MP27mik1e806stlkit8Triangle16computed__normal(triangle);
          if (declared.x * computed.x + declared.y * computed.y + declared.z * computed.z < 0) {
            wrong_normal = wrong_normal + 1 | 0;
          }
        }
        if (ia !== ib) {
          const k = _M0FP27mik1e806stlkit9edge__key(ia, ib);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._1);
          const key = _string_builder.val;
          const _bind$6 = _M0MPB3Map3getGsiE(edge_counts, key);
          let _tmp$23;
          if (_bind$6 === undefined) {
            _tmp$23 = 1;
          } else {
            const _Some = _bind$6;
            const _n = _Some;
            _tmp$23 = _n + 1 | 0;
          }
          _M0MPB3Map3setGsiE(edge_counts, key, _tmp$23);
        }
        if (ib !== ic) {
          const k = _M0FP27mik1e806stlkit9edge__key(ib, ic);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._1);
          const key = _string_builder.val;
          const _bind$6 = _M0MPB3Map3getGsiE(edge_counts, key);
          let _tmp$23;
          if (_bind$6 === undefined) {
            _tmp$23 = 1;
          } else {
            const _Some = _bind$6;
            const _n = _Some;
            _tmp$23 = _n + 1 | 0;
          }
          _M0MPB3Map3setGsiE(edge_counts, key, _tmp$23);
        }
        if (ic !== ia) {
          const k = _M0FP27mik1e806stlkit9edge__key(ic, ia);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k._1);
          const key = _string_builder.val;
          const _bind$6 = _M0MPB3Map3getGsiE(edge_counts, key);
          let _tmp$23;
          if (_bind$6 === undefined) {
            _tmp$23 = 1;
          } else {
            const _Some = _bind$6;
            const _n = _Some;
            _tmp$23 = _n + 1 | 0;
          }
          _M0MPB3Map3setGsiE(edge_counts, key, _tmp$23);
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let boundary = 0;
    let non_manifold = 0;
    const _it = _M0MPB3Map5iter2GsiE(edge_counts);
    while (true) {
      const _bind$6 = _M0MPB5Iter24nextGsiE(_it);
      if (_bind$6 === undefined) {
        break;
      } else {
        const _Some = _bind$6;
        const _x = _Some;
        const _count = _x._1;
        if (_count === 1) {
          boundary = boundary + 1 | 0;
        } else {
          if (_count > 2) {
            non_manifold = non_manifold + 1 | 0;
          }
        }
        continue;
      }
    }
    return new _M0TP27mik1e806stlkit16ValidationReport(mesh.triangles.length, Math.imul(mesh.triangles.length, 3) | 0, weld.unique_count, boundary, non_manifold, degenerate, wrong_normal);
  }
  function _M0FP27mik1e806stlkit17validate__default(mesh) {
    return _M0FP27mik1e806stlkit8validate(mesh, 1e-006);
  }
  function _M0FP27mik1e806stlkit7is__3mf(data) {
    if (data.length >= 4) {
      let _tmp$22;
      const _p = 0 >>> 0 < data.length ? data[0] : $oob();
      const _p$2 = 80;
      if (_p === _p$2) {
        let _tmp$23;
        const _p$3 = 1 >>> 0 < data.length ? data[1] : $oob();
        const _p$4 = 75;
        if (_p$3 === _p$4) {
          let _tmp$24;
          const _p$5 = 2 >>> 0 < data.length ? data[2] : $oob();
          const _p$6 = 3;
          if (_p$5 === _p$6) {
            const _p$7 = 3 >>> 0 < data.length ? data[3] : $oob();
            const _p$8 = 4;
            _tmp$24 = _p$7 === _p$8;
          } else {
            _tmp$24 = false;
          }
          _tmp$23 = _tmp$24;
        } else {
          _tmp$23 = false;
        }
        _tmp$22 = _tmp$23;
      } else {
        _tmp$22 = false;
      }
      return _tmp$22;
    } else {
      return false;
    }
  }
  function _M0FP27mik1e806stlkit22normalize__entry__name(name) {
    const lower = _M0MPC16string6String9to__lower(name);
    return _M0MPC16string6String8contains(lower, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS951, 0, _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS951.length)) ? _M0MPC16string6String12replace__all(lower, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS952, 0, _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS952.length), new _M0TPC16string10StringView(_M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS953, 0, _M0FP27mik1e806stlkit22normalize__entry__nameN7_2abindS953.length)) : lower;
  }
  function _M0FP27mik1e806stlkit11find__entry(entries, name) {
    const want = _M0FP27mik1e806stlkit22normalize__entry__name(name);
    const _bind$3 = entries.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const entry = entries[_];
        const _entry_name = entry._0;
        const _bytes = entry._1;
        if (_M0FP27mik1e806stlkit22normalize__entry__name(_entry_name) === want) {
          return _bytes;
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP27mik1e806stlkit11local__name(name) {
    let last = new _M0TPC16string10StringView(name, 0, name.length);
    const _it = _M0MPC16string6String5split(name, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit11local__nameN7_2abindS974, 0, _M0FP27mik1e806stlkit11local__nameN7_2abindS974.length));
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _part = _Some;
        last = _part;
        continue;
      }
    }
    return _M0MPC16string10StringView9to__owned(last);
  }
  function _M0FP27mik1e806stlkit21normalize__part__path(path) {
    return _M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit21normalize__part__pathN7_2abindS975, 0, _M0FP27mik1e806stlkit21normalize__part__pathN7_2abindS975.length)) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(path, 1, undefined)) : path;
  }
  function _M0FP27mik1e806stlkit19rels__model__target(xml) {
    const reader = _M0MP29Milky20183xml6Reader12from__string(xml);
    let found = undefined;
    _L: while (true) {
      const _bind$3 = found;
      if (_bind$3 === undefined) {
        let event;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$4 = _M0MP29Milky20183xml6Reader11read__event(reader);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              event = _ok._0;
            } else {
              const _err = _bind$4;
              _try_err = _err._0;
              break _L$3;
            }
            break _L$2;
          }
          break;
        }
        let element;
        const _bind$4 = event.kind;
        switch (_bind$4.$tag) {
          case 0: {
            const _Start = _bind$4;
            const _e = _Start._0;
            element = _e;
            break;
          }
          case 2: {
            const _Empty = _bind$4;
            const _e$2 = _Empty._0;
            element = _e$2;
            break;
          }
          case 9: {
            break _L;
          }
          default: {
            continue _L;
          }
        }
        const _p = _M0FP27mik1e806stlkit11local__name(element.name);
        const _p$2 = "Relationship";
        if (!(_p === _p$2)) {
          continue;
        }
        const _bind$5 = _M0MP29Milky20183xml10XmlElement3get(element, "Type");
        let kind;
        if (_bind$5 === undefined) {
          continue;
        } else {
          const _Some = _bind$5;
          kind = _Some;
        }
        if (!_M0MPC16string6String11has__suffix(kind, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit19rels__model__targetN7_2abindS977, 0, _M0FP27mik1e806stlkit19rels__model__targetN7_2abindS977.length))) {
          continue;
        }
        const _bind$6 = _M0MP29Milky20183xml10XmlElement3get(element, "Target");
        if (_bind$6 === undefined) {
        } else {
          const _Some = _bind$6;
          const _t = _Some;
          found = _M0FP27mik1e806stlkit21normalize__part__path(_t);
        }
        continue;
      } else {
        break;
      }
    }
    return found;
  }
  function _M0FP27mik1e806stlkit17find__model__part(entries) {
    const _bind$3 = _M0FP27mik1e806stlkit11find__entry(entries, "_rels/.rels");
    let target;
    if (_bind$3 === undefined) {
      target = undefined;
    } else {
      const _Some = _bind$3;
      const _raw = _Some;
      const _bind$4 = _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_raw, 0, _raw.length));
      target = _M0FP27mik1e806stlkit19rels__model__target(_M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(_bind$4, 0, _bind$4.length), false));
    }
    if (target === undefined) {
      const models = [];
      const _bind$4 = entries.length;
      let _tmp$22 = 0;
      while (true) {
        const _ = _tmp$22;
        if (_ < _bind$4) {
          const entry = entries[_];
          const _name = entry._0;
          if (_M0MPC16string6String11has__suffix(_M0MPC16string6String9to__lower(_name), new _M0TPC16string10StringView(_M0FP27mik1e806stlkit17find__model__partN7_2abindS1013, 0, _M0FP27mik1e806stlkit17find__model__partN7_2abindS1013.length))) {
            _M0MPC15array5Array4pushGsE(models, _name);
          }
          _tmp$22 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (models.length === 0) {
        return _M0FP27mik1e806stlkit17find__model__partN6constrS2010;
      } else {
        if (models.length > 1) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(81);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "这个 3MF 里有 ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, models.length);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个 .model 部件，关系表也没说是哪个，认不出来");
          return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
        } else {
          const _bind$5 = _M0FP27mik1e806stlkit11find__entry(entries, _M0MPC15array5Array2atGsE(models, 0));
          if (_bind$5 === undefined) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "读不到模型部件「");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGsE(models, 0));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "」");
            return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
          } else {
            const _Some = _bind$5;
            const _raw = _Some;
            const _bind$6 = _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_raw, 0, _raw.length));
            return new _M0DTPC16result6ResultGssE2Ok(_M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(_bind$6, 0, _bind$6.length), false));
          }
        }
      }
    } else {
      const _Some = target;
      const _path = _Some;
      const _bind$4 = _M0FP27mik1e806stlkit11find__entry(entries, _path);
      if (_bind$4 === undefined) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(58);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的关系表指向「");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _path);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "」，但包里没有这个部件");
        return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
      } else {
        const _Some$2 = _bind$4;
        const _raw = _Some$2;
        const _bind$5 = _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_raw, 0, _raw.length));
        return new _M0DTPC16result6ResultGssE2Ok(_M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(_bind$5, 0, _bind$5.length), false));
      }
    }
  }
  function _M0FP27mik1e806stlkit14attribute__int(element, name, tag) {
    const _bind$3 = _M0MP29Milky20183xml10XmlElement3get(element, name);
    if (_bind$3 === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(39);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "> 少了一个必需的属性 ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
      return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
    } else {
      const _Some = _bind$3;
      const _raw = _Some;
      let value;
      let _try_err;
      _L: {
        _L$2: {
          const _bind$4 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_raw, 0, _raw.length));
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            value = _ok._0;
          } else {
            const _err = _bind$4;
            _try_err = _err._0;
            break _L$2;
          }
          break _L;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(34);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "> 里 ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "=\"");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _raw);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" 不是个整数");
        return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
      }
      if (value !== value || (value > _M0FPB18double__max__value || value < _M0FPB18double__min__value || value !== _M0MPC16double6Double5round(value))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(34);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "> 里 ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "=\"");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _raw);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" 不是个整数");
        return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
      }
      return new _M0DTPC16result6ResultGisE2Ok(_M0MPC16double6Double7to__int(value));
    }
  }
  function _M0FP27mik1e806stlkit20attribute__transform(element) {
    const _bind$3 = _M0MP29Milky20183xml10XmlElement3get(element, "transform");
    let raw;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGOAdsE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      raw = _Some;
    }
    const out = [];
    const _it = _M0MPC16string6String5split(raw, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit20attribute__transformN7_2abindS1062, 0, _M0FP27mik1e806stlkit20attribute__transformN7_2abindS1062.length));
    while (true) {
      const _bind$4 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$4 === undefined) {
        break;
      } else {
        const _Some = _bind$4;
        const _token = _Some;
        if ((_token.end - _token.start | 0) === 0) {
          continue;
        }
        let value;
        let _try_err;
        _L: {
          _L$2: {
            const _bind$5 = _M0FPC28internal7strconv13parse__double(_token);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              value = _ok._0;
            } else {
              const _err = _bind$5;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(42);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 transform 里『");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, _token);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "』不是个数字");
          return new _M0DTPC16result6ResultGOAdsE3Err(_string_builder.val);
        }
        _M0MPC15array5Array4pushGdE(out, value);
        continue;
      }
    }
    if (out.length !== 12) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(80);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 transform 应该有 12 个数（4 行 3 列的矩阵），实际有 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, out.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个");
      return new _M0DTPC16result6ResultGOAdsE3Err(_string_builder.val);
    }
    return new _M0DTPC16result6ResultGOAdsE2Ok([_M0MPC15array5Array2atGdE(out, 0), _M0MPC15array5Array2atGdE(out, 1), _M0MPC15array5Array2atGdE(out, 2), _M0MPC15array5Array2atGdE(out, 3), _M0MPC15array5Array2atGdE(out, 4), _M0MPC15array5Array2atGdE(out, 5), _M0MPC15array5Array2atGdE(out, 6), _M0MPC15array5Array2atGdE(out, 7), _M0MPC15array5Array2atGdE(out, 8), _M0MPC15array5Array2atGdE(out, 9), _M0MPC15array5Array2atGdE(out, 10), _M0MPC15array5Array2atGdE(out, 11)]);
  }
  function _M0FP27mik1e806stlkit15attribute__vec3(element) {
    const out = [];
    const _bind$3 = ["x", "y", "z"];
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const name = _bind$3[_];
        const _bind$5 = _M0MP29Milky20183xml10XmlElement3get(element, name);
        let raw;
        if (_bind$5 === undefined) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <vertex> 少了坐标属性 ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_string_builder.val);
        } else {
          const _Some = _bind$5;
          raw = _Some;
        }
        let value;
        let _try_err;
        _L: {
          _L$2: {
            const _bind$6 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(raw, 0, raw.length));
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              value = _ok._0;
            } else {
              const _err = _bind$6;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(40);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <vertex> 里 ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "=\"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, raw);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" 不是个数字");
          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_string_builder.val);
        }
        if (value !== value || (value > _M0FPB18double__max__value || value < _M0FPB18double__min__value)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(49);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的 <vertex> 里 ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "=\"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, raw);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" 不是个有限的数字");
          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_string_builder.val);
        }
        _M0MPC15array5Array4pushGdE(out, value);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE2Ok(_M0MP27mik1e806stlkit4Vec33new(_M0MPC15array5Array2atGdE(out, 0), _M0MPC15array5Array2atGdE(out, 1), _M0MPC15array5Array2atGdE(out, 2)));
  }
  function _M0FP27mik1e806stlkit16apply__transform(v, m) {
    return new _M0TP27mik1e806stlkit4Vec3(v.x * (0 >>> 0 < m.length ? m[0] : $oob()) + v.y * (3 >>> 0 < m.length ? m[3] : $oob()) + v.z * (6 >>> 0 < m.length ? m[6] : $oob()) + (9 >>> 0 < m.length ? m[9] : $oob()), v.x * (1 >>> 0 < m.length ? m[1] : $oob()) + v.y * (4 >>> 0 < m.length ? m[4] : $oob()) + v.z * (7 >>> 0 < m.length ? m[7] : $oob()) + (10 >>> 0 < m.length ? m[10] : $oob()), v.x * (2 >>> 0 < m.length ? m[2] : $oob()) + v.y * (5 >>> 0 < m.length ? m[5] : $oob()) + v.z * (8 >>> 0 < m.length ? m[8] : $oob()) + (11 >>> 0 < m.length ? m[11] : $oob()));
  }
  function _M0FP27mik1e806stlkit18compose__transform(first, second) {
    const out = [];
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < 4) {
        let _tmp$23 = 0;
        while (true) {
          const j = _tmp$23;
          if (j < 3) {
            let sum = 0;
            let _tmp$24 = 0;
            while (true) {
              const k = _tmp$24;
              if (k < 3) {
                const _tmp$25 = sum;
                const _tmp$26 = (Math.imul(i, 3) | 0) + k | 0;
                const _tmp$27 = _tmp$26 >>> 0 < first.length ? first[_tmp$26] : $oob();
                const _tmp$28 = (Math.imul(k, 3) | 0) + j | 0;
                sum = _tmp$25 + _tmp$27 * (_tmp$28 >>> 0 < second.length ? second[_tmp$28] : $oob());
                _tmp$24 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i === 3) {
              const _tmp$25 = sum;
              const _tmp$26 = 9 + j | 0;
              sum = _tmp$25 + (_tmp$26 >>> 0 < second.length ? second[_tmp$26] : $oob());
            }
            _M0MPC15array5Array4pushGdE(out, sum);
            _tmp$23 = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return [_M0MPC15array5Array2atGdE(out, 0), _M0MPC15array5Array2atGdE(out, 1), _M0MPC15array5Array2atGdE(out, 2), _M0MPC15array5Array2atGdE(out, 3), _M0MPC15array5Array2atGdE(out, 4), _M0MPC15array5Array2atGdE(out, 5), _M0MPC15array5Array2atGdE(out, 6), _M0MPC15array5Array2atGdE(out, 7), _M0MPC15array5Array2atGdE(out, 8), _M0MPC15array5Array2atGdE(out, 9), _M0MPC15array5Array2atGdE(out, 10), _M0MPC15array5Array2atGdE(out, 11)];
  }
  function _M0MP27mik1e806stlkit8Triangle14from__vertices(a, b, c) {
    return new _M0TP27mik1e806stlkit8Triangle(_M0MP27mik1e806stlkit4Vec34zeroN6recordS2009, a, b, c);
  }
  function _M0FP27mik1e806stlkit13build__object(objects, id, transform, depth) {
    if (depth > 32) {
      return _M0FP27mik1e806stlkit13build__objectN6constrS2011;
    }
    const _bind$3 = _M0MPB3Map3getGiRP27mik1e806stlkit8MfObjectE(objects, id);
    let obj;
    if (_bind$3 === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 里引用了不存在的对象 id=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
      return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(_string_builder.val);
    } else {
      const _Some = _bind$3;
      obj = _Some;
    }
    const out = [];
    if (obj.triangles.length > 0) {
      const n = obj.vertices.length;
      const _bind$4 = obj.triangles;
      const _bind$5 = _bind$4.length;
      let _tmp$22 = 0;
      while (true) {
        const _ = _tmp$22;
        if (_ < _bind$5) {
          const _foreach_element = _bind$4[_];
          const _i = _foreach_element._0;
          const _j = _foreach_element._1;
          const _k = _foreach_element._2;
          if (_i < 0 || (_j < 0 || (_k < 0 || (_i >= n || (_j >= n || _k >= n))))) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(77);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 对象 id=");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 里有三角形的顶点下标越界（顶点表只有 ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个，");
            const _tmp$23 = _string_builder.val;
            const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "引用到了 ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _i);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "/");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _j);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "/");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _k);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "）");
            return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(`${_tmp$23}${_string_builder$2.val}`);
          }
          const a = _M0FP27mik1e806stlkit16apply__transform(_M0MPC15array5Array2atGsE(obj.vertices, _i), transform);
          const b = _M0FP27mik1e806stlkit16apply__transform(_M0MPC15array5Array2atGsE(obj.vertices, _j), transform);
          const c = _M0FP27mik1e806stlkit16apply__transform(_M0MPC15array5Array2atGsE(obj.vertices, _k), transform);
          _M0MPC15array5Array4pushGsE(out, _M0MP27mik1e806stlkit8Triangle14from__vertices(a, b, c));
          _tmp$22 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    const _bind$4 = obj.components;
    const _bind$5 = _bind$4.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$5) {
        const _foreach_element = _bind$4[_];
        const _child_id = _foreach_element._0;
        const _child_tf = _foreach_element._1;
        let combined;
        if (_child_tf === undefined) {
          combined = transform;
        } else {
          const _Some = _child_tf;
          const _t = _Some;
          combined = _M0FP27mik1e806stlkit18compose__transform(_t, transform);
        }
        const _bind$6 = _M0FP27mik1e806stlkit13build__object(objects, _child_id, combined, depth + 1 | 0);
        let sub;
        if (_bind$6.$tag === 1) {
          const _Ok = _bind$6;
          sub = _Ok._0;
        } else {
          const _Err = _bind$6;
          const _msg = _Err._0;
          return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(_msg);
        }
        const _bind$7 = sub.length;
        let _tmp$23 = 0;
        while (true) {
          const _$2 = _tmp$23;
          if (_$2 < _bind$7) {
            const tri = sub[_$2];
            _M0MPC15array5Array4pushGsE(out, tri);
            _tmp$23 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE2Ok(out);
  }
  function _M0FP27mik1e806stlkit20detect__core__prefix(element) {
    const _bind$3 = element.attributes;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const attr = _bind$3[_];
        _L: {
          if (!_M0MPC16string6String8contains(attr.value, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1140, 0, _M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1140.length))) {
            break _L;
          }
          if (attr.name === "xmlns") {
            return _M0FP27mik1e806stlkit20detect__core__prefixN6constrS2012;
          }
          if (_M0MPC16string6String11has__prefix(attr.name, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1141, 0, _M0FP27mik1e806stlkit20detect__core__prefixN7_2abindS1141.length))) {
            return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(attr.name, 6, undefined));
          }
          break _L;
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP27mik1e806stlkit13flush__object(objects, id, vertices, triangles, components) {
    if (id === undefined) {
      return;
    } else {
      const _Some = id;
      const _i = _Some;
      _M0MPB3Map3setGiRP27mik1e806stlkit8MfObjectE(objects, _i, new _M0TP27mik1e806stlkit8MfObject(vertices, triangles, components));
      return;
    }
  }
  function _M0FP27mik1e806stlkit19identity__transform() {
    return [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
  }
  function _M0FP27mik1e806stlkit10prefix__of(name) {
    const _bind$3 = _M0MPC16string6String4find(name, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit10prefix__ofN7_2abindS1146, 0, _M0FP27mik1e806stlkit10prefix__ofN7_2abindS1146.length));
    if (_bind$3 === undefined) {
      return "";
    } else {
      const _Some = _bind$3;
      const _i = _Some;
      return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(name, 0, _i));
    }
  }
  function _M0FP27mik1e806stlkit11scale__mesh(triangles, scale) {
    if (scale === 1) {
      return triangles;
    }
    const out = [];
    const _bind$3 = triangles.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const t$19 = triangles[_];
        _M0MPC15array5Array4pushGsE(out, new _M0TP27mik1e806stlkit8Triangle(t$19.normal, _M0MP27mik1e806stlkit4Vec35scale(t$19.a, scale), _M0MP27mik1e806stlkit4Vec35scale(t$19.b, scale), _M0MP27mik1e806stlkit4Vec35scale(t$19.c, scale)));
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return out;
  }
  function _M0FP27mik1e806stlkit15unit__scale__of(unit) {
    switch (unit) {
      case "micron": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2013;
      }
      case "millimeter": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2014;
      }
      case "centimeter": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2015;
      }
      case "inch": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2016;
      }
      case "foot": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2017;
      }
      case "meter": {
        return _M0FP27mik1e806stlkit15unit__scale__ofN6constrS2018;
      }
      default: {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(46);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 里写了一个不认识的单位「");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, unit);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "」，");
        return new _M0DTPC16result6ResultGdsE3Err(`${_string_builder.val}规范里只有 micron / millimeter / centimeter / inch / foot / meter`);
      }
    }
  }
  function _M0FP27mik1e806stlkit17parse__model__xml(xml) {
    const reader = _M0MP29Milky20183xml6Reader12from__string(xml);
    const _bind$3 = [];
    const objects = _M0MPB3Map3MapGiRP27mik1e806stlkit8MfObjectE(new _M0TPB9ArrayViewGUiRP27mik1e806stlkit8MfObjectEE(_bind$3, 0, 0), undefined);
    const build = [];
    let unit_scale = 1;
    let core_prefix = undefined;
    let cur_id = undefined;
    let cur_vertices = [];
    let cur_triangles = [];
    let cur_components = [];
    _L: while (true) {
      if (!(reader.pos >= reader.input.length)) {
        let event;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$4 = _M0MP29Milky20183xml6Reader11read__event(reader);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              event = _ok._0;
            } else {
              const _err = _bind$4;
              _try_err = _err._0;
              break _L$3;
            }
            break _L$2;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3MF 的模型 XML 解析失败（第 ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, reader.line);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行）：");
          _M0MPB13StringBuilder13write__objectGRP29Milky20183xml8XmlErrorE(_string_builder, _try_err);
          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_string_builder.val);
        }
        let element;
        const _bind$4 = event.kind;
        switch (_bind$4.$tag) {
          case 0: {
            const _Start = _bind$4;
            const _e = _Start._0;
            element = _e;
            break;
          }
          case 2: {
            const _Empty = _bind$4;
            const _e$2 = _Empty._0;
            element = _e$2;
            break;
          }
          case 1: {
            const _End = _bind$4;
            const _name = _End._0;
            const _bind$5 = core_prefix;
            let end_is_core;
            if (_bind$5 === undefined) {
              end_is_core = _M0FP27mik1e806stlkit10prefix__of(_name) === "";
            } else {
              const _Some = _bind$5;
              const _p = _Some;
              end_is_core = _M0FP27mik1e806stlkit10prefix__of(_name) === _p;
            }
            if (end_is_core && _M0FP27mik1e806stlkit11local__name(_name) === "object") {
              _M0FP27mik1e806stlkit13flush__object(objects, cur_id, cur_vertices, cur_triangles, cur_components);
              cur_id = undefined;
              cur_vertices = [];
              cur_triangles = [];
              cur_components = [];
            }
            continue _L;
          }
          default: {
            continue _L;
          }
        }
        const tag = _M0FP27mik1e806stlkit11local__name(element.name);
        if (tag === "model") {
          core_prefix = _M0FP27mik1e806stlkit20detect__core__prefix(element);
        }
        const prefix = _M0FP27mik1e806stlkit10prefix__of(element.name);
        const _bind$6 = core_prefix;
        let is_core;
        if (_bind$6 === undefined) {
          is_core = prefix === "";
        } else {
          const _Some = _bind$6;
          const _p = _Some;
          is_core = prefix === _p;
        }
        if (!is_core) {
          continue;
        }
        if (tag === "model") {
          const _bind$7 = _M0MP29Milky20183xml10XmlElement3get(element, "unit");
          if (_bind$7 === undefined) {
          } else {
            const _Some = _bind$7;
            const _u = _Some;
            const _bind$8 = _M0FP27mik1e806stlkit15unit__scale__of(_u);
            let _tmp$22;
            if (_bind$8.$tag === 1) {
              const _Ok = _bind$8;
              _tmp$22 = _Ok._0;
            } else {
              const _Err = _bind$8;
              const _msg = _Err._0;
              return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
            }
            unit_scale = _tmp$22;
          }
        } else {
          if (tag === "object") {
            _M0FP27mik1e806stlkit13flush__object(objects, cur_id, cur_vertices, cur_triangles, cur_components);
            const _bind$7 = _M0FP27mik1e806stlkit14attribute__int(element, "id", "object");
            let id;
            if (_bind$7.$tag === 1) {
              const _Ok = _bind$7;
              id = _Ok._0;
            } else {
              const _Err = _bind$7;
              const _msg = _Err._0;
              return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
            }
            cur_id = id;
            cur_vertices = [];
            cur_triangles = [];
            cur_components = [];
          } else {
            if (tag === "vertex") {
              const _bind$7 = _M0FP27mik1e806stlkit15attribute__vec3(element);
              let v;
              if (_bind$7.$tag === 1) {
                const _Ok = _bind$7;
                v = _Ok._0;
              } else {
                const _Err = _bind$7;
                const _msg = _Err._0;
                return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
              }
              _M0MPC15array5Array4pushGsE(cur_vertices, v);
            } else {
              if (tag === "triangle") {
                const _bind$7 = _M0FP27mik1e806stlkit14attribute__int(element, "v1", "triangle");
                let a;
                if (_bind$7.$tag === 1) {
                  const _Ok = _bind$7;
                  a = _Ok._0;
                } else {
                  const _Err = _bind$7;
                  const _msg = _Err._0;
                  return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                }
                const _bind$8 = _M0FP27mik1e806stlkit14attribute__int(element, "v2", "triangle");
                let b;
                if (_bind$8.$tag === 1) {
                  const _Ok = _bind$8;
                  b = _Ok._0;
                } else {
                  const _Err = _bind$8;
                  const _msg = _Err._0;
                  return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                }
                const _bind$9 = _M0FP27mik1e806stlkit14attribute__int(element, "v3", "triangle");
                let c;
                if (_bind$9.$tag === 1) {
                  const _Ok = _bind$9;
                  c = _Ok._0;
                } else {
                  const _Err = _bind$9;
                  const _msg = _Err._0;
                  return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                }
                _M0MPC15array5Array4pushGsE(cur_triangles, { _0: a, _1: b, _2: c });
              } else {
                if (tag === "component") {
                  const _bind$7 = _M0FP27mik1e806stlkit14attribute__int(element, "objectid", "component");
                  let id;
                  if (_bind$7.$tag === 1) {
                    const _Ok = _bind$7;
                    id = _Ok._0;
                  } else {
                    const _Err = _bind$7;
                    const _msg = _Err._0;
                    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                  }
                  const _bind$8 = _M0FP27mik1e806stlkit20attribute__transform(element);
                  let tf;
                  if (_bind$8.$tag === 1) {
                    const _Ok = _bind$8;
                    tf = _Ok._0;
                  } else {
                    const _Err = _bind$8;
                    const _msg = _Err._0;
                    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                  }
                  _M0MPC15array5Array4pushGsE(cur_components, { _0: id, _1: tf });
                } else {
                  if (tag === "item") {
                    const _bind$7 = _M0FP27mik1e806stlkit14attribute__int(element, "objectid", "item");
                    let id;
                    if (_bind$7.$tag === 1) {
                      const _Ok = _bind$7;
                      id = _Ok._0;
                    } else {
                      const _Err = _bind$7;
                      const _msg = _Err._0;
                      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                    }
                    const _bind$8 = _M0FP27mik1e806stlkit20attribute__transform(element);
                    let tf;
                    if (_bind$8.$tag === 1) {
                      const _Ok = _bind$8;
                      tf = _Ok._0;
                    } else {
                      const _Err = _bind$8;
                      const _msg = _Err._0;
                      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                    }
                    _M0MPC15array5Array4pushGsE(build, { _0: id, _1: tf });
                  }
                }
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    _M0FP27mik1e806stlkit13flush__object(objects, cur_id, cur_vertices, cur_triangles, cur_components);
    if (build.length === 0) {
      return _M0FP27mik1e806stlkit17parse__model__xmlN6constrS2019;
    }
    const triangles = [];
    const _bind$4 = build.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const _foreach_element = build[_];
        const _id = _foreach_element._0;
        const _tf = _foreach_element._1;
        let transform;
        if (_tf === undefined) {
          transform = _M0FP27mik1e806stlkit19identity__transform();
        } else {
          const _Some = _tf;
          transform = _Some;
        }
        const _bind$5 = _M0FP27mik1e806stlkit13build__object(objects, _id, transform, 0);
        let body;
        if (_bind$5.$tag === 1) {
          const _Ok = _bind$5;
          body = _Ok._0;
        } else {
          const _Err = _bind$5;
          const _msg = _Err._0;
          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
        }
        const _bind$6 = body.length;
        let _tmp$23 = 0;
        while (true) {
          const _$2 = _tmp$23;
          if (_$2 < _bind$6) {
            const tri = body[_$2];
            _M0MPC15array5Array4pushGsE(triangles, tri);
            _tmp$23 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (triangles.length === 0) {
      return _M0FP27mik1e806stlkit17parse__model__xmlN6constrS2020;
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok(_M0MP27mik1e806stlkit4Mesh3new(_M0FP27mik1e806stlkit11scale__mesh(triangles, unit_scale)));
  }
  function _M0FP27mik1e806stlkit10parse__3mf(data) {
    let entries;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$3 = _M0FP27hustcer4fzip11unzip__sync(_M0MPC15bytes5Bytes14to__fixedarray(data, undefined), undefined);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          entries = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      const _FzipError = _try_err;
      const _message = _FzipError._1;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(50);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "这不是一个合法的 3MF：ZIP 解不开——");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _message);
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_string_builder.val);
    }
    const _bind$3 = _M0FP27mik1e806stlkit17find__model__part(entries);
    let xml;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      xml = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
    }
    return _M0FP27mik1e806stlkit17parse__model__xml(xml);
  }
  function _M0FP27mik1e806stlkit13read__u32__le(data, offset) {
    const b0 = (offset >>> 0 < data.length ? data[offset] : $oob()) & 255;
    const _tmp$22 = offset + 1 | 0;
    const b1 = (_tmp$22 >>> 0 < data.length ? data[_tmp$22] : $oob()) & 255;
    const _tmp$23 = offset + 2 | 0;
    const b2 = (_tmp$23 >>> 0 < data.length ? data[_tmp$23] : $oob()) & 255;
    const _tmp$24 = offset + 3 | 0;
    const b3 = (_tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob()) & 255;
    return b0 | b1 << 8 | b2 << 16 | b3 << 24;
  }
  function _M0FP27mik1e806stlkit13read__f32__le(data, offset) {
    const bits = _M0FP27mik1e806stlkit13read__u32__le(data, offset);
    return $f32_reinterpret_i32(bits);
  }
  function _M0FP27mik1e806stlkit15read__vec3__f32(data, offset) {
    return _M0MP27mik1e806stlkit4Vec33new(_M0FP27mik1e806stlkit13read__f32__le(data, offset), _M0FP27mik1e806stlkit13read__f32__le(data, offset + 4 | 0), _M0FP27mik1e806stlkit13read__f32__le(data, offset + 8 | 0));
  }
  function _M0FP27mik1e806stlkit12parse__coord(s, line_no) {
    let _try_err;
    _L: {
      const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
      let _tmp$22;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$22 = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGdsE2Ok(_tmp$22);
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(44);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：『");
    _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, s);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "』不是一个合法的数字");
    return new _M0DTPC16result6ResultGdsE3Err(_string_builder.val);
  }
  function _M0FP27mik1e806stlkit11parse__vec3(x, y, z, line_no) {
    const _bind$3 = _M0FP27mik1e806stlkit12parse__coord(x, line_no);
    let x$2;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      x$2 = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_msg);
    }
    const _bind$4 = _M0FP27mik1e806stlkit12parse__coord(y, line_no);
    let y$2;
    if (_bind$4.$tag === 1) {
      const _Ok = _bind$4;
      y$2 = _Ok._0;
    } else {
      const _Err = _bind$4;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_msg);
    }
    const _bind$5 = _M0FP27mik1e806stlkit12parse__coord(z, line_no);
    let z$2;
    if (_bind$5.$tag === 1) {
      const _Ok = _bind$5;
      z$2 = _Ok._0;
    } else {
      const _Err = _bind$5;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_msg);
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE2Ok(_M0MP27mik1e806stlkit4Vec33new(x$2, y$2, z$2));
  }
  function _M0FP27mik1e806stlkit9strip__cr(s) {
    const n = s.end - s.start | 0;
    let _tmp$22;
    if (n > 0) {
      const _bind$3 = n - 1 | 0;
      if (_bind$3 < 0 || _bind$3 >= (s.end - s.start | 0)) {
        $panic();
      }
      const _p = s.str.charCodeAt(s.start + _bind$3 | 0);
      const _p$2 = 13;
      _tmp$22 = _p === _p$2;
    } else {
      _tmp$22 = false;
    }
    if (_tmp$22) {
      return _M0MPC16string10StringView21clamped__view_2einner(s, 0, n - 1 | 0);
    } else {
      return s;
    }
  }
  function _M0FP27mik1e806stlkit21bytes__contain__ascii(data, limit, needle) {
    const target = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(needle, 0, needle.length), false);
    const n = target.length;
    if (n === 0) {
      return true;
    }
    const end = limit < data.length ? limit : data.length;
    if (end < n) {
      return false;
    }
    let _tmp$22 = 0;
    while (true) {
      const start = _tmp$22;
      if (start <= (end - n | 0)) {
        let matched = true;
        let _tmp$23 = 0;
        while (true) {
          const j = _tmp$23;
          if (j < n) {
            const _tmp$24 = start + j | 0;
            if ((_tmp$24 >>> 0 < data.length ? data[_tmp$24] : $oob()) !== (j >>> 0 < target.length ? target[j] : $oob())) {
              matched = false;
              break;
            }
            _tmp$23 = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (matched) {
          return true;
        }
        _tmp$22 = start + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP27mik1e806stlkit14detect__format(data) {
    if (_M0FP27mik1e806stlkit7is__3mf(data)) {
      return 2;
    }
    if (data.length >= 84) {
      const count = _M0FP27mik1e806stlkit13read__u32__le(data, 80);
      const expected = BigInt.asUintN(64, 84n + BigInt.asUintN(64, BigInt.asUintN(64, BigInt(count >>> 0)) * 50n));
      const _p = data.length;
      if (BigInt.asUintN(64, expected) === BigInt.asUintN(64, BigInt.asUintN(64, BigInt(_p)))) {
        return 1;
      }
    }
    const head_len = data.length < 512 ? data.length : 512;
    const has_solid = _M0FP27mik1e806stlkit21bytes__contain__ascii(data, head_len, "solid");
    const has_facet = _M0FP27mik1e806stlkit21bytes__contain__ascii(data, head_len, "facet");
    const has_vertex = _M0FP27mik1e806stlkit21bytes__contain__ascii(data, head_len, "vertex");
    if (has_solid && (has_facet || has_vertex)) {
      return 0;
    }
    if (has_facet && has_vertex) {
      return 0;
    }
    return 3;
  }
  function _M0FP27mik1e806stlkit17parse__stl__ascii(text) {
    const triangles = [];
    let normal = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
    const pending = [];
    let line_no = 0;
    const _it = _M0MPC16string6String5split(text, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1595, 0, _M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1595.length));
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _raw_line = _Some;
        line_no = line_no + 1 | 0;
        const tokens = [];
        const _it$2 = _M0MPC16string10StringView5split(_raw_line, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1514, 0, _M0FP27mik1e806stlkit17parse__stl__asciiN7_2abindS1514.length));
        while (true) {
          const _bind$4 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it$2);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$4;
            const _raw_token = _Some$2;
            const token = _M0FP27mik1e806stlkit9strip__cr(_raw_token);
            if ((token.end - token.start | 0) > 0) {
              _M0MPC15array5Array4pushGsE(tokens, token);
            }
            continue;
          }
        }
        _L: {
          _L$2: {
            if (tokens.length === 5) {
              const _x = tokens[0];
              if ((_x.end - _x.start | 0) === 5) {
                const _x$2 = _x.str.charCodeAt(_x.start);
                if (_x$2 === 102) {
                  const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                  if (_x$3 === 97) {
                    const _x$4 = _x.str.charCodeAt(_x.start + 2 | 0);
                    if (_x$4 === 99) {
                      const _x$5 = _x.str.charCodeAt(_x.start + 3 | 0);
                      if (_x$5 === 101) {
                        const _x$6 = _x.str.charCodeAt(_x.start + 4 | 0);
                        if (_x$6 === 116) {
                          const _x$7 = tokens[1];
                          if ((_x$7.end - _x$7.start | 0) === 6) {
                            const _x$8 = _x$7.str.charCodeAt(_x$7.start);
                            if (_x$8 === 110) {
                              const _x$9 = _x$7.str.charCodeAt(_x$7.start + 1 | 0);
                              if (_x$9 === 111) {
                                const _x$10 = _x$7.str.charCodeAt(_x$7.start + 2 | 0);
                                if (_x$10 === 114) {
                                  const _x$11 = _x$7.str.charCodeAt(_x$7.start + 3 | 0);
                                  if (_x$11 === 109) {
                                    const _x$12 = _x$7.str.charCodeAt(_x$7.start + 4 | 0);
                                    if (_x$12 === 97) {
                                      const _x$13 = _x$7.str.charCodeAt(_x$7.start + 5 | 0);
                                      if (_x$13 === 108) {
                                        const _x$14 = tokens[2];
                                        const _y = tokens[3];
                                        const _z = tokens[4];
                                        const _bind$4 = _M0FP27mik1e806stlkit11parse__vec3(_x$14, _y, _z, line_no);
                                        if (_bind$4.$tag === 1) {
                                          const _Ok = _bind$4;
                                          const _v = _Ok._0;
                                          normal = _v;
                                          _M0MPC15array5Array5clearGRP27mik1e806stlkit4Vec3E(pending);
                                        } else {
                                          const _Err = _bind$4;
                                          const _msg = _Err._0;
                                          return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if ((_x.end - _x.start | 0) === 8) {
                  const _x$2 = _x.str.charCodeAt(_x.start);
                  if (_x$2 === 101) {
                    const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                    if (_x$3 === 110) {
                      const _x$4 = _x.str.charCodeAt(_x.start + 2 | 0);
                      if (_x$4 === 100) {
                        const _x$5 = _x.str.charCodeAt(_x.start + 3 | 0);
                        if (_x$5 === 102) {
                          const _x$6 = _x.str.charCodeAt(_x.start + 4 | 0);
                          if (_x$6 === 97) {
                            const _x$7 = _x.str.charCodeAt(_x.start + 5 | 0);
                            if (_x$7 === 99) {
                              const _x$8 = _x.str.charCodeAt(_x.start + 6 | 0);
                              if (_x$8 === 101) {
                                const _x$9 = _x.str.charCodeAt(_x.start + 7 | 0);
                                if (_x$9 === 116) {
                                  break _L$2;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (tokens.length === 4) {
                const _x = tokens[0];
                if ((_x.end - _x.start | 0) === 6) {
                  const _x$2 = _x.str.charCodeAt(_x.start);
                  if (_x$2 === 118) {
                    const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                    if (_x$3 === 101) {
                      const _x$4 = _x.str.charCodeAt(_x.start + 2 | 0);
                      if (_x$4 === 114) {
                        const _x$5 = _x.str.charCodeAt(_x.start + 3 | 0);
                        if (_x$5 === 116) {
                          const _x$6 = _x.str.charCodeAt(_x.start + 4 | 0);
                          if (_x$6 === 101) {
                            const _x$7 = _x.str.charCodeAt(_x.start + 5 | 0);
                            if (_x$7 === 120) {
                              const _x$8 = tokens[1];
                              const _y = tokens[2];
                              const _z = tokens[3];
                              const _bind$4 = _M0FP27mik1e806stlkit11parse__vec3(_x$8, _y, _z, line_no);
                              if (_bind$4.$tag === 1) {
                                const _Ok = _bind$4;
                                const _v = _Ok._0;
                                _M0MPC15array5Array4pushGsE(pending, _v);
                              } else {
                                const _Err = _bind$4;
                                const _msg = _Err._0;
                                return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if ((_x.end - _x.start | 0) === 8) {
                    const _x$2 = _x.str.charCodeAt(_x.start);
                    if (_x$2 === 101) {
                      const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                      if (_x$3 === 110) {
                        const _x$4 = _x.str.charCodeAt(_x.start + 2 | 0);
                        if (_x$4 === 100) {
                          const _x$5 = _x.str.charCodeAt(_x.start + 3 | 0);
                          if (_x$5 === 102) {
                            const _x$6 = _x.str.charCodeAt(_x.start + 4 | 0);
                            if (_x$6 === 97) {
                              const _x$7 = _x.str.charCodeAt(_x.start + 5 | 0);
                              if (_x$7 === 99) {
                                const _x$8 = _x.str.charCodeAt(_x.start + 6 | 0);
                                if (_x$8 === 101) {
                                  const _x$9 = _x.str.charCodeAt(_x.start + 7 | 0);
                                  if (_x$9 === 116) {
                                    break _L$2;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (tokens.length >= 1) {
                  const _x = tokens[0];
                  if ((_x.end - _x.start | 0) === 8) {
                    const _x$2 = _x.str.charCodeAt(_x.start);
                    if (_x$2 === 101) {
                      const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                      if (_x$3 === 110) {
                        const _x$4 = _x.str.charCodeAt(_x.start + 2 | 0);
                        if (_x$4 === 100) {
                          const _x$5 = _x.str.charCodeAt(_x.start + 3 | 0);
                          if (_x$5 === 102) {
                            const _x$6 = _x.str.charCodeAt(_x.start + 4 | 0);
                            if (_x$6 === 97) {
                              const _x$7 = _x.str.charCodeAt(_x.start + 5 | 0);
                              if (_x$7 === 99) {
                                const _x$8 = _x.str.charCodeAt(_x.start + 6 | 0);
                                if (_x$8 === 101) {
                                  const _x$9 = _x.str.charCodeAt(_x.start + 7 | 0);
                                  if (_x$9 === 116) {
                                    break _L$2;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            break _L;
          }
          if (pending.length === 3) {
            _M0MPC15array5Array4pushGsE(triangles, new _M0TP27mik1e806stlkit8Triangle(normal, _M0MPC15array5Array2atGsE(pending, 0), _M0MPC15array5Array2atGsE(pending, 1), _M0MPC15array5Array2atGsE(pending, 2)));
            _M0MPC15array5Array5clearGRP27mik1e806stlkit4Vec3E(pending);
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(76);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：一个面结束了，但里面只有 ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, pending.length);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个顶点，应该是 3 个");
            return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_string_builder.val);
          }
        }
        continue;
      }
    }
    if (triangles.length === 0) {
      return _M0FP27mik1e806stlkit17parse__stl__asciiN6constrS2026;
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok(_M0MP27mik1e806stlkit4Mesh3new(triangles));
  }
  function _M0FP27mik1e806stlkit18parse__stl__binary(data) {
    if (data.length < 84) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(26);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "这个文件只有 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, data.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 字节");
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(`二进制 STL 至少要 84 字节（80 字节文件头 + 4 字节三角形数），${_string_builder.val}`);
    }
    const count_u = _M0FP27mik1e806stlkit13read__u32__le(data, 80);
    const expected = BigInt.asUintN(64, 84n + BigInt.asUintN(64, BigInt.asUintN(64, BigInt(count_u >>> 0)) * 50n));
    const _p = data.length;
    if (BigInt.asUintN(64, expected) > BigInt.asUintN(64, BigInt.asUintN(64, BigInt(_p)))) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(66);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "二进制 STL 头部声称有 ");
      _M0MPB13StringBuilder13write__objectGjE(_string_builder, count_u);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个三角形（需要 ");
      _M0MPB13StringBuilder13write__objectGmE(_string_builder, expected);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 字节），");
      const _tmp$22 = _string_builder.val;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(44);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "但文件只有 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, data.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " 字节，文件被截断了");
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(`${_tmp$22}${_string_builder$2.val}`);
    }
    const count = count_u;
    const triangles = [];
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < count) {
        const base = 84 + (Math.imul(i, 50) | 0) | 0;
        _M0MPC15array5Array4pushGsE(triangles, new _M0TP27mik1e806stlkit8Triangle(_M0FP27mik1e806stlkit15read__vec3__f32(data, base), _M0FP27mik1e806stlkit15read__vec3__f32(data, base + 12 | 0), _M0FP27mik1e806stlkit15read__vec3__f32(data, base + 24 | 0), _M0FP27mik1e806stlkit15read__vec3__f32(data, base + 36 | 0)));
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (triangles.length === 0) {
      return _M0FP27mik1e806stlkit18parse__stl__binaryN6constrS2027;
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok(_M0MP27mik1e806stlkit4Mesh3new(triangles));
  }
  function _M0FP27mik1e806stlkit10parse__stl(data) {
    const _bind$3 = _M0FP27mik1e806stlkit14detect__format(data);
    switch (_bind$3) {
      case 1: {
        return _M0FP27mik1e806stlkit18parse__stl__binary(data);
      }
      case 0: {
        return _M0FP27mik1e806stlkit17parse__stl__ascii(_M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(data, 0, data.length), false));
      }
      case 2: {
        return _M0FP27mik1e806stlkit10parse__stlN6constrS2028;
      }
      default: {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(61);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "认不出这是 ASCII 还是二进制 STL：文件 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, data.length);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 字节，");
        return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(`${_string_builder.val}既不是合法的二进制 STL（长度对不上三角形数量），开头也不像文本`);
      }
    }
  }
  function _M0FP27mik1e806stlkit10parse__int(token, line_no, what) {
    let _try_err;
    _L: {
      const _bind$3 = _M0FPC28internal7strconv18parse__int_2einner(token, 0);
      let _tmp$22;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$22 = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGisE2Ok(_tmp$22);
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(72);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：『");
    _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, token);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "』不是合法的");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, what);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "编号（OBJ 的编号必须是整数）");
    return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
  }
  function _M0FP27mik1e806stlkit6lookupGRP27mik1e806stlkit4Vec3E(token, table, line_no, what) {
    const _bind$3 = _M0FP27mik1e806stlkit10parse__int(token, line_no, what);
    let index;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      index = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_msg);
    }
    if (index === 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(53);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, what);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "编号不能是 0（OBJ 从 1 开始数）");
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_string_builder.val);
    }
    const count = table.length - 1 | 0;
    const resolved = index > 0 ? index : (count + index | 0) + 1 | 0;
    if (resolved < 1 || resolved > count) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, what);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "编号 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 超出范围（文件里一共有 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, count);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, what);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "）");
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE3Err(_string_builder.val);
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4Vec3sE2Ok(_M0MPC15array5Array2atGsE(table, resolved));
  }
  function _M0FP27mik1e806stlkit16parse__face__ref(vref, vertices, normals, line_no) {
    const parts = [];
    const _it = _M0MPC16string10StringView5split(vref, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit16parse__face__refN7_2abindS1632, 0, _M0FP27mik1e806stlkit16parse__face__refN7_2abindS1632.length));
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _part = _Some;
        _M0MPC15array5Array4pushGsE(parts, _part);
        continue;
      }
    }
    let vertex_index;
    if (parts.length >= 1) {
      vertex_index = parts[0];
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：空的顶点记号");
      return new _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE3Err(_string_builder.val);
    }
    const _bind$3 = _M0FP27mik1e806stlkit6lookupGRP27mik1e806stlkit4Vec3E(vertex_index, vertices, line_no, "顶点");
    let vertex;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      vertex = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE3Err(_msg);
    }
    let normal;
    if (parts.length >= 3) {
      const _n = parts[2];
      if ((_n.end - _n.start | 0) === 0) {
        normal = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
      } else {
        const _bind$4 = _M0FP27mik1e806stlkit6lookupGRP27mik1e806stlkit4Vec3E(_n, normals, line_no, "法线");
        if (_bind$4.$tag === 1) {
          const _Ok = _bind$4;
          normal = _Ok._0;
        } else {
          const _Err = _bind$4;
          const _msg = _Err._0;
          return new _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE3Err(_msg);
        }
      }
    } else {
      normal = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
    }
    return new _M0DTPC16result6ResultGURP27mik1e806stlkit4Vec3RP27mik1e806stlkit4Vec3EsE2Ok({ _0: vertex, _1: normal });
  }
  function _M0FP27mik1e806stlkit11parse__face(refs, vertices, normals, line_no) {
    if ((refs.end - refs.start | 0) < 3) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(64);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "第 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, line_no);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 行：一个面至少要有 3 个顶点，这里只有 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, refs.end - refs.start | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 个");
      return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(_string_builder.val);
    }
    const face_vertices = [];
    const face_normals = [];
    const _bind$3 = refs.end - refs.start | 0;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$3) {
        const vref = refs.buf[refs.start + _ | 0];
        const _bind$4 = _M0FP27mik1e806stlkit16parse__face__ref(vref, vertices, normals, line_no);
        if (_bind$4.$tag === 1) {
          const _Ok = _bind$4;
          const _pair = _Ok._0;
          _M0MPC15array5Array4pushGsE(face_vertices, _pair._0);
          _M0MPC15array5Array4pushGsE(face_normals, _pair._1);
        } else {
          const _Err = _bind$4;
          const _msg = _Err._0;
          return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE3Err(_msg);
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const result = [];
    let _tmp$23 = 1;
    while (true) {
      const i = _tmp$23;
      if ((i + 1 | 0) < face_vertices.length) {
        let normal;
        let _tmp$24;
        const _p = _M0MPC15array5Array2atGsE(face_normals, 0);
        const _p$2 = _M0MPC15array5Array2atGsE(face_normals, i);
        if (_p.x === _p$2.x && (_p.y === _p$2.y && _p.z === _p$2.z)) {
          const _p$3 = _M0MPC15array5Array2atGsE(face_normals, i);
          const _p$4 = _M0MPC15array5Array2atGsE(face_normals, i + 1 | 0);
          _tmp$24 = _p$3.x === _p$4.x && (_p$3.y === _p$4.y && _p$3.z === _p$4.z);
        } else {
          _tmp$24 = false;
        }
        if (_tmp$24) {
          normal = _M0MPC15array5Array2atGsE(face_normals, 0);
        } else {
          normal = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
        }
        _M0MPC15array5Array4pushGsE(result, new _M0TP27mik1e806stlkit8Triangle(normal, _M0MPC15array5Array2atGsE(face_vertices, 0), _M0MPC15array5Array2atGsE(face_vertices, i), _M0MPC15array5Array2atGsE(face_vertices, i + 1 | 0)));
        _tmp$23 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP27mik1e806stlkit8TriangleEsE2Ok(result);
  }
  function _M0FP27mik1e806stlkit10parse__obj(text) {
    const vertices = [_M0MP27mik1e806stlkit4Vec34zeroN6recordS2009];
    const normals = [_M0MP27mik1e806stlkit4Vec34zeroN6recordS2009];
    const triangles = [];
    let line_no = 0;
    const _it = _M0MPC16string6String5split(text, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit10parse__objN7_2abindS1738, 0, _M0FP27mik1e806stlkit10parse__objN7_2abindS1738.length));
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _raw_line = _Some;
        line_no = line_no + 1 | 0;
        const tokens = [];
        const _it$2 = _M0MPC16string10StringView5split(_raw_line, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit10parse__objN7_2abindS1684, 0, _M0FP27mik1e806stlkit10parse__objN7_2abindS1684.length));
        while (true) {
          const _bind$4 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it$2);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$4;
            const _raw_token = _Some$2;
            const token = _M0FP27mik1e806stlkit9strip__cr(_raw_token);
            if ((token.end - token.start | 0) > 0) {
              _M0MPC15array5Array4pushGsE(tokens, token);
            }
            continue;
          }
        }
        let rest;
        _L: {
          _L$2: {
            if (tokens.length >= 4) {
              const _x = tokens[0];
              if ((_x.end - _x.start | 0) === 1) {
                const _x$2 = _x.str.charCodeAt(_x.start);
                switch (_x$2) {
                  case 118: {
                    const _x$3 = tokens[1];
                    const _y = tokens[2];
                    const _z = tokens[3];
                    const _bind$4 = _M0FP27mik1e806stlkit11parse__vec3(_x$3, _y, _z, line_no);
                    if (_bind$4.$tag === 1) {
                      const _Ok = _bind$4;
                      const _v = _Ok._0;
                      _M0MPC15array5Array4pushGsE(vertices, _v);
                    } else {
                      const _Err = _bind$4;
                      const _msg = _Err._0;
                      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                    }
                    break;
                  }
                  case 102: {
                    const _x$4 = new _M0TPB9ArrayViewGRPC16string10StringViewE(tokens, 1, tokens.length);
                    rest = _x$4;
                    break _L$2;
                  }
                }
              } else {
                if ((_x.end - _x.start | 0) === 2) {
                  const _x$2 = _x.str.charCodeAt(_x.start);
                  if (_x$2 === 118) {
                    const _x$3 = _x.str.charCodeAt(_x.start + 1 | 0);
                    if (_x$3 === 110) {
                      const _x$4 = tokens[1];
                      const _y = tokens[2];
                      const _z = tokens[3];
                      const _bind$4 = _M0FP27mik1e806stlkit11parse__vec3(_x$4, _y, _z, line_no);
                      if (_bind$4.$tag === 1) {
                        const _Ok = _bind$4;
                        const _v = _Ok._0;
                        _M0MPC15array5Array4pushGsE(normals, _v);
                      } else {
                        const _Err = _bind$4;
                        const _msg = _Err._0;
                        return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
                      }
                    }
                  }
                }
              }
            } else {
              if (tokens.length >= 1) {
                const _x = tokens[0];
                if ((_x.end - _x.start | 0) === 1) {
                  const _x$2 = _x.str.charCodeAt(_x.start);
                  if (_x$2 === 102) {
                    const _x$3 = new _M0TPB9ArrayViewGRPC16string10StringViewE(tokens, 1, tokens.length);
                    rest = _x$3;
                    break _L$2;
                  }
                }
              }
            }
            break _L;
          }
          const _bind$4 = _M0FP27mik1e806stlkit11parse__face(rest, vertices, normals, line_no);
          if (_bind$4.$tag === 1) {
            const _Ok = _bind$4;
            const _new_triangles = _Ok._0;
            const _bind$5 = _new_triangles.length;
            let _tmp$22 = 0;
            while (true) {
              const _ = _tmp$22;
              if (_ < _bind$5) {
                const t$19 = _new_triangles[_];
                _M0MPC15array5Array4pushGsE(triangles, t$19);
                _tmp$22 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            const _Err = _bind$4;
            const _msg = _Err._0;
            return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
          }
        }
        continue;
      }
    }
    if (triangles.length === 0) {
      return _M0FP27mik1e806stlkit10parse__objN6constrS2029;
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE2Ok(_M0MP27mik1e806stlkit4Mesh3new(triangles));
  }
  function _M0FP27mik1e806stlkit11parse__mesh(data) {
    const _bind$3 = _M0FP27mik1e806stlkit14detect__format(data);
    switch (_bind$3) {
      case 2: {
        return _M0FP27mik1e806stlkit10parse__3mf(data);
      }
      case 3: {
        return _M0FP27mik1e806stlkit10parse__obj(_M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(data, 0, data.length), false));
      }
      default: {
        return _M0FP27mik1e806stlkit10parse__stl(data);
      }
    }
  }
  function _M0MP27mik1e806stlkit13RepairOptions7default() {
    return new _M0TP27mik1e806stlkit13RepairOptions(1e-006, true, true, true, true, true);
  }
  function _M0MP27mik1e806stlkit12RepairResult7changed(self) {
    return self.removed_degenerate > 0 || (self.removed_duplicates > 0 || (self.filled_holes > 0 || (self.recomputed_normals > 0 || self.flipped_faces > 0)));
  }
  function _M0FP27mik1e806stlkit14canonical__key(a, b, c) {
    let x;
    let y;
    let z;
    _L: {
      if (a <= b && a <= c) {
        if (b <= c) {
          x = a;
          y = b;
          z = c;
          break _L;
        } else {
          x = a;
          y = c;
          z = b;
          break _L;
        }
      } else {
        if (b <= a && b <= c) {
          if (a <= c) {
            x = b;
            y = a;
            z = c;
            break _L;
          } else {
            x = b;
            y = c;
            z = a;
            break _L;
          }
        } else {
          if (a <= b) {
            x = c;
            y = a;
            z = b;
            break _L;
          } else {
            x = c;
            y = b;
            z = a;
            break _L;
          }
        }
      }
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, x);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, y);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, z);
    return _string_builder.val;
  }
  function _M0FP27mik1e806stlkit17parse__int__quiet(s) {
    let _try_err;
    _L: {
      const _bind$3 = _M0FPC28internal7strconv18parse__int_2einner(s, 0);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        return _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
    }
    return undefined;
  }
  function _M0FP27mik1e806stlkit10vertex__of(triangles, ids, target) {
    const _bind$3 = ids.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$3) {
        const id = ids[i];
        if (id._0 === target) {
          return _M0MPC15array5Array2atGsE(triangles, i).a;
        }
        if (id._1 === target) {
          return _M0MPC15array5Array2atGsE(triangles, i).b;
        }
        if (id._2 === target) {
          return _M0MPC15array5Array2atGsE(triangles, i).c;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
  }
  function _M0FP27mik1e806stlkit11fill__holes(triangles, ids, tolerance) {
    const _bind$3 = [];
    const counts = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
    const _bind$4 = ids.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const id = ids[_];
        const _a = id._0;
        const _b$2 = id._1;
        const _c = id._2;
        const _bind$5 = [{ _0: _a, _1: _b$2 }, { _0: _b$2, _1: _c }, { _0: _c, _1: _a }];
        const _bind$6 = _bind$5.length;
        let _tmp$23 = 0;
        while (true) {
          const _$2 = _tmp$23;
          if (_$2 < _bind$6) {
            const edge = _bind$5[_$2];
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, edge._0);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ">");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, edge._1);
            const key = _string_builder.val;
            const _bind$7 = _M0MPB3Map3getGsiE(counts, key);
            let _tmp$24;
            if (_bind$7 === undefined) {
              _tmp$24 = 1;
            } else {
              const _Some = _bind$7;
              const _n = _Some;
              _tmp$24 = _n + 1 | 0;
            }
            _M0MPB3Map3setGsiE(counts, key, _tmp$24);
            _tmp$23 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const boundary = [];
    const _it = _M0MPB3Map5iter2GsiE(counts);
    while (true) {
      const _bind$5 = _M0MPB5Iter24nextGsiE(_it);
      if (_bind$5 === undefined) {
        break;
      } else {
        const _Some = _bind$5;
        const _x = _Some;
        const _key = _x._0;
        const _count = _x._1;
        if (_count !== 1) {
          continue;
        }
        const parts = [];
        const _it$2 = _M0MPC16string6String5split(_key, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit11fill__holesN7_2abindS1785, 0, _M0FP27mik1e806stlkit11fill__holesN7_2abindS1785.length));
        while (true) {
          const _bind$6 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it$2);
          if (_bind$6 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$6;
            const _part = _Some$2;
            _M0MPC15array5Array4pushGsE(parts, _part);
            continue;
          }
        }
        if (parts.length === 2) {
          const _a_str = parts[0];
          const _b_str = parts[1];
          const _bind$6 = _M0FP27mik1e806stlkit17parse__int__quiet(_a_str);
          let a;
          if (_bind$6 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$6;
            a = _Some$2;
          }
          const _bind$7 = _M0FP27mik1e806stlkit17parse__int__quiet(_b_str);
          let b;
          if (_bind$7 === undefined) {
            continue;
          } else {
            const _Some$2 = _bind$7;
            b = _Some$2;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, b);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ">");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, a);
          const reverse = _string_builder.val;
          if (!_M0MPB3Map8containsGsiE(counts, reverse)) {
            _M0MPC15array5Array4pushGsE(boundary, { _0: a, _1: b });
          }
        }
        continue;
      }
    }
    if (boundary.length === 0) {
      return triangles;
    }
    const _bind$5 = [];
    const used = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$5, 0, 0), undefined);
    const rings = [];
    const _bind$6 = boundary.length;
    let _tmp$23 = 0;
    while (true) {
      const _ = _tmp$23;
      if (_ < _bind$6) {
        const start_edge = boundary[_];
        _L: {
          const start = start_edge._0;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, start_edge._0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ">");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, start_edge._1);
          const first_key = _string_builder.val;
          if (_M0MPB3Map8containsGsuE(used, first_key)) {
            break _L;
          }
          const ring = [];
          let current = start;
          let steps = 0;
          while (true) {
            if (steps < (boundary.length + 1 | 0)) {
              steps = steps + 1 | 0;
              let next = undefined;
              let next_key = "";
              const _bind$7 = boundary.length;
              let _tmp$24 = 0;
              while (true) {
                const _$2 = _tmp$24;
                if (_$2 < _bind$7) {
                  const edge = boundary[_$2];
                  if (edge._0 === current) {
                    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(1);
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, edge._0);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ">");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, edge._1);
                    const key = _string_builder$2.val;
                    if (!_M0MPB3Map8containsGsuE(used, key)) {
                      next = edge._1;
                      next_key = key;
                      break;
                    }
                  }
                  _tmp$24 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const _bind$8 = next;
              if (_bind$8 === undefined) {
                break;
              } else {
                const _Some = _bind$8;
                const _n = _Some;
                _M0MPB3Map3setGsuE(used, next_key, undefined);
                _M0MPC15array5Array4pushGiE(ring, current);
                current = _n;
                if (current === start) {
                  break;
                }
              }
              continue;
            } else {
              break;
            }
          }
          if (ring.length >= 3) {
            _M0MPC15array5Array4pushGRPB5ArrayGiEE(rings, ring);
          }
          break _L;
        }
        _tmp$23 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (rings.length === 0) {
      return triangles;
    }
    const result = [];
    const _bind$7 = triangles.length;
    let _tmp$24 = 0;
    while (true) {
      const _ = _tmp$24;
      if (_ < _bind$7) {
        const triangle = triangles[_];
        _M0MPC15array5Array4pushGsE(result, triangle);
        _tmp$24 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$8 = rings.length;
    let _tmp$25 = 0;
    while (true) {
      const _ = _tmp$25;
      if (_ < _bind$8) {
        const ring = rings[_];
        _L: {
          if (ring.length === 3) {
            const v0 = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, _M0MPC15array5Array2atGiE(ring, 0));
            const v1 = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, _M0MPC15array5Array2atGiE(ring, 1));
            const v2 = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, _M0MPC15array5Array2atGiE(ring, 2));
            _M0MPC15array5Array4pushGsE(result, new _M0TP27mik1e806stlkit8Triangle(_M0MP27mik1e806stlkit4Vec34zeroN6recordS2009, v0, v2, v1));
            break _L;
          }
          let cx = 0;
          let cy = 0;
          let cz = 0;
          const _bind$9 = ring.length;
          let _tmp$26 = 0;
          while (true) {
            const _$2 = _tmp$26;
            if (_$2 < _bind$9) {
              const id = ring[_$2];
              const v = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, id);
              cx = cx + v.x;
              cy = cy + v.y;
              cz = cz + v.z;
              _tmp$26 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const n = ring.length + 0;
          const center = _M0MP27mik1e806stlkit4Vec33new(cx / n, cy / n, cz / n);
          let _tmp$27 = 0;
          while (true) {
            const i = _tmp$27;
            if (i < ring.length) {
              const a = _M0MPC15array5Array2atGiE(ring, i);
              const b = _M0MPC15array5Array2atGiE(ring, (i + 1 | 0) % ring.length | 0);
              const va = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, a);
              const vb = _M0FP27mik1e806stlkit10vertex__of(triangles, ids, b);
              _M0MPC15array5Array4pushGsE(result, new _M0TP27mik1e806stlkit8Triangle(_M0MP27mik1e806stlkit4Vec34zeroN6recordS2009, center, vb, va));
              _tmp$27 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        _tmp$25 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return result;
  }
  function _M0FP27mik1e806stlkit6repair(mesh, options) {
    let removed_degenerate = 0;
    let removed_duplicates = 0;
    const weld = _M0FP27mik1e806stlkit14weld__vertices(mesh, options.tolerance);
    const kept = [];
    const kept_ids = [];
    const _bind$3 = [];
    const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$3, 0, 0), undefined);
    const _bind$4 = mesh.triangles;
    const _bind$5 = _bind$4.length;
    let _tmp$22 = 0;
    while (true) {
      const i = _tmp$22;
      if (i < _bind$5) {
        const triangle = _bind$4[i];
        _L: {
          const ia = _M0MPC15array5Array2atGiE(weld.ids, Math.imul(i, 3) | 0);
          const ib = _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 1 | 0);
          const ic = _M0MPC15array5Array2atGiE(weld.ids, (Math.imul(i, 3) | 0) + 2 | 0);
          if (options.drop_degenerate && (ia === ib || (ib === ic || ia === ic))) {
            removed_degenerate = removed_degenerate + 1 | 0;
            break _L;
          }
          if (options.drop_duplicates) {
            const key = _M0FP27mik1e806stlkit14canonical__key(ia, ib, ic);
            if (_M0MPB3Map8containsGsuE(seen, key)) {
              removed_duplicates = removed_duplicates + 1 | 0;
              break _L;
            }
            _M0MPB3Map3setGsuE(seen, key, undefined);
          }
          _M0MPC15array5Array4pushGsE(kept, triangle);
          _M0MPC15array5Array4pushGsE(kept_ids, { _0: ia, _1: ib, _2: ic });
          break _L;
        }
        _tmp$22 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let filled_holes = 0;
    let added_triangles = 0;
    let result = kept;
    if (options.fill_holes) {
      const before = result.length;
      result = _M0FP27mik1e806stlkit11fill__holes(result, kept_ids, options.tolerance);
      const after = result.length;
      added_triangles = after - before | 0;
      if (added_triangles > 0) {
        filled_holes = 1;
      }
    }
    let flipped_faces = 0;
    if (options.unify_winding) {
      const before = _M0FP27mik1e806stlkit14check__winding(_M0MP27mik1e806stlkit4Mesh3new(result), options.tolerance);
      flipped_faces = before.flipped_faces;
      if (before.flipped_faces > 0 || before.signed_volume < 0) {
        result = _M0FP27mik1e806stlkit14unify__winding(_M0MP27mik1e806stlkit4Mesh3new(result), options.tolerance).triangles;
      }
    }
    let recomputed = 0;
    const final_triangles = [];
    const _bind$6 = result;
    const _bind$7 = _bind$6.length;
    let _tmp$23 = 0;
    while (true) {
      const _ = _tmp$23;
      if (_ < _bind$7) {
        const triangle = _bind$6[_];
        const computed = _M0MP27mik1e806stlkit8Triangle16computed__normal(triangle);
        if (options.recompute_normals) {
          const _p = triangle.normal;
          const changed = !(_p.x === computed.x && (_p.y === computed.y && _p.z === computed.z));
          if (changed) {
            recomputed = recomputed + 1 | 0;
          }
          _M0MPC15array5Array4pushGsE(final_triangles, new _M0TP27mik1e806stlkit8Triangle(computed, triangle.a, triangle.b, triangle.c));
        } else {
          _M0MPC15array5Array4pushGsE(final_triangles, triangle);
        }
        _tmp$23 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP27mik1e806stlkit12RepairResult(_M0MP27mik1e806stlkit4Mesh3new(final_triangles), removed_degenerate, removed_duplicates, filled_holes, added_triangles, recomputed, flipped_faces);
  }
  function _M0MP27mik1e806stlkit4Aabb4size(self) {
    return _M0MP27mik1e806stlkit4Vec33sub(self.max, self.min);
  }
  function _M0MP27mik1e806stlkit4Mesh13bounding__box(self) {
    const _bind$3 = self.triangles;
    if (_bind$3.length === 0) {
      return undefined;
    } else {
      let min = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
      let max = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
      let first = true;
      const _bind$4 = self.triangles;
      const _bind$5 = _bind$4.length;
      let _tmp$22 = 0;
      while (true) {
        const _ = _tmp$22;
        if (_ < _bind$5) {
          const triangle = _bind$4[_];
          const _bind$6 = [triangle.a, triangle.b, triangle.c];
          const _bind$7 = _bind$6.length;
          let _tmp$23 = 0;
          while (true) {
            const _$2 = _tmp$23;
            if (_$2 < _bind$7) {
              const v = _bind$6[_$2];
              if (first) {
                min = v;
                max = v;
                first = false;
              } else {
                min = new _M0TP27mik1e806stlkit4Vec3(_M0MPC16double6Double3min(min.x, v.x), _M0MPC16double6Double3min(min.y, v.y), _M0MPC16double6Double3min(min.z, v.z));
                max = new _M0TP27mik1e806stlkit4Vec3(_M0MPC16double6Double3max(max.x, v.x), _M0MPC16double6Double3max(max.y, v.y), _M0MPC16double6Double3max(max.z, v.z));
              }
              _tmp$23 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$22 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0TP27mik1e806stlkit4Aabb(min, max);
    }
  }
  function _M0MP27mik1e806stlkit4Mesh9is__empty(self) {
    const _p = self.triangles;
    return _p.length === 0;
  }
  function _M0MP27mik1e806stlkit4Mesh8vertices(self) {
    const result = [];
    const _bind$3 = self.triangles;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const triangle = _bind$3[_];
        _M0MPC15array5Array4pushGsE(result, triangle.a);
        _M0MPC15array5Array4pushGsE(result, triangle.b);
        _M0MPC15array5Array4pushGsE(result, triangle.c);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return result;
  }
  function _M0FP27mik1e806stlkit11render__svgN6rotateS107(_env, v) {
    const pitch = _env._2;
    const center = _env._1;
    const yaw = _env._0;
    const x = v.x - center.x;
    const y = v.y - center.y;
    const z = v.z - center.z;
    const x1 = x * _M0FPC14math3cos(yaw) + z * _M0FPC14math3sin(yaw);
    const z1 = -x * _M0FPC14math3sin(yaw) + z * _M0FPC14math3cos(yaw);
    const y2 = y * _M0FPC14math3cos(pitch) - z1 * _M0FPC14math3sin(pitch);
    const z2 = y * _M0FPC14math3sin(pitch) + z1 * _M0FPC14math3cos(pitch);
    return { _0: x1, _1: y2, _2: z2 };
  }
  function _M0FP27mik1e806stlkit11render__svgN7projectS130(_env, v) {
    const half_w = _env._5;
    const offset_x = _env._4;
    const half_h = _env._3;
    const offset_y = _env._2;
    const scale = _env._1;
    const _env$2 = _env._0;
    const _bind$3 = _M0FP27mik1e806stlkit11render__svgN6rotateS107(_env$2, v);
    const _rx = _bind$3._0;
    const _ry = _bind$3._1;
    const _rz = _bind$3._2;
    return { _0: half_w + (_rx - offset_x) * scale, _1: half_h - (_ry - offset_y) * scale, _2: _rz };
  }
  function _M0FP27mik1e806stlkit11render__svg(mesh, options) {
    if (_M0MP27mik1e806stlkit4Mesh9is__empty(mesh)) {
      return "<!-- 空网格 -->";
    }
    const yaw = options.yaw * 0.017453292519943295;
    const pitch = options.pitch * 0.017453292519943295;
    const _bind$3 = _M0MP27mik1e806stlkit4Mesh13bounding__box(mesh);
    let center;
    if (_bind$3 === undefined) {
      center = _M0MP27mik1e806stlkit4Vec34zeroN6recordS2009;
    } else {
      const _Some = _bind$3;
      const _box = _Some;
      const size = _M0MP27mik1e806stlkit4Aabb4size(_box);
      center = _M0MP27mik1e806stlkit4Vec33new(_box.min.x + size.x / 2, _box.min.y + size.y / 2, _box.min.z + size.z / 2);
    }
    const _env = { _0: yaw, _1: center, _2: pitch };
    let min_x = 1e+018;
    let max_x = -1e+018;
    let min_y = 1e+018;
    let max_y = -1e+018;
    const _bind$4 = _M0MP27mik1e806stlkit4Mesh8vertices(mesh);
    const _bind$5 = _bind$4.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$5) {
        const v = _bind$4[_];
        const _bind$6 = _M0FP27mik1e806stlkit11render__svgN6rotateS107(_env, v);
        const _rx = _bind$6._0;
        const _ry = _bind$6._1;
        if (_rx < min_x) {
          min_x = _rx;
        }
        if (_rx > max_x) {
          max_x = _rx;
        }
        if (_ry < min_y) {
          min_y = _ry;
        }
        if (_ry > max_y) {
          max_y = _ry;
        }
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const span_x = max_x - min_x;
    const span_y = max_y - min_y;
    const span_x$2 = span_x < 1e-009 ? 1 : span_x;
    const span_y$2 = span_y < 1e-009 ? 1 : span_y;
    const fit_x = (options.width + 0) * 0.88 / span_x$2;
    const fit_y = (options.height + 0) * 0.88 / span_y$2;
    const scale = fit_x < fit_y ? fit_x : fit_y;
    const offset_x = (min_x + max_x) / 2;
    const offset_y = (min_y + max_y) / 2;
    const half_w = (options.width + 0) / 2;
    const half_h = (options.height + 0) / 2;
    const _env$2 = { _0: _env, _1: scale, _2: offset_y, _3: half_h, _4: offset_x, _5: half_w };
    const light = _M0MP27mik1e806stlkit4Vec39normalize(_M0MP27mik1e806stlkit4Vec33new(-0.4, 0.7, 0.6));
    const faces = [];
    const _bind$6 = mesh.triangles;
    const _bind$7 = _bind$6.length;
    let _tmp$23 = 0;
    while (true) {
      const _ = _tmp$23;
      if (_ < _bind$7) {
        const triangle = _bind$6[_];
        _L: {
          const _bind$8 = _M0FP27mik1e806stlkit11render__svgN7projectS130(_env$2, triangle.a);
          const _ax = _bind$8._0;
          const _ay = _bind$8._1;
          const _az = _bind$8._2;
          const _bind$9 = _M0FP27mik1e806stlkit11render__svgN7projectS130(_env$2, triangle.b);
          const _bx = _bind$9._0;
          const _by = _bind$9._1;
          const _bz = _bind$9._2;
          const _bind$10 = _M0FP27mik1e806stlkit11render__svgN7projectS130(_env$2, triangle.c);
          const _cx = _bind$10._0;
          const _cy = _bind$10._1;
          const _cz = _bind$10._2;
          const cross = (_bx - _ax) * (_cy - _ay) - (_by - _ay) * (_cx - _ax);
          if (cross > 0) {
            break _L;
          }
          const normal = _M0MP27mik1e806stlkit8Triangle16computed__normal(triangle);
          let brightness = Math.abs(normal.x * light.x + normal.y * light.y + normal.z * light.z);
          brightness = 0.45 + 0.55 * brightness;
          const shade = _M0MPC16double6Double7to__int(brightness * 235);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rgb(");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, shade);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, shade);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, shade);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
          const fill = _string_builder.val;
          const depth = (_az + _bz + _cz) / 3;
          const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(24);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<polygon points=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _ax);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _ay);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _bx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _by);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _cx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _cy);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" ");
          const _tmp$24 = _string_builder$2.val;
          const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "fill=\"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, fill);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" stroke=\"");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, options.stroke);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" ");
          const _tmp$25 = _string_builder$3.val;
          const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(41);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "stroke-width=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, options.stroke_width);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" stroke-linejoin=\"round\"/>");
          _M0MPC15array5Array4pushGsE(faces, { _0: depth, _1: `${_tmp$24}${_tmp$25}${_string_builder$4.val}` });
          break _L;
        }
        _tmp$23 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array8sort__byGUdsEE(faces, (a, b) => a._0 < b._0 ? -1 : a._0 > b._0 ? 1 : 0);
    const body = [];
    const _bind$8 = faces.length;
    let _tmp$24 = 0;
    while (true) {
      const _ = _tmp$24;
      if (_ < _bind$8) {
        const face = faces[_];
        _M0MPC15array5Array4pushGsE(body, face._1);
        _tmp$24 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.width);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.height);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" width=\"");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.width);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" ");
    const _tmp$25 = _string_builder.val;
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "height=\"");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, options.height);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\">");
    return `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ${_tmp$25}${_string_builder$2.val}<rect width=\"100%\" height=\"100%\" fill=\"#f6f7f9\"/>${_M0MPC15array5Array4joinGsE(body, new _M0TPC16string10StringView(_M0FP27mik1e806stlkit11render__svgN7_2abindS1918, 0, _M0FP27mik1e806stlkit11render__svgN7_2abindS1918.length))}</svg>`;
  }
  function _M0MP27mik1e806stlkit8Triangle4area(self) {
    return _M0MP27mik1e806stlkit4Vec36length(_M0MP27mik1e806stlkit4Vec35cross(_M0MP27mik1e806stlkit4Vec33sub(self.b, self.a), _M0MP27mik1e806stlkit4Vec33sub(self.c, self.a))) / 2;
  }
  function _M0MP27mik1e806stlkit4Mesh6volume(self) {
    let total = 0;
    const _bind$3 = self.triangles;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const triangle = _bind$3[_];
        total = total + _M0MP27mik1e806stlkit8Triangle14signed__volume(triangle);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return Math.abs(total);
  }
  function _M0MP27mik1e806stlkit4Mesh13surface__area(self) {
    let total = 0;
    const _bind$3 = self.triangles;
    const _bind$4 = _bind$3.length;
    let _tmp$22 = 0;
    while (true) {
      const _ = _tmp$22;
      if (_ < _bind$4) {
        const triangle = _bind$3[_];
        total = total + _M0MP27mik1e806stlkit8Triangle4area(triangle);
        _tmp$22 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return total;
  }
  function _M0FP37mik1e806stlkit3web6decode(file_base64) {
    if (file_base64.length === 0) {
      return _M0FP37mik1e806stlkit3web6decodeN6constrS150;
    }
    let _try_err;
    _L: {
      const _bind$3 = _M0FPC28encoding6base6414decode_2einner(new _M0TPC16string10StringView(file_base64, 0, file_base64.length), false);
      let _tmp$22;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$22 = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGzsE2Ok(_tmp$22);
    }
    return _M0FP37mik1e806stlkit3web6decodeN6constrS151;
  }
  function _M0FP37mik1e806stlkit3web12format__name(data) {
    const _bind$3 = _M0FP27mik1e806stlkit14detect__format(data);
    switch (_bind$3) {
      case 1: {
        return "二进制 STL";
      }
      case 0: {
        return "ASCII STL";
      }
      case 2: {
        return "3MF";
      }
      default: {
        return "OBJ";
      }
    }
  }
  function _M0FP37mik1e806stlkit3web6round3(value) {
    const rounded = _M0MPC16double6Double5round(value * 1000) / 1000;
    return String(rounded);
  }
  function _M0FP37mik1e806stlkit3web14analyze__inner(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web6decode(file_base64);
    let data;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      data = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRPB5ArrayGsEsE3Err(_msg);
    }
    const _bind$4 = _M0FP27mik1e806stlkit11parse__mesh(data);
    let mesh;
    if (_bind$4.$tag === 1) {
      const _Ok = _bind$4;
      mesh = _Ok._0;
    } else {
      const _Err = _bind$4;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRPB5ArrayGsEsE3Err(_msg);
    }
    const check = _M0FP27mik1e806stlkit17validate__default(mesh);
    const lines = [];
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "格式|");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP37mik1e806stlkit3web12format__name(data));
    _M0MPC15array5Array4pushGsE(lines, _string_builder.val);
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "三角形|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, mesh.triangles.length);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$2.val);
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "顶点|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, check.raw_vertex_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$3.val);
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "去重顶点|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, check.unique_vertex_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$4.val);
    const _bind$5 = _M0MP27mik1e806stlkit4Mesh13bounding__box(mesh);
    if (_bind$5 === undefined) {
    } else {
      const _Some = _bind$5;
      const _box = _Some;
      const size = _M0MP27mik1e806stlkit4Aabb4size(_box);
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "包围盒|");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP37mik1e806stlkit3web6round3(size.x));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " × ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP37mik1e806stlkit3web6round3(size.y));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " × ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP37mik1e806stlkit3web6round3(size.z));
      _M0MPC15array5Array4pushGsE(lines, _string_builder$5.val);
    }
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "体积|");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP37mik1e806stlkit3web6round3(_M0MP27mik1e806stlkit4Mesh6volume(mesh)));
    _M0MPC15array5Array4pushGsE(lines, _string_builder$5.val);
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "表面积|");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$6, _M0FP37mik1e806stlkit3web6round3(_M0MP27mik1e806stlkit4Mesh13surface__area(mesh)));
    _M0MPC15array5Array4pushGsE(lines, _string_builder$6.val);
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "水密|");
    _M0MPB13StringBuilder13write__objectGbE(_string_builder$7, check.boundary_edge_count === 0 && check.non_manifold_edge_count === 0);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$7.val);
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "边界边|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, check.boundary_edge_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$8.val);
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "非流形边|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, check.non_manifold_edge_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$9.val);
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, "退化面|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, check.degenerate_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$10.val);
    const _string_builder$11 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, "错误法线|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$11, check.wrong_normal_count);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$11.val);
    const winding = _M0FP27mik1e806stlkit23check__winding__default(mesh);
    const _string_builder$12 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$12, "绕向反了|");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$12, winding.flipped_faces);
    _M0MPC15array5Array4pushGsE(lines, _string_builder$12.val);
    return new _M0DTPC16result6ResultGRPB5ArrayGsEsE2Ok(lines);
  }
  function _M0FP37mik1e806stlkit3web7analyze(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web14analyze__inner(file_base64);
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      const _lines = _Ok._0;
      return _M0MPC15array5Array4joinGsE(_lines, new _M0TPC16string10StringView(_M0FP37mik1e806stlkit3web7analyzeN7_2abindS81, 0, _M0FP37mik1e806stlkit3web7analyzeN7_2abindS81.length));
    } else {
      return "";
    }
  }
  function _M0FP37mik1e806stlkit3web14analyze__error(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web14analyze__inner(file_base64);
    if (_bind$3.$tag === 1) {
      return "";
    } else {
      const _Err = _bind$3;
      return _Err._0;
    }
  }
  function _M0FP37mik1e806stlkit3web13analyze__mesh(file_base64) {
    const data = _M0FP37mik1e806stlkit3web6decode(file_base64);
    if (data.$tag === 0) {
      const _Err = data;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit4MeshsE3Err(_msg);
    } else {
      const _Ok = data;
      const _data = _Ok._0;
      return _M0FP27mik1e806stlkit11parse__mesh(_data);
    }
  }
  function _M0FP37mik1e806stlkit3web16preview__options() {
    const _bind$3 = _M0MP27mik1e806stlkit14PreviewOptions7defaultN6recordS2030;
    return new _M0TP27mik1e806stlkit14PreviewOptions(640, 480, _bind$3.yaw, _bind$3.pitch, _bind$3.stroke, _bind$3.stroke_width);
  }
  function _M0FP37mik1e806stlkit3web7preview(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web13analyze__mesh(file_base64);
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      const _mesh = _Ok._0;
      return _M0FP27mik1e806stlkit11render__svg(_mesh, _M0FP37mik1e806stlkit3web16preview__options());
    } else {
      return "";
    }
  }
  function _M0FP37mik1e806stlkit3web10repair__of(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web13analyze__mesh(file_base64);
    let mesh;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      mesh = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _msg = _Err._0;
      return new _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE3Err(_msg);
    }
    return new _M0DTPC16result6ResultGRP27mik1e806stlkit12RepairResultsE2Ok(_M0FP27mik1e806stlkit6repair(mesh, _M0MP27mik1e806stlkit13RepairOptions7default()));
  }
  function _M0FP37mik1e806stlkit3web11fix__report(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web10repair__of(file_base64);
    if (_bind$3.$tag === 0) {
      return "";
    } else {
      const _Ok = _bind$3;
      const _result = _Ok._0;
      const after = _M0FP27mik1e806stlkit17validate__default(_result.mesh);
      const lines = [];
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "可修复|");
      _M0MPB13StringBuilder13write__objectGbE(_string_builder, _M0MP27mik1e806stlkit12RepairResult7changed(_result));
      _M0MPC15array5Array4pushGsE(lines, _string_builder.val);
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "删退化面|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _result.removed_degenerate);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$2.val);
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "删重复面|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, _result.removed_duplicates);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$3.val);
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "补洞新增|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, _result.added_triangles);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$4.val);
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "重算法线|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, _result.recomputed_normals);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$5.val);
      const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "翻转绕向|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, _result.flipped_faces);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$6.val);
      const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "修复后体积|");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$7, _M0FP37mik1e806stlkit3web6round3(_M0MP27mik1e806stlkit4Mesh6volume(_result.mesh)));
      _M0MPC15array5Array4pushGsE(lines, _string_builder$7.val);
      const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "修复后水密|");
      _M0MPB13StringBuilder13write__objectGbE(_string_builder$8, after.boundary_edge_count === 0 && after.non_manifold_edge_count === 0);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$8.val);
      const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "修复后边界边|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, after.boundary_edge_count);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$9.val);
      const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, "修复后三角形|");
      const _p = _result.mesh;
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, _p.triangles.length);
      _M0MPC15array5Array4pushGsE(lines, _string_builder$10.val);
      return _M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_M0FP37mik1e806stlkit3web11fix__reportN7_2abindS124, 0, _M0FP37mik1e806stlkit3web11fix__reportN7_2abindS124.length));
    }
  }
  function _M0FP37mik1e806stlkit3web10fixed__stl(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web10repair__of(file_base64);
    if (_bind$3.$tag === 0) {
      return "";
    } else {
      const _Ok = _bind$3;
      const _result = _Ok._0;
      const _bind$4 = _M0FP27mik1e806stlkit18write__stl__binary(_result.mesh);
      return _M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind$4, 0, _bind$4.length), true);
    }
  }
  function _M0FP37mik1e806stlkit3web14fixed__preview(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web10repair__of(file_base64);
    if (_bind$3.$tag === 0) {
      return "";
    } else {
      const _Ok = _bind$3;
      const _result = _Ok._0;
      return _M0FP27mik1e806stlkit11render__svg(_result.mesh, _M0FP37mik1e806stlkit3web16preview__options());
    }
  }
  function _M0FP37mik1e806stlkit3web10fix__error(file_base64) {
    const _bind$3 = _M0FP37mik1e806stlkit3web10repair__of(file_base64);
    if (_bind$3.$tag === 1) {
      return "";
    } else {
      const _Err = _bind$3;
      return _Err._0;
    }
  }
  globalThis.analyze = _M0FP37mik1e806stlkit3web7analyze;
  globalThis.analyze_error = _M0FP37mik1e806stlkit3web14analyze__error;
  globalThis.preview = _M0FP37mik1e806stlkit3web7preview;
  globalThis.fix_report = _M0FP37mik1e806stlkit3web11fix__report;
  globalThis.fixed_stl = _M0FP37mik1e806stlkit3web10fixed__stl;
  globalThis.fixed_preview = _M0FP37mik1e806stlkit3web14fixed__preview;
  globalThis.fix_error = _M0FP37mik1e806stlkit3web10fix__error;
})();
