/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.PushTransactionReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.qrl.Transaction');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qrl.PushTransactionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qrl.PushTransactionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.PushTransactionReq.displayName = 'proto.qrl.PushTransactionReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qrl.PushTransactionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.PushTransactionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.PushTransactionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.PushTransactionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionSigned: (f = msg.getTransactionSigned()) && proto.qrl.Transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qrl.PushTransactionReq}
 */
proto.qrl.PushTransactionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.PushTransactionReq;
  return proto.qrl.PushTransactionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.PushTransactionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.PushTransactionReq}
 */
proto.qrl.PushTransactionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qrl.Transaction;
      reader.readMessage(value,proto.qrl.Transaction.deserializeBinaryFromReader);
      msg.setTransactionSigned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qrl.PushTransactionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.PushTransactionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.PushTransactionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.PushTransactionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionSigned();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qrl.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional Transaction transaction_signed = 1;
 * @return {?proto.qrl.Transaction}
 */
proto.qrl.PushTransactionReq.prototype.getTransactionSigned = function() {
  return /** @type{?proto.qrl.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.qrl.Transaction, 1));
};


/** @param {?proto.qrl.Transaction|undefined} value */
proto.qrl.PushTransactionReq.prototype.setTransactionSigned = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qrl.PushTransactionReq.prototype.clearTransactionSigned = function() {
  this.setTransactionSigned(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.PushTransactionReq.prototype.hasTransactionSigned = function() {
  return jspb.Message.getField(this, 1) != null;
};

