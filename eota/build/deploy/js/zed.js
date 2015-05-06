var $JSCompiler_prototypeAlias$$, $goog$$ = $goog$$ || {}, $goog$global$$ = this;
function $goog$isDef$$($val$$) {
  return void 0 !== $val$$;
}
function $goog$exportPath_$$($name$$49$$, $opt_object$$) {
  var $parts$$ = $name$$49$$.split("."), $cur$$ = $goog$global$$;
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $goog$isDef$$($opt_object$$) ? $cur$$[$part$$] = $opt_object$$ : $cur$$[$part$$] ? $cur$$ = $cur$$[$part$$] : $cur$$ = $cur$$[$part$$] = {};
  }
}
function $goog$getObjectByName$$($name$$58_parts$$1$$) {
  $name$$58_parts$$1$$ = $name$$58_parts$$1$$.split(".");
  for (var $cur$$1$$ = $goog$global$$, $part$$1$$;$part$$1$$ = $name$$58_parts$$1$$.shift();) {
    if (null != $cur$$1$$[$part$$1$$]) {
      $cur$$1$$ = $cur$$1$$[$part$$1$$];
    } else {
      return null;
    }
  }
  return $cur$$1$$;
}
function $goog$nullFunction$$() {
}
function $goog$typeOf$$($value$$64$$) {
  var $s$$2$$ = typeof $value$$64$$;
  if ("object" == $s$$2$$) {
    if ($value$$64$$) {
      if ($value$$64$$ instanceof Array) {
        return "array";
      }
      if ($value$$64$$ instanceof Object) {
        return $s$$2$$;
      }
      var $className$$3$$ = Object.prototype.toString.call($value$$64$$);
      if ("[object Window]" == $className$$3$$) {
        return "object";
      }
      if ("[object Array]" == $className$$3$$ || "number" == typeof $value$$64$$.length && "undefined" != typeof $value$$64$$.splice && "undefined" != typeof $value$$64$$.propertyIsEnumerable && !$value$$64$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$3$$ || "undefined" != typeof $value$$64$$.call && "undefined" != typeof $value$$64$$.propertyIsEnumerable && !$value$$64$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$2$$ && "undefined" == typeof $value$$64$$.call) {
      return "object";
    }
  }
  return $s$$2$$;
}
function $goog$isArray$$($val$$3$$) {
  return "array" == $goog$typeOf$$($val$$3$$);
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$79$$ = $goog$typeOf$$($val$$4$$);
  return "array" == $type$$79$$ || "object" == $type$$79$$ && "number" == typeof $val$$4$$.length;
}
function $goog$isString$$($val$$6$$) {
  return "string" == typeof $val$$6$$;
}
function $goog$isNumber$$($val$$8$$) {
  return "number" == typeof $val$$8$$;
}
function $goog$isFunction$$($val$$9$$) {
  return "function" == $goog$typeOf$$($val$$9$$);
}
function $goog$isObject$$($val$$10$$) {
  var $type$$80$$ = typeof $val$$10$$;
  return "object" == $type$$80$$ && null != $val$$10$$ || "function" == $type$$80$$;
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$42$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$43$$) {
  if (!$fn$$1$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments);
  };
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$44$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
function $goog$partial$$($fn$$3$$, $var_args$$45$$) {
  var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = $args$$3$$.slice();
    $newArgs$$1$$.push.apply($newArgs$$1$$, arguments);
    return $fn$$3$$.apply(this, $newArgs$$1$$);
  };
}
var $goog$now$$ = Date.now || function() {
  return +new Date;
};
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.$base$ = function $$childCtor$$$$base$$($me$$, $methodName$$, $var_args$$46$$) {
    for (var $args$$4$$ = Array(arguments.length - 2), $i$$9$$ = 2;$i$$9$$ < arguments.length;$i$$9$$++) {
      $args$$4$$[$i$$9$$ - 2] = arguments[$i$$9$$];
    }
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$4$$);
  };
}
;function $mugd$bindings$dragndrop$addDragNDrop$$() {
  function $toggleDragTarget$$($isTarget$$, $event$$1$$) {
    var $draggableElement$$ = $event$$1$$.relatedTarget, $dropzoneElement$$ = $event$$1$$.target;
    $isTarget$$ ? ($dropzoneElement$$.classList.add("mugd-drag-target"), $draggableElement$$.classList.add("mugd-can-drop")) : ($dropzoneElement$$.classList.remove("mugd-drag-target"), $draggableElement$$.classList.remove("mugd-can-drop"));
  }
  function $translateElement$$($target$$49$$, $x$$57$$, $y$$39$$) {
    $target$$49$$.style.webkitTransform = $target$$49$$.style.transform = "translate(" + $x$$57$$ + "px, " + $y$$39$$ + "px)";
    $target$$49$$.setAttribute("data-x", $x$$57$$);
    $target$$49$$.setAttribute("data-y", $y$$39$$);
  }
  ko.bindingHandlers.dragSource = {$init$:function $ko$bindingHandlers$dragSource$$init$$($element$$9$$, $valueAccessor$$) {
    var $interactable$$ = interact($element$$9$$).draggable({$c$:function() {
      $element$$9$$.classList.add("mugd-dragged");
    }, $b$:function($event$$3_y$$40$$) {
      var $target$$50$$ = $event$$3_y$$40$$.target, $x$$58$$ = (parseFloat($target$$50$$.getAttribute("data-x")) || 0) + $event$$3_y$$40$$.$dx$;
      $event$$3_y$$40$$ = (parseFloat($target$$50$$.getAttribute("data-y")) || 0) + $event$$3_y$$40$$.$dy$;
      $translateElement$$($target$$50$$, $x$$58$$, $event$$3_y$$40$$);
    }, $a$:function($event$$4$$) {
      $translateElement$$($event$$4$$.target, 0, 0);
      $element$$9$$.classList.remove("mugd-dragged");
    }}).inertia(!0), $value$$65_valueUnwrapped$$ = $valueAccessor$$(), $value$$65_valueUnwrapped$$ = ko.unwrap($value$$65_valueUnwrapped$$);
    $interactable$$.data = $value$$65_valueUnwrapped$$;
    ko.utils.domNodeDisposal.addDisposeCallback($element$$9$$, function() {
      $interactable$$.data = null;
    });
  }};
  ko.bindingHandlers.dragTarget = {$init$:function $ko$bindingHandlers$dragTarget$$init$$($element$$10$$, $valueAccessor$$1$$) {
    var $value$$66$$ = $valueAccessor$$1$$(), $target$$51$$ = ko.unwrap($value$$66$$);
    if (!$target$$51$$.$canDrop$ || !$target$$51$$.$doDrop$) {
      throw console.log($target$$51$$), "target must implement mugd.bindings.dragndrop.IDropZone";
    }
    var $interactable$$1$$ = interact($element$$10$$).dropzone({$overlap$:.75, $ondragenter$:function($event$$5$$) {
      $toggleDragTarget$$(!0, $event$$5$$);
    }, $ondragleave$:function($event$$6$$) {
      $toggleDragTarget$$(!1, $event$$6$$);
    }, $ondropdeactivate$:function($event$$7$$) {
      $toggleDragTarget$$(!1, $event$$7$$);
    }, $ondrop$:function($draggable_event$$8$$) {
      $draggable_event$$8$$ = $draggable_event$$8$$.draggable;
      $draggable_event$$8$$.data && $target$$51$$.$canDrop$($draggable_event$$8$$.data) && $target$$51$$.$doDrop$($draggable_event$$8$$.data);
    }}), $baseDropChecker$$ = $interactable$$1$$.dropCheck;
    $interactable$$1$$.dropChecker(function($event$$9$$, $interactableTarget$$, $dragElement$$, $rect$$) {
      return $baseDropChecker$$.call($interactable$$1$$, $event$$9$$, $interactableTarget$$, $dragElement$$, $rect$$) && $target$$51$$.$canDrop$($interactableTarget$$.data);
    });
  }};
}
;function $mugd$utils$SimplexNoise$$($r$$) {
  void 0 == $r$$ && ($r$$ = Math);
  this.$b$ = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
  this.$c$ = [];
  for (var $i$$12$$ = 0;256 > $i$$12$$;$i$$12$$++) {
    this.$c$[$i$$12$$] = Math.floor(256 * $r$$.random());
  }
  this.$a$ = [];
  for ($i$$12$$ = 0;512 > $i$$12$$;$i$$12$$++) {
    this.$a$[$i$$12$$] = this.$c$[$i$$12$$ & 255];
  }
}
function $JSCompiler_StaticMethods_dot$$($g$$, $x$$59$$, $y$$41$$) {
  return $g$$[0] * $x$$59$$ + $g$$[1] * $y$$41$$;
}
;var $goog$dom$defaultDomHelper_$$;
function $goog$debug$Error$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$string$subs$$($str$$14$$, $var_args$$48$$) {
  for (var $splitParts$$ = $str$$14$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}
var $goog$string$trim$$ = String.prototype.trim ? function($str$$28$$) {
  return $str$$28$$.trim();
} : function($str$$29$$) {
  return $str$$29$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function $goog$string$htmlEscape$$($str$$35$$) {
  if (!$goog$string$ALL_RE_$$.test($str$$35$$)) {
    return $str$$35$$;
  }
  -1 != $str$$35$$.indexOf("&") && ($str$$35$$ = $str$$35$$.replace($goog$string$AMP_RE_$$, "&amp;"));
  -1 != $str$$35$$.indexOf("<") && ($str$$35$$ = $str$$35$$.replace($goog$string$LT_RE_$$, "&lt;"));
  -1 != $str$$35$$.indexOf(">") && ($str$$35$$ = $str$$35$$.replace($goog$string$GT_RE_$$, "&gt;"));
  -1 != $str$$35$$.indexOf('"') && ($str$$35$$ = $str$$35$$.replace($goog$string$QUOT_RE_$$, "&quot;"));
  -1 != $str$$35$$.indexOf("'") && ($str$$35$$ = $str$$35$$.replace($goog$string$SINGLE_QUOTE_RE_$$, "&#39;"));
  -1 != $str$$35$$.indexOf("\x00") && ($str$$35$$ = $str$$35$$.replace($goog$string$NULL_RE_$$, "&#0;"));
  return $str$$35$$;
}
var $goog$string$AMP_RE_$$ = /&/g, $goog$string$LT_RE_$$ = /</g, $goog$string$GT_RE_$$ = />/g, $goog$string$QUOT_RE_$$ = /"/g, $goog$string$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$NULL_RE_$$ = /\x00/g, $goog$string$ALL_RE_$$ = /[\x00&<>"']/;
function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
  return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
}
Math.random();
function $goog$string$toTitleCase$$($str$$54$$) {
  var $delimiters$$ = $goog$isString$$(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return $str$$54$$.replace(new RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
}
;function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$doAssertFailure_$$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$18$$ = "Assertion failed";
  if ($givenMessage$$) {
    var $message$$18$$ = $message$$18$$ + (": " + $givenMessage$$), $args$$6$$ = $givenArgs$$
  } else {
    $defaultMessage$$ && ($message$$18$$ += ": " + $defaultMessage$$, $args$$6$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$$18$$, $args$$6$$ || []);
}
function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$50$$) {
  $condition$$1$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$$8$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$fail$$($opt_message$$9$$, $var_args$$51$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$$9$$ ? ": " + $opt_message$$9$$ : ""), Array.prototype.slice.call(arguments, 1));
}
function $goog$asserts$assertString$$($value$$70$$, $opt_message$$11$$, $var_args$$53$$) {
  $goog$isString$$($value$$70$$) || $goog$asserts$doAssertFailure_$$("Expected string but got %s: %s.", [$goog$typeOf$$($value$$70$$), $value$$70$$], $opt_message$$11$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertFunction$$($value$$71$$, $opt_message$$12$$, $var_args$$54$$) {
  $goog$isFunction$$($value$$71$$) || $goog$asserts$doAssertFailure_$$("Expected function but got %s: %s.", [$goog$typeOf$$($value$$71$$), $value$$71$$], $opt_message$$12$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertObject$$($value$$72$$, $opt_message$$13$$, $var_args$$55$$) {
  $goog$isObject$$($value$$72$$) || $goog$asserts$doAssertFailure_$$("Expected object but got %s: %s.", [$goog$typeOf$$($value$$72$$), $value$$72$$], $opt_message$$13$$, Array.prototype.slice.call(arguments, 2));
}
;var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1E6 * Math.random() | 0), $goog$events$ListenableKey$counter_$$ = 0;
function $goog$events$Listener$$($listener$$42$$, $src$$7$$, $type$$83$$, $capture$$, $opt_handler$$) {
  this.$listener$ = $listener$$42$$;
  this.$a$ = null;
  this.src = $src$$7$$;
  this.type = $type$$83$$;
  this.$capture$ = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$goog_events_ListenableKey_prototype$key$ = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = this.$callOnce$ = !1;
}
function $JSCompiler_StaticMethods_markAsRemoved$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$removed$ = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$listener$ = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$a$ = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
}
;function $goog$object$forEach$$($obj$$43$$, $f$$, $opt_obj$$2$$) {
  for (var $key$$20$$ in $obj$$43$$) {
    $f$$.call($opt_obj$$2$$, $obj$$43$$[$key$$20$$], $key$$20$$, $obj$$43$$);
  }
}
function $goog$object$map$$($obj$$45$$, $f$$2$$, $opt_obj$$4$$) {
  var $res$$1$$ = {}, $key$$22$$;
  for ($key$$22$$ in $obj$$45$$) {
    $res$$1$$[$key$$22$$] = $f$$2$$.call($opt_obj$$4$$, $obj$$45$$[$key$$22$$], $key$$22$$, $obj$$45$$);
  }
  return $res$$1$$;
}
function $goog$object$some$$($obj$$46$$) {
  var $f$$3$$ = $goog$functions$identity$$, $key$$23$$;
  for ($key$$23$$ in $obj$$46$$) {
    if ($f$$3$$.call(void 0, $obj$$46$$[$key$$23$$], $key$$23$$, $obj$$46$$)) {
      return !0;
    }
  }
  return !1;
}
function $goog$object$every$$($obj$$47$$, $f$$4$$, $opt_obj$$6$$) {
  for (var $key$$24$$ in $obj$$47$$) {
    if (!$f$$4$$.call($opt_obj$$6$$, $obj$$47$$[$key$$24$$], $key$$24$$, $obj$$47$$)) {
      return !1;
    }
  }
  return !0;
}
function $goog$object$getCount$$($obj$$48$$) {
  var $rv$$1$$ = 0, $key$$25$$;
  for ($key$$25$$ in $obj$$48$$) {
    $rv$$1$$++;
  }
  return $rv$$1$$;
}
function $goog$object$getValues$$($obj$$52$$) {
  var $res$$2$$ = [], $i$$20$$ = 0, $key$$28$$;
  for ($key$$28$$ in $obj$$52$$) {
    $res$$2$$[$i$$20$$++] = $obj$$52$$[$key$$28$$];
  }
  return $res$$2$$;
}
function $goog$object$getKeys$$($obj$$53$$) {
  var $res$$3$$ = [], $i$$21$$ = 0, $key$$29$$;
  for ($key$$29$$ in $obj$$53$$) {
    $res$$3$$[$i$$21$$++] = $key$$29$$;
  }
  return $res$$3$$;
}
function $goog$object$unsafeClone$$($obj$$68$$) {
  var $clone$$1_type$$84$$ = $goog$typeOf$$($obj$$68$$);
  if ("object" == $clone$$1_type$$84$$ || "array" == $clone$$1_type$$84$$) {
    if ($obj$$68$$.clone) {
      return $obj$$68$$.clone();
    }
    var $clone$$1_type$$84$$ = "array" == $clone$$1_type$$84$$ ? [] : {}, $key$$42$$;
    for ($key$$42$$ in $obj$$68$$) {
      $clone$$1_type$$84$$[$key$$42$$] = $goog$object$unsafeClone$$($obj$$68$$[$key$$42$$]);
    }
    return $clone$$1_type$$84$$;
  }
  return $obj$$68$$;
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$52$$, $var_args$$61$$) {
  for (var $key$$44$$, $source$$7$$, $i$$24$$ = 1;$i$$24$$ < arguments.length;$i$$24$$++) {
    $source$$7$$ = arguments[$i$$24$$];
    for ($key$$44$$ in $source$$7$$) {
      $target$$52$$[$key$$44$$] = $source$$7$$[$key$$44$$];
    }
    for (var $j$$3$$ = 0;$j$$3$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$3$$++) {
      $key$$44$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$3$$], Object.prototype.hasOwnProperty.call($source$$7$$, $key$$44$$) && ($target$$52$$[$key$$44$$] = $source$$7$$[$key$$44$$]);
    }
  }
}
function $goog$object$createSet$$($var_args$$63$$) {
  var $argLength$$1$$ = arguments.length;
  if (1 == $argLength$$1$$ && $goog$isArray$$(arguments[0])) {
    return $goog$object$createSet$$.apply(null, arguments[0]);
  }
  for (var $rv$$4$$ = {}, $i$$26$$ = 0;$i$$26$$ < $argLength$$1$$;$i$$26$$++) {
    $rv$$4$$[arguments[$i$$26$$]] = !0;
  }
  return $rv$$4$$;
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$14$$, $obj$$72$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$(null != $arr$$14$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$14$$, $obj$$72$$, $opt_fromIndex$$6$$);
} : function($arr$$15$$, $obj$$73$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) {
  $fromIndex$$2_i$$27_opt_fromIndex$$7$$ = null == $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? Math.max(0, $arr$$15$$.length + $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
  if ($goog$isString$$($arr$$15$$)) {
    return $goog$isString$$($obj$$73$$) && 1 == $obj$$73$$.length ? $arr$$15$$.indexOf($obj$$73$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : -1;
  }
  for (;$fromIndex$$2_i$$27_opt_fromIndex$$7$$ < $arr$$15$$.length;$fromIndex$$2_i$$27_opt_fromIndex$$7$$++) {
    if ($fromIndex$$2_i$$27_opt_fromIndex$$7$$ in $arr$$15$$ && $arr$$15$$[$fromIndex$$2_i$$27_opt_fromIndex$$7$$] === $obj$$73$$) {
      return $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$18$$, $f$$8$$, $opt_obj$$7$$) {
  $goog$asserts$assert$$(null != $arr$$18$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$18$$, $f$$8$$, $opt_obj$$7$$);
} : function($arr$$19$$, $f$$9$$, $opt_obj$$8$$) {
  for (var $l$$2$$ = $arr$$19$$.length, $arr2$$ = $goog$isString$$($arr$$19$$) ? $arr$$19$$.split("") : $arr$$19$$, $i$$29$$ = 0;$i$$29$$ < $l$$2$$;$i$$29$$++) {
    $i$$29$$ in $arr2$$ && $f$$9$$.call($opt_obj$$8$$, $arr2$$[$i$$29$$], $i$$29$$, $arr$$19$$);
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$21$$, $f$$11$$, $opt_obj$$10$$) {
  $goog$asserts$assert$$(null != $arr$$21$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$21$$, $f$$11$$, $opt_obj$$10$$);
} : function($arr$$22$$, $f$$12$$, $opt_obj$$11$$) {
  for (var $l$$4$$ = $arr$$22$$.length, $res$$5$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$22$$) ? $arr$$22$$.split("") : $arr$$22$$, $i$$31$$ = 0;$i$$31$$ < $l$$4$$;$i$$31$$++) {
    if ($i$$31$$ in $arr2$$2$$) {
      var $val$$15$$ = $arr2$$2$$[$i$$31$$];
      $f$$12$$.call($opt_obj$$11$$, $val$$15$$, $i$$31$$, $arr$$22$$) && ($res$$5$$[$resLength$$++] = $val$$15$$);
    }
  }
  return $res$$5$$;
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$23$$, $f$$13$$, $opt_obj$$12$$) {
  $goog$asserts$assert$$(null != $arr$$23$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$23$$, $f$$13$$, $opt_obj$$12$$);
} : function($arr$$24$$, $f$$14$$, $opt_obj$$13$$) {
  for (var $l$$5$$ = $arr$$24$$.length, $res$$6$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$24$$) ? $arr$$24$$.split("") : $arr$$24$$, $i$$32$$ = 0;$i$$32$$ < $l$$5$$;$i$$32$$++) {
    $i$$32$$ in $arr2$$3$$ && ($res$$6$$[$i$$32$$] = $f$$14$$.call($opt_obj$$13$$, $arr2$$3$$[$i$$32$$], $i$$32$$, $arr$$24$$));
  }
  return $res$$6$$;
}, $goog$array$reduce$$ = $goog$array$ARRAY_PROTOTYPE_$$.reduce ? function($arr$$25$$, $f$$15$$, $val$$16$$, $opt_obj$$14$$) {
  $goog$asserts$assert$$(null != $arr$$25$$.length);
  $opt_obj$$14$$ && ($f$$15$$ = $goog$bind$$($f$$15$$, $opt_obj$$14$$));
  return $goog$array$ARRAY_PROTOTYPE_$$.reduce.call($arr$$25$$, $f$$15$$, $val$$16$$);
} : function($arr$$26$$, $f$$16$$, $val$$17$$, $opt_obj$$15$$) {
  var $rval$$ = $val$$17$$;
  $goog$array$forEach$$($arr$$26$$, function($val$$18$$, $index$$48$$) {
    $rval$$ = $f$$16$$.call($opt_obj$$15$$, $rval$$, $val$$18$$, $index$$48$$, $arr$$26$$);
  });
  return $rval$$;
}, $goog$array$some$$ = $goog$array$ARRAY_PROTOTYPE_$$.some ? function($arr$$29$$, $f$$19$$, $opt_obj$$18$$) {
  $goog$asserts$assert$$(null != $arr$$29$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.some.call($arr$$29$$, $f$$19$$, $opt_obj$$18$$);
} : function($arr$$30$$, $f$$20$$, $opt_obj$$19$$) {
  for (var $l$$6$$ = $arr$$30$$.length, $arr2$$4$$ = $goog$isString$$($arr$$30$$) ? $arr$$30$$.split("") : $arr$$30$$, $i$$33$$ = 0;$i$$33$$ < $l$$6$$;$i$$33$$++) {
    if ($i$$33$$ in $arr2$$4$$ && $f$$20$$.call($opt_obj$$19$$, $arr2$$4$$[$i$$33$$], $i$$33$$, $arr$$30$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$31$$, $f$$21$$, $opt_obj$$20$$) {
  $goog$asserts$assert$$(null != $arr$$31$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$31$$, $f$$21$$, $opt_obj$$20$$);
} : function($arr$$32$$, $f$$22$$, $opt_obj$$21$$) {
  for (var $l$$7$$ = $arr$$32$$.length, $arr2$$5$$ = $goog$isString$$($arr$$32$$) ? $arr$$32$$.split("") : $arr$$32$$, $i$$34$$ = 0;$i$$34$$ < $l$$7$$;$i$$34$$++) {
    if ($i$$34$$ in $arr2$$5$$ && !$f$$22$$.call($opt_obj$$21$$, $arr2$$5$$[$i$$34$$], $i$$34$$, $arr$$32$$)) {
      return !1;
    }
  }
  return !0;
};
function $goog$array$find$$($arr$$35$$, $f$$24$$) {
  var $i$$35_l$$inline_68$$;
  a: {
    $i$$35_l$$inline_68$$ = $arr$$35$$.length;
    for (var $arr2$$inline_69$$ = $goog$isString$$($arr$$35$$) ? $arr$$35$$.split("") : $arr$$35$$, $i$$inline_70$$ = 0;$i$$inline_70$$ < $i$$35_l$$inline_68$$;$i$$inline_70$$++) {
      if ($i$$inline_70$$ in $arr2$$inline_69$$ && $f$$24$$.call(void 0, $arr2$$inline_69$$[$i$$inline_70$$], $i$$inline_70$$, $arr$$35$$)) {
        $i$$35_l$$inline_68$$ = $i$$inline_70$$;
        break a;
      }
    }
    $i$$35_l$$inline_68$$ = -1;
  }
  return 0 > $i$$35_l$$inline_68$$ ? null : $goog$isString$$($arr$$35$$) ? $arr$$35$$.charAt($i$$35_l$$inline_68$$) : $arr$$35$$[$i$$35_l$$inline_68$$];
}
function $goog$array$remove$$($arr$$46$$, $obj$$80$$) {
  var $i$$41$$ = $goog$array$indexOf$$($arr$$46$$, $obj$$80$$), $rv$$5$$;
  if ($rv$$5$$ = 0 <= $i$$41$$) {
    $goog$asserts$assert$$(null != $arr$$46$$.length), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$46$$, $i$$41$$, 1);
  }
  return $rv$$5$$;
}
function $goog$array$concat$$($var_args$$64$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments);
}
function $goog$array$extend$$($arr1$$, $var_args$$66$$) {
  for (var $i$$45$$ = 1;$i$$45$$ < arguments.length;$i$$45$$++) {
    var $arr2$$8$$ = arguments[$i$$45$$];
    if ($goog$isArrayLike$$($arr2$$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$$4$$ = 0;$j$$4$$ < $len2$$;$j$$4$$++) {
        $arr1$$[$len1$$ + $j$$4$$] = $arr2$$8$$[$j$$4$$];
      }
    } else {
      $arr1$$.push($arr2$$8$$);
    }
  }
}
function $goog$array$slice$$($arr$$51$$, $start$$7$$, $opt_end$$13$$) {
  $goog$asserts$assert$$(null != $arr$$51$$.length);
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$51$$, $start$$7$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$51$$, $start$$7$$, $opt_end$$13$$);
}
function $goog$array$flatten$$($var_args$$68$$) {
  for (var $result$$3$$ = [], $i$$53$$ = 0;$i$$53$$ < arguments.length;$i$$53$$++) {
    var $element$$13$$ = arguments[$i$$53$$];
    if ($goog$isArray$$($element$$13$$)) {
      for (var $c$$1$$ = 0;$c$$1$$ < $element$$13$$.length;$c$$1$$ += 8192) {
        for (var $chunk_recurseResult$$ = $goog$array$slice$$($element$$13$$, $c$$1$$, $c$$1$$ + 8192), $chunk_recurseResult$$ = $goog$array$flatten$$.apply(null, $chunk_recurseResult$$), $r$$1$$ = 0;$r$$1$$ < $chunk_recurseResult$$.length;$r$$1$$++) {
          $result$$3$$.push($chunk_recurseResult$$[$r$$1$$]);
        }
      }
    } else {
      $result$$3$$.push($element$$13$$);
    }
  }
  return $result$$3$$;
}
function $goog$array$shuffle$$($arr$$64$$, $opt_randFn$$) {
  for (var $randFn$$ = $opt_randFn$$ || Math.random, $i$$55$$ = $arr$$64$$.length - 1;0 < $i$$55$$;$i$$55$$--) {
    var $j$$6$$ = Math.floor($randFn$$() * ($i$$55$$ + 1)), $tmp$$ = $arr$$64$$[$i$$55$$];
    $arr$$64$$[$i$$55$$] = $arr$$64$$[$j$$6$$];
    $arr$$64$$[$j$$6$$] = $tmp$$;
  }
}
;function $goog$events$ListenerMap$$($src$$8$$) {
  this.src = $src$$8$$;
  this.$a$ = {};
  this.$b$ = 0;
}
$goog$events$ListenerMap$$.prototype.add = function $$goog$events$ListenerMap$$$$add$($listenerArray_type$$86$$, $listener$$43_listenerObj$$, $callOnce$$, $opt_useCapture$$37$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$$86$$.toString();
  $listenerArray_type$$86$$ = this.$a$[$typeStr$$];
  $listenerArray_type$$86$$ || ($listenerArray_type$$86$$ = this.$a$[$typeStr$$] = [], this.$b$++);
  var $index$$57$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$$86$$, $listener$$43_listenerObj$$, $opt_useCapture$$37$$, $opt_listenerScope$$);
  -1 < $index$$57$$ ? ($listener$$43_listenerObj$$ = $listenerArray_type$$86$$[$index$$57$$], $callOnce$$ || ($listener$$43_listenerObj$$.$callOnce$ = !1)) : ($listener$$43_listenerObj$$ = new $goog$events$Listener$$($listener$$43_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$$37$$, $opt_listenerScope$$), $listener$$43_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$$86$$.push($listener$$43_listenerObj$$));
  return $listener$$43_listenerObj$$;
};
$goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$$87_typeStr$$1$$, $index$$58_listener$$44$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$) {
  $type$$87_typeStr$$1$$ = $type$$87_typeStr$$1$$.toString();
  if (!($type$$87_typeStr$$1$$ in this.$a$)) {
    return !1;
  }
  var $listenerArray$$1$$ = this.$a$[$type$$87_typeStr$$1$$];
  $index$$58_listener$$44$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$1$$, $index$$58_listener$$44$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$);
  return -1 < $index$$58_listener$$44$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$1$$[$index$$58_listener$$44$$]), $goog$asserts$assert$$(null != $listenerArray$$1$$.length), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($listenerArray$$1$$, $index$$58_listener$$44$$, 1), 0 == $listenerArray$$1$$.length && (delete this.$a$[$type$$87_typeStr$$1$$], this.$b$--), !0) : !1;
};
function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$$45$$) {
  var $type$$88$$ = $listener$$45$$.type;
  if (!($type$$88$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$a$)) {
    return !1;
  }
  var $removed$$ = $goog$array$remove$$($JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$88$$], $listener$$45$$);
  $removed$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$$45$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$88$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$88$$], $JSCompiler_StaticMethods_removeByKey$self$$.$b$--));
  return $removed$$;
}
$goog$events$ListenerMap$$.prototype.removeAll = function $$goog$events$ListenerMap$$$$removeAll$($opt_type$$7_typeStr$$2$$) {
  $opt_type$$7_typeStr$$2$$ = $opt_type$$7_typeStr$$2$$ && $opt_type$$7_typeStr$$2$$.toString();
  var $count$$12$$ = 0, $type$$89$$;
  for ($type$$89$$ in this.$a$) {
    if (!$opt_type$$7_typeStr$$2$$ || $type$$89$$ == $opt_type$$7_typeStr$$2$$) {
      for (var $listenerArray$$2$$ = this.$a$[$type$$89$$], $i$$56$$ = 0;$i$$56$$ < $listenerArray$$2$$.length;$i$$56$$++) {
        ++$count$$12$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$2$$[$i$$56$$]);
      }
      delete this.$a$[$type$$89$$];
      this.$b$--;
    }
  }
  return $count$$12$$;
};
function $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$, $i$$58_type$$91$$, $listener$$46$$, $capture$$2$$, $opt_listenerScope$$2$$) {
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$.$a$[$i$$58_type$$91$$.toString()];
  $i$$58_type$$91$$ = -1;
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$ && ($i$$58_type$$91$$ = $goog$events$ListenerMap$findListenerIndex_$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$, $listener$$46$$, $capture$$2$$, $opt_listenerScope$$2$$));
  return -1 < $i$$58_type$$91$$ ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$$4$$[$i$$58_type$$91$$] : null;
}
function $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$6$$, $listener$$47$$, $opt_useCapture$$39$$, $opt_listenerScope$$3$$) {
  for (var $i$$60$$ = 0;$i$$60$$ < $listenerArray$$6$$.length;++$i$$60$$) {
    var $listenerObj$$3$$ = $listenerArray$$6$$[$i$$60$$];
    if (!$listenerObj$$3$$.$removed$ && $listenerObj$$3$$.$listener$ == $listener$$47$$ && $listenerObj$$3$$.$capture$ == !!$opt_useCapture$$39$$ && $listenerObj$$3$$.$handler$ == $opt_listenerScope$$3$$) {
      return $i$$60$$;
    }
  }
  return -1;
}
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_72$$ = $goog$global$$.navigator;
  if ($navigator$$inline_72$$) {
    var $userAgent$$inline_73$$ = $navigator$$inline_72$$.userAgent;
    if ($userAgent$$inline_73$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_73$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;function $goog$labs$userAgent$browser$matchIE_$$() {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE");
}
;function $goog$labs$userAgent$engine$isEdge$$() {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge");
}
;var $goog$userAgent$OPERA$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Opera") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("OPR"), $goog$userAgent$IE$$ = $goog$labs$userAgent$browser$matchIE_$$(), $goog$userAgent$GECKO$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$engine$isEdge$$()) && !(-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || 
-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) && !$goog$labs$userAgent$engine$isEdge$$(), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$engine$isEdge$$();
function $goog$userAgent$getVersionRegexResult_$$() {
  var $userAgent$$5$$ = $goog$labs$userAgent$util$userAgent_$$;
  if ($goog$userAgent$GECKO$$) {
    return /rv\:([^\);]+)(\)|;)/.exec($userAgent$$5$$);
  }
  if ($goog$userAgent$IE$$ && $goog$labs$userAgent$engine$isEdge$$()) {
    return /Edge\/([\d\.]+)/.exec($userAgent$$5$$);
  }
  if ($goog$userAgent$IE$$) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$$5$$);
  }
  if ($goog$userAgent$WEBKIT$$) {
    return /WebKit\/(\S+)/.exec($userAgent$$5$$);
  }
}
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$4$$ = $goog$global$$.document;
  return $doc$$4$$ ? $doc$$4$$.documentMode : void 0;
}
var $goog$userAgent$VERSION$$ = function() {
  if ($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion_version$$12$$ = $goog$global$$.opera.version;
    return $goog$isFunction$$($operaVersion_version$$12$$) ? $operaVersion_version$$12$$() : $operaVersion_version$$12$$;
  }
  var $operaVersion_version$$12$$ = "", $arr$$66_docMode$$ = $goog$userAgent$getVersionRegexResult_$$();
  $arr$$66_docMode$$ && ($operaVersion_version$$12$$ = $arr$$66_docMode$$ ? $arr$$66_docMode$$[1] : "");
  return $goog$userAgent$IE$$ && !$goog$labs$userAgent$engine$isEdge$$() && ($arr$$66_docMode$$ = $goog$userAgent$getDocumentMode_$$(), $arr$$66_docMode$$ > parseFloat($operaVersion_version$$12$$)) ? String($arr$$66_docMode$$) : $operaVersion_version$$12$$;
}(), $goog$userAgent$isVersionOrHigherCache_$$ = {};
function $goog$userAgent$isVersionOrHigher$$($version$$13$$) {
  var $JSCompiler_temp$$3_order$$inline_77$$;
  if (!($JSCompiler_temp$$3_order$$inline_77$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$])) {
    $JSCompiler_temp$$3_order$$inline_77$$ = 0;
    for (var $v1Subs$$inline_78$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_79$$ = $goog$string$trim$$(String($version$$13$$)).split("."), $subCount$$inline_80$$ = Math.max($v1Subs$$inline_78$$.length, $v2Subs$$inline_79$$.length), $subIdx$$inline_81$$ = 0;0 == $JSCompiler_temp$$3_order$$inline_77$$ && $subIdx$$inline_81$$ < $subCount$$inline_80$$;$subIdx$$inline_81$$++) {
      var $v1Sub$$inline_82$$ = $v1Subs$$inline_78$$[$subIdx$$inline_81$$] || "", $v2Sub$$inline_83$$ = $v2Subs$$inline_79$$[$subIdx$$inline_81$$] || "", $v1CompParser$$inline_84$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_85$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_86$$ = $v1CompParser$$inline_84$$.exec($v1Sub$$inline_82$$) || ["", "", ""], $v2Comp$$inline_87$$ = $v2CompParser$$inline_85$$.exec($v2Sub$$inline_83$$) || ["", "", ""];
        if (0 == $v1Comp$$inline_86$$[0].length && 0 == $v2Comp$$inline_87$$[0].length) {
          break;
        }
        $JSCompiler_temp$$3_order$$inline_77$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_86$$[1].length ? 0 : parseInt($v1Comp$$inline_86$$[1], 10), 0 == $v2Comp$$inline_87$$[1].length ? 0 : parseInt($v2Comp$$inline_87$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_86$$[2].length, 0 == $v2Comp$$inline_87$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_86$$[2], $v2Comp$$inline_87$$[2]);
      } while (0 == $JSCompiler_temp$$3_order$$inline_77$$);
    }
    $JSCompiler_temp$$3_order$$inline_77$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$] = 0 <= $JSCompiler_temp$$3_order$$inline_77$$;
  }
  return $JSCompiler_temp$$3_order$$inline_77$$;
}
function $goog$userAgent$isDocumentModeOrHigher$$($documentMode$$) {
  return $goog$userAgent$IE$$ && ($goog$labs$userAgent$engine$isEdge$$() || $goog$userAgent$DOCUMENT_MODE$$ >= $documentMode$$);
}
var $doc$$inline_89$$ = $goog$global$$.document, $mode$$inline_90$$ = $goog$userAgent$getDocumentMode_$$(), $goog$userAgent$DOCUMENT_MODE$$ = !$doc$$inline_89$$ || !$goog$userAgent$IE$$ || !$mode$$inline_90$$ && $goog$labs$userAgent$engine$isEdge$$() ? void 0 : $mode$$inline_90$$ || ("CSS1Compat" == $doc$$inline_89$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5);
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentModeOrHigher$$(9), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && ($goog$Disposable$instances_$$[this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)] = this);
  this.$g$ = this.$g$;
  this.$j$ = this.$j$;
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$g$ = !1;
function $JSCompiler_StaticMethods_dispose$$($JSCompiler_StaticMethods_dispose$self_uid$$) {
  $JSCompiler_StaticMethods_dispose$self_uid$$.$g$ || ($JSCompiler_StaticMethods_dispose$self_uid$$.$g$ = !0, $JSCompiler_StaticMethods_dispose$self_uid$$.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$ && ($JSCompiler_StaticMethods_dispose$self_uid$$ = $JSCompiler_StaticMethods_dispose$self_uid$$[$goog$UID_PROPERTY_$$] || ($JSCompiler_StaticMethods_dispose$self_uid$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$), delete $goog$Disposable$instances_$$[$JSCompiler_StaticMethods_dispose$self_uid$$]));
}
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if (this.$j$) {
    for (;this.$j$.length;) {
      this.$j$.shift()();
    }
  }
};
function $goog$events$Event$$($type$$93$$, $opt_target$$1$$) {
  this.type = $type$$93$$;
  this.$a$ = this.target = $opt_target$$1$$;
  this.$returnValue_$ = !0;
}
$goog$events$Event$$.prototype.$b$ = function $$goog$events$Event$$$$$b$$() {
  this.$returnValue_$ = !1;
};
function $goog$events$Event$preventDefault$$($e$$7$$) {
  $e$$7$$.$b$();
}
;function $goog$reflect$sinkValue$$($x$$61$$) {
  $goog$reflect$sinkValue$$[" "]($x$$61$$);
  return $x$$61$$;
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $goog$events$Event$$.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.relatedTarget = this.$a$ = this.target = null;
  this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.$c$ = this.state = null;
  $opt_e$$ && this.$init$($opt_e$$, $opt_currentTarget$$);
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$goog$events$BrowserEvent$$.prototype.$init$ = function $$goog$events$BrowserEvent$$$$$init$$($e$$9$$, $opt_currentTarget$$1$$) {
  var $type$$95$$ = this.type = $e$$9$$.type, $relevantTouch$$ = null;
  if ("touchstart" == $type$$95$$ || "touchmove" == $type$$95$$) {
    $relevantTouch$$ = $e$$9$$.targetTouches[0];
  } else {
    if ("touchend" == $type$$95$$ || "touchcancel" == $type$$95$$) {
      $relevantTouch$$ = $e$$9$$.changedTouches[0];
    }
  }
  this.target = null === $relevantTouch$$ ? $e$$9$$.target || $e$$9$$.srcElement : $relevantTouch$$.target;
  this.$a$ = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$9$$.relatedTarget;
  if ($relatedTarget$$) {
    if ($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$7$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$7$$ = !0;
          break a;
        } catch ($e$$inline_94$$) {
        }
        $JSCompiler_inline_result$$7$$ = !1;
      }
      $JSCompiler_inline_result$$7$$ || ($relatedTarget$$ = null);
    }
  } else {
    "mouseover" == $type$$95$$ ? $relatedTarget$$ = $e$$9$$.fromElement : "mouseout" == $type$$95$$ && ($relatedTarget$$ = $e$$9$$.toElement);
  }
  this.relatedTarget = $relatedTarget$$;
  null === $relevantTouch$$ ? (this.clientX = void 0 !== $e$$9$$.clientX ? $e$$9$$.clientX : $e$$9$$.pageX, this.clientY = void 0 !== $e$$9$$.clientY ? $e$$9$$.clientY : $e$$9$$.pageY, this.screenX = $e$$9$$.screenX || 0, this.screenY = $e$$9$$.screenY || 0) : (this.clientX = void 0 !== $relevantTouch$$.clientX ? $relevantTouch$$.clientX : $relevantTouch$$.pageX, this.clientY = void 0 !== $relevantTouch$$.clientY ? $relevantTouch$$.clientY : $relevantTouch$$.pageY, this.screenX = $relevantTouch$$.screenX || 
  0, this.screenY = $relevantTouch$$.screenY || 0);
  this.state = $e$$9$$.state;
  this.$c$ = $e$$9$$;
  $e$$9$$.defaultPrevented && this.$b$();
};
$goog$events$BrowserEvent$$.prototype.$b$ = function $$goog$events$BrowserEvent$$$$$b$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$b$.call(this);
  var $be$$ = this.$c$;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$$1$$) {
      }
    }
  }
};
var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1E6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0;
function $goog$events$listen$$($JSCompiler_temp$$8_src$$9$$, $type$$96$$, $listener$$48_listenerObj$$inline_104$$, $opt_capt_proxy$$inline_105$$, $opt_handler$$1$$) {
  if ($goog$isArray$$($type$$96$$)) {
    for (var $capture$$inline_102_i$$66$$ = 0;$capture$$inline_102_i$$66$$ < $type$$96$$.length;$capture$$inline_102_i$$66$$++) {
      $goog$events$listen$$($JSCompiler_temp$$8_src$$9$$, $type$$96$$[$capture$$inline_102_i$$66$$], $listener$$48_listenerObj$$inline_104$$, $opt_capt_proxy$$inline_105$$, $opt_handler$$1$$);
    }
    return null;
  }
  $listener$$48_listenerObj$$inline_104$$ = $goog$events$wrapListener$$($listener$$48_listenerObj$$inline_104$$);
  if ($JSCompiler_temp$$8_src$$9$$ && $JSCompiler_temp$$8_src$$9$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
    $JSCompiler_temp$$8_src$$9$$ = $JSCompiler_temp$$8_src$$9$$.$listen$($type$$96$$, $listener$$48_listenerObj$$inline_104$$, $opt_capt_proxy$$inline_105$$, $opt_handler$$1$$);
  } else {
    if (!$type$$96$$) {
      throw Error("Invalid event type");
    }
    var $capture$$inline_102_i$$66$$ = !!$opt_capt_proxy$$inline_105$$, $listenerMap$$inline_103$$ = $goog$events$getListenerMap_$$($JSCompiler_temp$$8_src$$9$$);
    $listenerMap$$inline_103$$ || ($JSCompiler_temp$$8_src$$9$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$inline_103$$ = new $goog$events$ListenerMap$$($JSCompiler_temp$$8_src$$9$$));
    $listener$$48_listenerObj$$inline_104$$ = $listenerMap$$inline_103$$.add($type$$96$$, $listener$$48_listenerObj$$inline_104$$, !1, $opt_capt_proxy$$inline_105$$, $opt_handler$$1$$);
    $listener$$48_listenerObj$$inline_104$$.$a$ || ($opt_capt_proxy$$inline_105$$ = $goog$events$getProxy$$(), $listener$$48_listenerObj$$inline_104$$.$a$ = $opt_capt_proxy$$inline_105$$, $opt_capt_proxy$$inline_105$$.src = $JSCompiler_temp$$8_src$$9$$, $opt_capt_proxy$$inline_105$$.$listener$ = $listener$$48_listenerObj$$inline_104$$, $JSCompiler_temp$$8_src$$9$$.addEventListener ? $JSCompiler_temp$$8_src$$9$$.addEventListener($type$$96$$.toString(), $opt_capt_proxy$$inline_105$$, $capture$$inline_102_i$$66$$) : 
    $JSCompiler_temp$$8_src$$9$$.attachEvent($goog$events$getOnString_$$($type$$96$$.toString()), $opt_capt_proxy$$inline_105$$), $goog$events$listenerCountEstimate_$$++);
    $JSCompiler_temp$$8_src$$9$$ = $listener$$48_listenerObj$$inline_104$$;
  }
  return $JSCompiler_temp$$8_src$$9$$;
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$30$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$30$$.src, $f$$30$$.$listener$, $eventObject$$);
  } : function($eventObject$$1_v$$) {
    $eventObject$$1_v$$ = $proxyCallbackFunction$$.call($f$$30$$.src, $f$$30$$.$listener$, $eventObject$$1_v$$);
    if (!$eventObject$$1_v$$) {
      return $eventObject$$1_v$$;
    }
  };
  return $f$$30$$;
}
function $goog$events$unlisten$$($listenerMap$$1_src$$13$$, $listenerObj$$5_type$$99$$, $listener$$52$$, $opt_capt$$4$$, $opt_handler$$5$$) {
  if ($goog$isArray$$($listenerObj$$5_type$$99$$)) {
    for (var $i$$68$$ = 0;$i$$68$$ < $listenerObj$$5_type$$99$$.length;$i$$68$$++) {
      $goog$events$unlisten$$($listenerMap$$1_src$$13$$, $listenerObj$$5_type$$99$$[$i$$68$$], $listener$$52$$, $opt_capt$$4$$, $opt_handler$$5$$);
    }
  } else {
    $listener$$52$$ = $goog$events$wrapListener$$($listener$$52$$), $listenerMap$$1_src$$13$$ && $listenerMap$$1_src$$13$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] ? $listenerMap$$1_src$$13$$.$unlisten$($listenerObj$$5_type$$99$$, $listener$$52$$, $opt_capt$$4$$, $opt_handler$$5$$) : $listenerMap$$1_src$$13$$ && ($listenerMap$$1_src$$13$$ = $goog$events$getListenerMap_$$($listenerMap$$1_src$$13$$)) && ($listenerObj$$5_type$$99$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$$1_src$$13$$, 
    $listenerObj$$5_type$$99$$, $listener$$52$$, !!$opt_capt$$4$$, $opt_handler$$5$$)) && $goog$events$unlistenByKey$$($listenerObj$$5_type$$99$$);
  }
}
function $goog$events$unlistenByKey$$($key$$51$$) {
  if ($goog$isNumber$$($key$$51$$) || !$key$$51$$ || $key$$51$$.$removed$) {
    return !1;
  }
  var $src$$14$$ = $key$$51$$.src;
  if ($src$$14$$ && $src$$14$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
    return $JSCompiler_StaticMethods_removeByKey$$($src$$14$$.$eventTargetListeners_$, $key$$51$$);
  }
  var $listenerMap$$2_type$$100$$ = $key$$51$$.type, $proxy$$2$$ = $key$$51$$.$a$;
  $src$$14$$.removeEventListener ? $src$$14$$.removeEventListener($listenerMap$$2_type$$100$$, $proxy$$2$$, $key$$51$$.$capture$) : $src$$14$$.detachEvent && $src$$14$$.detachEvent($goog$events$getOnString_$$($listenerMap$$2_type$$100$$), $proxy$$2$$);
  $goog$events$listenerCountEstimate_$$--;
  ($listenerMap$$2_type$$100$$ = $goog$events$getListenerMap_$$($src$$14$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$$2_type$$100$$, $key$$51$$), 0 == $listenerMap$$2_type$$100$$.$b$ && ($listenerMap$$2_type$$100$$.src = null, $src$$14$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$$51$$);
  return !0;
}
function $goog$events$getOnString_$$($type$$104$$) {
  return $type$$104$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$104$$] : $goog$events$onStringMap_$$[$type$$104$$] = "on" + $type$$104$$;
}
function $goog$events$fireListeners_$$($i$$70_listenerMap$$7_obj$$89$$, $listenerArray$$7_type$$106$$, $capture$$8$$, $eventObject$$3$$) {
  var $retval$$ = !0;
  if ($i$$70_listenerMap$$7_obj$$89$$ = $goog$events$getListenerMap_$$($i$$70_listenerMap$$7_obj$$89$$)) {
    if ($listenerArray$$7_type$$106$$ = $i$$70_listenerMap$$7_obj$$89$$.$a$[$listenerArray$$7_type$$106$$.toString()]) {
      for ($listenerArray$$7_type$$106$$ = $listenerArray$$7_type$$106$$.concat(), $i$$70_listenerMap$$7_obj$$89$$ = 0;$i$$70_listenerMap$$7_obj$$89$$ < $listenerArray$$7_type$$106$$.length;$i$$70_listenerMap$$7_obj$$89$$++) {
        var $listener$$56_result$$6$$ = $listenerArray$$7_type$$106$$[$i$$70_listenerMap$$7_obj$$89$$];
        $listener$$56_result$$6$$ && $listener$$56_result$$6$$.$capture$ == $capture$$8$$ && !$listener$$56_result$$6$$.$removed$ && ($listener$$56_result$$6$$ = $goog$events$fireListener$$($listener$$56_result$$6$$, $eventObject$$3$$), $retval$$ = $retval$$ && !1 !== $listener$$56_result$$6$$);
      }
    }
  }
  return $retval$$;
}
function $goog$events$fireListener$$($listener$$57$$, $eventObject$$4$$) {
  var $listenerFn$$ = $listener$$57$$.$listener$, $listenerHandler$$ = $listener$$57$$.$handler$ || $listener$$57$$.src;
  $listener$$57$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$57$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$$4$$);
}
function $goog$events$handleBrowserEvent_$$($listener$$58$$, $opt_evt$$) {
  if ($listener$$58$$.$removed$) {
    return !0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $ancestors_ieEvent$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event"), $evt$$21$$ = new $goog$events$BrowserEvent$$($ancestors_ieEvent$$, this), $retval$$1$$ = !0;
    if (!(0 > $ancestors_ieEvent$$.keyCode || void 0 != $ancestors_ieEvent$$.returnValue)) {
      a: {
        var $parent$$2_type$$107_useReturnValue$$inline_108$$ = !1;
        if (0 == $ancestors_ieEvent$$.keyCode) {
          try {
            $ancestors_ieEvent$$.keyCode = -1;
            break a;
          } catch ($ex$$inline_109$$) {
            $parent$$2_type$$107_useReturnValue$$inline_108$$ = !0;
          }
        }
        if ($parent$$2_type$$107_useReturnValue$$inline_108$$ || void 0 == $ancestors_ieEvent$$.returnValue) {
          $ancestors_ieEvent$$.returnValue = !0;
        }
      }
      $ancestors_ieEvent$$ = [];
      for ($parent$$2_type$$107_useReturnValue$$inline_108$$ = $evt$$21$$.$a$;$parent$$2_type$$107_useReturnValue$$inline_108$$;$parent$$2_type$$107_useReturnValue$$inline_108$$ = $parent$$2_type$$107_useReturnValue$$inline_108$$.parentNode) {
        $ancestors_ieEvent$$.push($parent$$2_type$$107_useReturnValue$$inline_108$$);
      }
      for (var $parent$$2_type$$107_useReturnValue$$inline_108$$ = $listener$$58$$.type, $i$$71$$ = $ancestors_ieEvent$$.length - 1;0 <= $i$$71$$;$i$$71$$--) {
        $evt$$21$$.$a$ = $ancestors_ieEvent$$[$i$$71$$];
        var $result$$7$$ = $goog$events$fireListeners_$$($ancestors_ieEvent$$[$i$$71$$], $parent$$2_type$$107_useReturnValue$$inline_108$$, !0, $evt$$21$$), $retval$$1$$ = $retval$$1$$ && $result$$7$$;
      }
      for ($i$$71$$ = 0;$i$$71$$ < $ancestors_ieEvent$$.length;$i$$71$$++) {
        $evt$$21$$.$a$ = $ancestors_ieEvent$$[$i$$71$$], $result$$7$$ = $goog$events$fireListeners_$$($ancestors_ieEvent$$[$i$$71$$], $parent$$2_type$$107_useReturnValue$$inline_108$$, !1, $evt$$21$$), $retval$$1$$ = $retval$$1$$ && $result$$7$$;
      }
    }
    return $retval$$1$$;
  }
  return $goog$events$fireListener$$($listener$$58$$, new $goog$events$BrowserEvent$$($opt_evt$$, this));
}
function $goog$events$getListenerMap_$$($listenerMap$$8_src$$18$$) {
  $listenerMap$$8_src$$18$$ = $listenerMap$$8_src$$18$$[$goog$events$LISTENER_MAP_PROP_$$];
  return $listenerMap$$8_src$$18$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$$8_src$$18$$ : null;
}
var $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function $goog$events$wrapListener$$($listener$$59$$) {
  $goog$asserts$assert$$($listener$$59$$, "Listener can not be null.");
  if ($goog$isFunction$$($listener$$59$$)) {
    return $listener$$59$$;
  }
  $goog$asserts$assert$$($listener$$59$$.handleEvent, "An object listener must have handleEvent method.");
  $listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$$59$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$$14$$) {
    return $listener$$59$$.handleEvent($e$$14$$);
  });
  return $listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$];
}
;function $z$client$events$StartTurn$$($data$$38$$) {
  $goog$events$Event$$.call(this, "start_turn$0");
  this.data = $data$$38$$;
}
$goog$inherits$$($z$client$events$StartTurn$$, $goog$events$Event$$);
function $mugd$injector$NoProviderFoundException$$($message$$19$$) {
  this.message = $message$$19$$;
  this.name = "mugd.injector.NoProviderFoundException";
}
$goog$inherits$$($mugd$injector$NoProviderFoundException$$, Error);
function $mugd$injector$MultipleProviderFoundException$$($message$$20$$) {
  this.message = $message$$20$$;
  this.name = "mugd.injector.MultipleProviderFoundException";
}
$goog$inherits$$($mugd$injector$MultipleProviderFoundException$$, Error);
function $mugd$injector$MicroFactory$$($injector$$, $Ctor$$) {
  this.$c$ = $injector$$;
  if (!$Ctor$$) {
    throw {name:"InvalidArgumentException", message:"no constructor given"};
  }
  this.$a$ = $Ctor$$;
  this.$b$ = {};
}
function $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$self$$, $key$$53$$) {
  var $withRes$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$self$$.$b$[$key$$53$$];
  try {
    var $injRes$$ = $JSCompiler_StaticMethods_getResource$$($JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$self$$.$c$, $key$$53$$);
  } catch ($e$$15$$) {
    if (!($e$$15$$ instanceof $mugd$injector$NoProviderFoundException$$)) {
      throw $e$$15$$;
    }
    if (!$goog$isDef$$($withRes$$)) {
      throw $e$$15$$;
    }
  }
  if (null != $withRes$$ && null != $injRes$$) {
    throw new $mugd$injector$MultipleProviderFoundException$$("Multiple providers found for key" + $key$$53$$);
  }
  var $resource$$;
  null != $withRes$$ ? $resource$$ = $withRes$$ : $resource$$ = $injRes$$;
  return $resource$$;
}
function $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_New$self$$) {
  return new $JSCompiler_StaticMethods_New$self$$.$a$($JSCompiler_StaticMethods_New$self$$);
}
function $JSCompiler_StaticMethods_With$$($JSCompiler_StaticMethods_With$self$$, $res$$7$$) {
  var $next$$ = new $mugd$injector$MicroFactory$$($JSCompiler_StaticMethods_With$self$$.$c$, $JSCompiler_StaticMethods_With$self$$.$a$);
  $next$$.$b$ = $res$$7$$;
  return $next$$;
}
;function $mugd$injector$Injector$$() {
  this.$a$ = {};
  this.$b$ = {};
  this.$c$ = {};
  this.$b$.$injector = this;
}
function $JSCompiler_StaticMethods_addResource$$($JSCompiler_StaticMethods_addResource$self$$, $key$$56$$) {
  var $resource$$1$$ = ko.observable();
  $JSCompiler_StaticMethods_addResource$self$$.$b$[$key$$56$$] = $resource$$1$$;
}
function $JSCompiler_StaticMethods_getResource$$($JSCompiler_StaticMethods_getResource$self$$, $key$$57$$) {
  var $resource$$2$$ = $JSCompiler_StaticMethods_getResource$self$$.$b$[$key$$57$$];
  if (!$resource$$2$$) {
    var $factory_provider$$ = $JSCompiler_StaticMethods_getResource$self$$.$a$[$key$$57$$];
    $factory_provider$$ && ($resource$$2$$ = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_Compose$$($JSCompiler_StaticMethods_getResource$self$$, $factory_provider$$)));
  }
  $resource$$2$$ || ($factory_provider$$ = $JSCompiler_StaticMethods_getResource$self$$.$c$[$key$$57$$]) && ($resource$$2$$ = $JSCompiler_StaticMethods_Compose$$($JSCompiler_StaticMethods_getResource$self$$, $factory_provider$$));
  if (!$resource$$2$$) {
    throw new $mugd$injector$NoProviderFoundException$$("No provider found for key: " + $key$$57$$);
  }
  return $JSCompiler_StaticMethods_getResource$self$$.$b$[$key$$57$$] = $resource$$2$$;
}
function $JSCompiler_StaticMethods_Compose$$($JSCompiler_StaticMethods_Compose$self$$, $Ctor$$2$$) {
  return new $mugd$injector$MicroFactory$$($JSCompiler_StaticMethods_Compose$self$$, $Ctor$$2$$);
}
;function $z$client$events$BeforeStartTurn$$($data$$39$$) {
  $goog$events$Event$$.call(this, "before_start_turn$1");
  this.data = $data$$39$$;
}
$goog$inherits$$($z$client$events$BeforeStartTurn$$, $goog$events$Event$$);
function $z$common$data$ClientEndTurn$$($actorId$$, $turn$$, $entities$$) {
  this.$a$ = $actorId$$;
  this.$turn$ = $turn$$;
  this.$b$ = $entities$$;
}
;function $z$common$data$ActorData$$($guid$$, $state$$1$$, $type$$108$$, $stockpile$$, $points$$) {
  this.$ownerId$ = this.$guid$ = $guid$$;
  this.state = $state$$1$$;
  this.type = $type$$108$$;
  this.$stockpile$ = $stockpile$$;
  this.$category$ = $z$common$rulebook$category$ACTOR$$;
  this.$points$ = $points$$;
}
function $z$common$data$ActorData$fromEntity$$($actor$$) {
  return new $z$common$data$ActorData$$($actor$$.$guid$, $actor$$.$a$, $actor$$.$meta$.type, $JSCompiler_StaticMethods_peekAll$$($actor$$.$stockpile$), $actor$$.$e$);
}
;function $z$common$EntityQuery$$() {
  this.$category$ = this.$a$ = null;
  this.$b$ = !1;
}
$z$common$EntityQuery$$.prototype.match = function $$z$common$EntityQuery$$$$match$($entity$$2$$) {
  var $JSCompiler_temp$$31_state$$inline_120$$;
  if ($JSCompiler_temp$$31_state$$inline_120$$ = this.$b$) {
    $JSCompiler_temp$$31_state$$inline_120$$ = $entity$$2$$.$a$, $JSCompiler_temp$$31_state$$inline_120$$ = !("kill" !== $JSCompiler_temp$$31_state$$inline_120$$ && "dead" !== $JSCompiler_temp$$31_state$$inline_120$$);
  }
  return $JSCompiler_temp$$31_state$$inline_120$$ ? !1 : this.$a$ && !$entity$$2$$.$b$ ? !1 : this.$a$ && $entity$$2$$.$b$ !== this.$a$ ? !1 : this.$category$ && $entity$$2$$.$meta$.$category$ !== this.$category$ ? !1 : !0;
};
function $z$common$EntityEmptyQuery$$() {
  $z$common$EntityQuery$$.call(this);
}
$goog$inherits$$($z$common$EntityEmptyQuery$$, $z$common$EntityQuery$$);
$z$common$EntityEmptyQuery$$.prototype.match = function $$z$common$EntityEmptyQuery$$$$match$() {
  return !0;
};
function $z$common$queries$getUnassignedQuery$$($ownerGuid$$) {
  var $entityQuery$$ = new $z$common$EntityQuery$$;
  $entityQuery$$.match = function $$entityQuery$$$match$($entity$$4$$) {
    return $entity$$4$$.$b$ === $ownerGuid$$ && $entity$$4$$.$meta$.$category$ === $z$common$rulebook$category$CHARACTER_TYPE$$ && !$entity$$4$$.$c$ && "kill" !== $entity$$4$$.$a$ && "dead" !== $entity$$4$$.$a$;
  };
  return $entityQuery$$;
}
;var $z$common$rulebook$category$ACTOR$$ = "actor", $z$common$rulebook$category$CHARACTER_TYPE$$ = "character_type", $z$common$rulebook$logic$prerequisites$$ = {terrain:function($condition$$2$$, $target$$54$$) {
  if (!($target$$54$$ instanceof $z$common$entities$Tile$$)) {
    return !1;
  }
  var $fulfilled$$ = !1;
  $goog$object$forEach$$($target$$54$$.terrain, function($terrain$$3$$) {
    $fulfilled$$ = $fulfilled$$ || 0 <= $goog$array$indexOf$$($condition$$2$$, $terrain$$3$$);
  });
  return $fulfilled$$;
}, blocked:function() {
  return !1;
}, danger:function($condition$$4$$, $target$$56$$) {
  return $target$$56$$ instanceof $z$common$entities$Tile$$ ? $condition$$4$$ >= $target$$56$$.$zombieData$.$danger$ : !1;
}}, $z$common$rulebook$logic$predicates$$ = {complete:function($triggerArgs$$) {
  return !!$triggerArgs$$.complete;
}, end:function($triggerArgs$$1$$) {
  return !!$triggerArgs$$1$$.end;
}, duration:function($triggerArgs$$2$$, $predicate$$4$$) {
  return $triggerArgs$$2$$.duration === $predicate$$4$$.duration;
}, season:function($triggerArgs$$3$$, $predicate$$5$$) {
  return $triggerArgs$$3$$.season === $predicate$$5$$.$season$;
}, people:function($triggerArgs$$4$$, $predicate$$6$$) {
  var $people$$ = $triggerArgs$$4$$.people, $max$$1$$ = null != $predicate$$6$$.max ? $predicate$$6$$.max : Number.POSITIVE_INFINITY;
  return $people$$ >= (null != $predicate$$6$$.min ? $predicate$$6$$.min : Number.NEGATIVE_INFINITY) && $people$$ <= $max$$1$$;
}, turn:function($triggerArgs$$5$$, $predicate$$7$$) {
  var $turn$$1$$ = $triggerArgs$$5$$.turn, $max$$2$$ = null != $predicate$$7$$.max ? $predicate$$7$$.max : Number.POSITIVE_INFINITY;
  return $turn$$1$$ >= (null != $predicate$$7$$.min ? $predicate$$7$$.min : Number.NEGATIVE_INFINITY) && $turn$$1$$ <= $max$$2$$;
}};
function $z$common$Stockpile$$() {
}
function $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$($JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$self$$, $values$$4$$) {
  $goog$object$forEach$$($values$$4$$, function($amount$$, $name$$63$$) {
    this.add($name$$63$$, $amount$$);
  }, $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$self$$);
}
$JSCompiler_prototypeAlias$$ = $z$common$Stockpile$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($name$$64$$, $amount$$1$$) {
  this[$name$$64$$] || (this[$name$$64$$] = new $z$common$StockpiledResource$$);
  this[$name$$64$$].add($amount$$1$$ || 0);
};
function $JSCompiler_StaticMethods_purgeAll$$($JSCompiler_StaticMethods_purgeAll$self$$) {
  $goog$object$forEach$$($JSCompiler_StaticMethods_purgeAll$self$$, function($amount$$2$$, $name$$65$$) {
    this.$purge$($name$$65$$);
  }, $JSCompiler_StaticMethods_purgeAll$self$$);
}
$JSCompiler_prototypeAlias$$.$purge$ = function $$JSCompiler_prototypeAlias$$$$purge$$($name$$66$$) {
  this[$name$$66$$] && $goog$isFunction$$(this[$name$$66$$].$purge$) && this[$name$$66$$].$purge$($name$$66$$);
};
function $JSCompiler_StaticMethods_peekAll$$($JSCompiler_StaticMethods_peekAll$self$$) {
  var $response$$ = {};
  $goog$object$forEach$$($JSCompiler_StaticMethods_peekAll$self$$, function($amount$$3$$, $name$$67$$) {
    var $value$$86$$ = this.$peek$($name$$67$$);
    0 !== $value$$86$$ && ($response$$[$name$$67$$] = $value$$86$$);
  }, $JSCompiler_StaticMethods_peekAll$self$$);
  return $response$$;
}
$JSCompiler_prototypeAlias$$.$peek$ = function $$JSCompiler_prototypeAlias$$$$peek$$($name$$68$$) {
  var $amount$$4$$ = 0;
  this[$name$$68$$] && $goog$isFunction$$(this[$name$$68$$].$peek$) && ($amount$$4$$ = this[$name$$68$$].$peek$());
  return $amount$$4$$;
};
function $JSCompiler_StaticMethods_diffAll$$($JSCompiler_StaticMethods_diffAll$self$$, $values$$5$$) {
  return $goog$object$map$$($values$$5$$, function($amount$$5$$, $name$$69$$) {
    this[$name$$69$$] || (this[$name$$69$$] = new $z$common$StockpiledResource$$);
    return $amount$$5$$ - this[$name$$69$$].$peek$();
  }, $JSCompiler_StaticMethods_diffAll$self$$);
}
$JSCompiler_prototypeAlias$$.$take$ = function $$JSCompiler_prototypeAlias$$$$take$$($name$$71$$, $amount$$7$$) {
  return this[$name$$71$$] ? this[$name$$71$$].$take$($amount$$7$$) : 0;
};
function $JSCompiler_StaticMethods_ratioAll$$($JSCompiler_StaticMethods_ratioAll$self$$, $values$$6$$) {
  var $ratio$$ = 1;
  $goog$object$forEach$$($values$$6$$, function($amount$$8$$, $name$$72$$) {
    $amount$$8$$ && ($ratio$$ = Math.min($JSCompiler_StaticMethods_ratio$$(this, $name$$72$$, $amount$$8$$), $ratio$$));
  }, $JSCompiler_StaticMethods_ratioAll$self$$);
  return $ratio$$;
}
function $JSCompiler_StaticMethods_ratio$$($JSCompiler_StaticMethods_ratio$self$$, $name$$73$$, $amount$$9$$) {
  $JSCompiler_StaticMethods_ratio$self$$[$name$$73$$] || ($JSCompiler_StaticMethods_ratio$self$$[$name$$73$$] = new $z$common$StockpiledResource$$);
  return $JSCompiler_StaticMethods_ratio$self$$[$name$$73$$].$peek$() / $amount$$9$$;
}
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  var $response$$1$$ = new $z$common$Stockpile$$;
  $goog$object$forEach$$(this, function($amount$$10$$, $name$$74$$) {
    var $value$$87$$ = this.$peek$($name$$74$$);
    0 !== $value$$87$$ && $response$$1$$.add($name$$74$$, $value$$87$$);
  }, this);
  return $response$$1$$;
};
function $z$common$StockpiledResource$$() {
  this.value = 0;
}
$z$common$StockpiledResource$$.prototype.$peek$ = function $$z$common$StockpiledResource$$$$$peek$$() {
  return this.value;
};
$z$common$StockpiledResource$$.prototype.add = function $$z$common$StockpiledResource$$$$add$($value$$88$$) {
  this.value += $value$$88$$;
};
$z$common$StockpiledResource$$.prototype.$purge$ = function $$z$common$StockpiledResource$$$$$purge$$() {
  this.value = 0;
};
$z$common$StockpiledResource$$.prototype.$take$ = function $$z$common$StockpiledResource$$$$$take$$($available_inValue_value$$89$$) {
  $available_inValue_value$$89$$ = Math.ceil($available_inValue_value$$89$$);
  $available_inValue_value$$89$$ = Math.min($available_inValue_value$$89$$, this.value);
  this.value -= $available_inValue_value$$89$$;
  return $available_inValue_value$$89$$;
};
function $z$common$Cashier$$($stock$$) {
  this.$a$ = Array.prototype.slice.call(arguments);
}
function $JSCompiler_StaticMethods_withdraw$$($JSCompiler_StaticMethods_withdraw$self$$, $request$$) {
  var $scale$$2$$ = 1;
  $goog$object$forEach$$($request$$, function($amount$$11$$, $name$$75$$) {
    $scale$$2$$ = Math.min($scale$$2$$, this.$peek$($name$$75$$) / $amount$$11$$);
  }, $JSCompiler_StaticMethods_withdraw$self$$);
  return $goog$object$map$$($request$$, function($amount$$12$$, $name$$76$$) {
    return this.$take$($name$$76$$, $amount$$12$$ * $scale$$2$$);
  }, $JSCompiler_StaticMethods_withdraw$self$$);
}
$z$common$Cashier$$.prototype.$peek$ = function $$z$common$Cashier$$$$$peek$$($name$$77$$) {
  return $goog$array$reduce$$(this.$a$, function($result$$8$$, $value$$90$$) {
    return $result$$8$$ + $value$$90$$.$peek$($name$$77$$);
  }, 0, this);
};
$z$common$Cashier$$.prototype.$take$ = function $$z$common$Cashier$$$$$take$$($name$$78$$, $amount$$13$$) {
  var $taken$$ = 0;
  $goog$array$forEach$$(this.$a$, function($value$$91$$) {
    $taken$$ += $value$$91$$.$take$($name$$78$$, $amount$$13$$ - $taken$$);
  }, this);
  return $taken$$;
};
function $z$service$world$WorkCalculator$$() {
  this.$a$ = new $z$common$Stockpile$$;
}
$z$service$world$WorkCalculator$$.prototype.$b$ = function $$z$service$world$WorkCalculator$$$$$b$$($entity$$5$$) {
  if (!($entity$$5$$ instanceof $z$common$entities$Character$$)) {
    throw {name:"InvalidDataException", message:"not a z.common.entities.Character"};
  }
  this.$a$.add("game://static/combat", $entity$$5$$.$combat$);
  this.$a$.add("game://static/knowledge", $entity$$5$$.$d$);
  this.$a$.add("game://static/labour", $entity$$5$$.$f$);
};
function $z$service$world$WorkCalculator$calculateWithRepository$$($repository$$, $filter$$5$$) {
  var $workCalculator$$ = new $z$service$world$WorkCalculator$$;
  $repository$$.map($workCalculator$$.$b$.bind($workCalculator$$), $filter$$5$$);
  return $workCalculator$$.$a$;
}
;function $mugd$utils$_create$$() {
  return "00000-00000-00000-00000-00000-00000".replace(/[0]/g, $mugd$utils$_selectChar$$);
}
function $mugd$utils$_selectChar$$() {
  return "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789"[Math.floor(60 * Math.random())];
}
;function $z$common$events$EntityModified$$($entity$$6$$) {
  $goog$events$Event$$.call(this, $z$common$events$EventType$ENTITY_MODIFIED$$);
  this.$entity$ = $entity$$6$$;
}
$goog$inherits$$($z$common$events$EntityModified$$, $goog$events$Event$$);
var $z$common$events$EventType$ENTITY_MODIFIED$$ = "entity_modified$4";
function $goog$functions$TRUE$$() {
  return !0;
}
function $goog$functions$identity$$($opt_returnValue$$2$$) {
  return $opt_returnValue$$2$$;
}
;function $z$common$events$EntityCreated$$($entity$$7$$) {
  $goog$events$Event$$.call(this, "entity_created$3");
  this.$entity$ = $entity$$7$$;
}
$goog$inherits$$($z$common$events$EntityCreated$$, $goog$events$Event$$);
function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this);
  this.$eventTargetListeners_$ = new $goog$events$ListenerMap$$(this);
  this.$s$ = this;
  this.$h$ = null;
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$goog$events$EventTarget$$.prototype[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] = !0;
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$3$$) {
  this.$h$ = $parent$$3$$;
};
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$109$$, $handler$$43$$, $opt_capture$$2$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$109$$, $handler$$43$$, $opt_capture$$2$$, $opt_handlerScope$$);
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$110$$, $handler$$44$$, $opt_capture$$3$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$110$$, $handler$$44$$, $opt_capture$$3$$, $opt_handlerScope$$1$$);
};
function $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self$$, $e$$16$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self$$);
  var $ancestorsTree_opt_ancestorsTree$$inline_130$$, $ancestor_target$$inline_128$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self$$.$h$;
  if ($ancestor_target$$inline_128$$) {
    $ancestorsTree_opt_ancestorsTree$$inline_130$$ = [];
    for (var $ancestorCount_e$$inline_129$$ = 1;$ancestor_target$$inline_128$$;$ancestor_target$$inline_128$$ = $ancestor_target$$inline_128$$.$h$) {
      $ancestorsTree_opt_ancestorsTree$$inline_130$$.push($ancestor_target$$inline_128$$), $goog$asserts$assert$$(1E3 > ++$ancestorCount_e$$inline_129$$, "infinite loop");
    }
  }
  var $ancestor_target$$inline_128$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self$$.$s$, $ancestorCount_e$$inline_129$$ = $e$$16$$, $type$$inline_131$$ = $ancestorCount_e$$inline_129$$.type || $ancestorCount_e$$inline_129$$;
  if ($goog$isString$$($ancestorCount_e$$inline_129$$)) {
    $ancestorCount_e$$inline_129$$ = new $goog$events$Event$$($ancestorCount_e$$inline_129$$, $ancestor_target$$inline_128$$);
  } else {
    if ($ancestorCount_e$$inline_129$$ instanceof $goog$events$Event$$) {
      $ancestorCount_e$$inline_129$$.target = $ancestorCount_e$$inline_129$$.target || $ancestor_target$$inline_128$$;
    } else {
      var $oldEvent$$inline_132_rv$$inline_133$$ = $ancestorCount_e$$inline_129$$, $ancestorCount_e$$inline_129$$ = new $goog$events$Event$$($type$$inline_131$$, $ancestor_target$$inline_128$$);
      $goog$object$extend$$($ancestorCount_e$$inline_129$$, $oldEvent$$inline_132_rv$$inline_133$$);
    }
  }
  var $oldEvent$$inline_132_rv$$inline_133$$ = !0, $currentTarget$$inline_134$$;
  if ($ancestorsTree_opt_ancestorsTree$$inline_130$$) {
    for (var $i$$inline_135$$ = $ancestorsTree_opt_ancestorsTree$$inline_130$$.length - 1;0 <= $i$$inline_135$$;$i$$inline_135$$--) {
      $currentTarget$$inline_134$$ = $ancestorCount_e$$inline_129$$.$a$ = $ancestorsTree_opt_ancestorsTree$$inline_130$$[$i$$inline_135$$], $oldEvent$$inline_132_rv$$inline_133$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_134$$, $type$$inline_131$$, !0, $ancestorCount_e$$inline_129$$) && $oldEvent$$inline_132_rv$$inline_133$$;
    }
  }
  $currentTarget$$inline_134$$ = $ancestorCount_e$$inline_129$$.$a$ = $ancestor_target$$inline_128$$;
  $oldEvent$$inline_132_rv$$inline_133$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_134$$, $type$$inline_131$$, !0, $ancestorCount_e$$inline_129$$) && $oldEvent$$inline_132_rv$$inline_133$$;
  $oldEvent$$inline_132_rv$$inline_133$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_134$$, $type$$inline_131$$, !1, $ancestorCount_e$$inline_129$$) && $oldEvent$$inline_132_rv$$inline_133$$;
  if ($ancestorsTree_opt_ancestorsTree$$inline_130$$) {
    for ($i$$inline_135$$ = 0;$i$$inline_135$$ < $ancestorsTree_opt_ancestorsTree$$inline_130$$.length;$i$$inline_135$$++) {
      $currentTarget$$inline_134$$ = $ancestorCount_e$$inline_129$$.$a$ = $ancestorsTree_opt_ancestorsTree$$inline_130$$[$i$$inline_135$$], $oldEvent$$inline_132_rv$$inline_133$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_134$$, $type$$inline_131$$, !1, $ancestorCount_e$$inline_129$$) && $oldEvent$$inline_132_rv$$inline_133$$;
    }
  }
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventTargetListeners_$ && this.$eventTargetListeners_$.removeAll(void 0);
  this.$h$ = null;
};
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($type$$111$$, $listener$$60$$, $opt_useCapture$$40$$, $opt_listenerScope$$4$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  return this.$eventTargetListeners_$.add(String($type$$111$$), $listener$$60$$, !1, $opt_useCapture$$40$$, $opt_listenerScope$$4$$);
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($type$$113$$, $listener$$62$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$) {
  return this.$eventTargetListeners_$.remove(String($type$$113$$), $listener$$62$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$);
};
function $JSCompiler_StaticMethods_fireListeners$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$$8_type$$114$$, $capture$$9$$, $eventObject$$5$$) {
  $listenerArray$$8_type$$114$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$.$a$[String($listenerArray$$8_type$$114$$)];
  if (!$listenerArray$$8_type$$114$$) {
    return !0;
  }
  $listenerArray$$8_type$$114$$ = $listenerArray$$8_type$$114$$.concat();
  for (var $rv$$9$$ = !0, $i$$76$$ = 0;$i$$76$$ < $listenerArray$$8_type$$114$$.length;++$i$$76$$) {
    var $listener$$63$$ = $listenerArray$$8_type$$114$$[$i$$76$$];
    if ($listener$$63$$ && !$listener$$63$$.$removed$ && $listener$$63$$.$capture$ == $capture$$9$$) {
      var $listenerFn$$1$$ = $listener$$63$$.$listener$, $listenerHandler$$1$$ = $listener$$63$$.$handler$ || $listener$$63$$.src;
      $listener$$63$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$, $listener$$63$$);
      $rv$$9$$ = !1 !== $listenerFn$$1$$.call($listenerHandler$$1$$, $eventObject$$5$$) && $rv$$9$$;
    }
  }
  return $rv$$9$$ && 0 != $eventObject$$5$$.$returnValue_$;
}
function $JSCompiler_StaticMethods_assertInitialized_$$($JSCompiler_StaticMethods_assertInitialized_$self$$) {
  $goog$asserts$assert$$($JSCompiler_StaticMethods_assertInitialized_$self$$.$eventTargetListeners_$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
}
;function $z$common$EntityRepository$$($services$$) {
  $goog$events$EventTarget$$.call(this);
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$, $z$common$Resources$RULEBOOK$$);
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$, $z$common$Resources$INJECTOR$$);
  this.$b$ = {};
}
$goog$inherits$$($z$common$EntityRepository$$, $goog$events$EventTarget$$);
$z$common$EntityRepository$$.prototype.$a$ = function $$z$common$EntityRepository$$$$$a$$($entityData$$) {
  var $JSCompiler_inline_result$$10_entity$$8$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this, $entityData$$.$guid$), $meta$$ = $JSCompiler_StaticMethods_getMetaClass$$(this.$d$, $entityData$$.type), $owner$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this, $entityData$$.$ownerId$);
  if (null === $JSCompiler_inline_result$$10_entity$$8$$) {
    if (null === $entityData$$.$guid$) {
      var $prefix$$inline_140$$, $separator$$inline_141$$, $JSCompiler_inline_result$$10_entity$$8$$ = ($prefix$$inline_140$$ = $prefix$$inline_140$$ || "") ? $prefix$$inline_140$$.toString() + ($separator$$inline_141$$ || ":") + $mugd$utils$_create$$() : $mugd$utils$_create$$();
      $entityData$$.$guid$ = $JSCompiler_inline_result$$10_entity$$8$$;
    }
    $JSCompiler_inline_result$$10_entity$$8$$ = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_With$$($JSCompiler_StaticMethods_getResource$$(this.$c$, $meta$$.$category$), {entityData:$entityData$$, meta:$meta$$, owner:$owner$$}));
    this.$b$[$entityData$$.$guid$] = $JSCompiler_inline_result$$10_entity$$8$$;
    $JSCompiler_inline_result$$10_entity$$8$$.$setParentEventTarget$(this);
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $z$common$events$EntityCreated$$($JSCompiler_inline_result$$10_entity$$8$$));
  } else {
    $JSCompiler_inline_result$$10_entity$$8$$.update($entityData$$, $meta$$, $entityData$$.$ownerId$);
  }
  return $JSCompiler_inline_result$$10_entity$$8$$;
};
function $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$($JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$self$$, $guid$$1$$) {
  return null != $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$self$$.$b$[$guid$$1$$] ? $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$self$$.$b$[$guid$$1$$] : null;
}
$z$common$EntityRepository$$.prototype.remove = function $$z$common$EntityRepository$$$$remove$($guid$$2$$) {
  var $entity$$10$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this, $guid$$2$$);
  null != $entity$$10$$ && ($JSCompiler_StaticMethods_setState$$($entity$$10$$, "dead"), delete this.$b$[$guid$$2$$]);
};
function $JSCompiler_StaticMethods_cleanUp$$($JSCompiler_StaticMethods_cleanUp$self$$) {
  var $killed$$ = $JSCompiler_StaticMethods_cleanUp$self$$.filter(function($entity$$11$$) {
    return "kill" === $entity$$11$$.$a$;
  });
  $goog$array$forEach$$($killed$$, function($killedEntity$$) {
    this.map(function($entity$$12$$) {
      $entity$$12$$.$k$($killedEntity$$.$guid$);
    });
  }, $JSCompiler_StaticMethods_cleanUp$self$$);
}
$z$common$EntityRepository$$.prototype.map = function $$z$common$EntityRepository$$$$map$($action$$1$$, $filter$$6$$) {
  $goog$isDef$$($filter$$6$$) ? $filter$$6$$ instanceof $z$common$EntityQuery$$ && ($filter$$6$$ = $filter$$6$$.match.bind($filter$$6$$)) : $filter$$6$$ = $goog$functions$TRUE$$;
  var $result$$11$$ = [], $i$$78$$;
  for ($i$$78$$ in this.$b$) {
    if (this.$b$.hasOwnProperty($i$$78$$)) {
      var $entity$$13$$ = this.$b$[$i$$78$$];
      $filter$$6$$($entity$$13$$) && $result$$11$$.push($action$$1$$($entity$$13$$));
    }
  }
  return $result$$11$$;
};
$z$common$EntityRepository$$.prototype.filter = function $$z$common$EntityRepository$$$$filter$($filter$$7$$) {
  return this.map($goog$functions$identity$$, $filter$$7$$);
};
function $JSCompiler_StaticMethods_choose$$($JSCompiler_StaticMethods_choose$self$$, $query$$2$$) {
  for (var $number$$ = 10, $chosen$$ = [], $candidates$$ = $JSCompiler_StaticMethods_choose$self$$.filter($query$$2$$.match.bind($query$$2$$));$number$$ && $candidates$$.length;) {
    var $a$$inline_143_elements$$1_index$$60$$;
    $a$$inline_143_elements$$1_index$$60$$ = $candidates$$.length;
    $a$$inline_143_elements$$1_index$$60$$ = Math.floor(Math.random() * $a$$inline_143_elements$$1_index$$60$$);
    $a$$inline_143_elements$$1_index$$60$$ = $candidates$$.splice($a$$inline_143_elements$$1_index$$60$$, 1);
    $chosen$$.push($a$$inline_143_elements$$1_index$$60$$[0]);
    --$number$$;
  }
  return $chosen$$;
}
function $JSCompiler_StaticMethods_resetState$$($JSCompiler_StaticMethods_resetState$self$$) {
  var $killed$$1$$ = [];
  $JSCompiler_StaticMethods_resetState$self$$.map(function($entity$$14$$) {
    var $state$$2$$ = $entity$$14$$.$a$;
    "modified" === $state$$2$$ ? $JSCompiler_StaticMethods_setState$$($entity$$14$$, "pass") : "kill" === $state$$2$$ && ($JSCompiler_StaticMethods_setState$$($entity$$14$$, "dead"), $killed$$1$$.push($entity$$14$$.$guid$));
  });
  return $killed$$1$$;
}
;function $mugd$utils$Grid$$() {
  this.$b$ = $mugd$utils$Grid$width$$ / 2;
  this.$c$ = $mugd$utils$Grid$height$$ / 2;
  var $data$$inline_145$$ = [];
  $data$$inline_145$$.length = $mugd$utils$Grid$width$$;
  for (var $i$$inline_146$$ = 0;$i$$inline_146$$ < $mugd$utils$Grid$height$$;++$i$$inline_146$$) {
    $data$$inline_145$$[$i$$inline_146$$] = [], $data$$inline_145$$[$i$$inline_146$$].length = $mugd$utils$Grid$height$$;
  }
  this.$a$ = $data$$inline_145$$;
  this.$d$ = {};
}
var $mugd$utils$Grid$width$$ = 500, $mugd$utils$Grid$height$$ = 500;
function $JSCompiler_StaticMethods_setNode$$($JSCompiler_StaticMethods_setNode$self$$, $x$$62$$, $y$$42$$, $node$$7$$) {
  $JSCompiler_StaticMethods_setNode$self$$.$a$[$x$$62$$ + $JSCompiler_StaticMethods_setNode$self$$.$b$][$y$$42$$ + $JSCompiler_StaticMethods_setNode$self$$.$c$] = $node$$7$$;
  $node$$7$$.$guid$ && ($JSCompiler_StaticMethods_setNode$self$$.$d$[$node$$7$$.$guid$] = $node$$7$$);
}
function $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_getNode$self$$, $x$$63$$, $y$$43$$) {
  return $JSCompiler_StaticMethods_getNode$self$$.$a$[$x$$63$$ + $JSCompiler_StaticMethods_getNode$self$$.$b$][$y$$43$$ + $JSCompiler_StaticMethods_getNode$self$$.$c$];
}
function $JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$, $y$$44$$) {
  return [$JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$ - 1, $y$$44$$), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$ - 1, $y$$44$$ + 1), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$, $y$$44$$ + 1), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, 
  $x$$64$$ + 1, $y$$44$$ + 1), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$ + 1, $y$$44$$), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$ + 1, $y$$44$$ - 1), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, $x$$64$$, $y$$44$$ - 1), $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$self$$, 
  $x$$64$$ - 1, $y$$44$$ - 1)];
}
;function $JSCompiler_StaticMethods_distribute$$($tiles$$) {
  var $grid$$ = new $mugd$utils$Grid$$;
  $goog$array$forEach$$($tiles$$, function($tile$$) {
    1 === $tile$$.position.x && 4 === $tile$$.position.y && console.log($tile$$.$zombieData$);
    var $pre$$ = $tile$$.$zombieData$, $post$$ = {$density$:0, $defence$:0, $attraction$:0, $activity$:0, $danger$:0};
    $JSCompiler_StaticMethods_setNode$$($grid$$, $tile$$.position.x, $tile$$.position.y, {$pre$:$pre$$, post:$post$$});
    $post$$.$attraction$ = Math.round($pre$$.$activity$ + $pre$$.$density$ * Math.random());
  });
  $goog$array$forEach$$($tiles$$, function($tile$$1$$) {
    var $node$$8$$ = $JSCompiler_StaticMethods_getNode$$($grid$$, $tile$$1$$.position.x, $tile$$1$$.position.y), $pre$$1$$ = $node$$8$$.$pre$, $post$$1$$ = $node$$8$$.post;
    $goog$array$forEach$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$$($grid$$, $tile$$1$$.position.x, $tile$$1$$.position.y), function($neighbour$$) {
      $neighbour$$ ? $neighbour$$.post.$attraction$ < $post$$1$$.$attraction$ && ($pre$$1$$.$density$ += 1, 0 < $neighbour$$.$pre$.$density$ && --$neighbour$$.$pre$.$density$) : $pre$$1$$.$density$ += 1;
    });
  });
  $goog$array$forEach$$($tiles$$, function($adj$$1_tile$$2$$) {
    var $node$$9$$ = $JSCompiler_StaticMethods_getNode$$($grid$$, $adj$$1_tile$$2$$.position.x, $adj$$1_tile$$2$$.position.y);
    $adj$$1_tile$$2$$ = $JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$$($grid$$, $adj$$1_tile$$2$$.position.x, $adj$$1_tile$$2$$.position.y);
    var $post$$2$$ = $node$$9$$.post, $nAdj$$ = $adj$$1_tile$$2$$.length, $diffusion$$ = Math.floor(.5 * $node$$9$$.$pre$.$density$ / $nAdj$$);
    $post$$2$$.$density$ = $post$$2$$.$density$ + $node$$9$$.$pre$.$density$ - $diffusion$$ * $nAdj$$;
    $goog$array$forEach$$($adj$$1_tile$$2$$, function($neighbour$$1$$) {
      $neighbour$$1$$ ? $neighbour$$1$$.post.$density$ += $diffusion$$ : $post$$2$$.$density$ += $diffusion$$;
    });
  });
  $goog$array$forEach$$($tiles$$, function($tile$$3$$) {
    var $newZombieData$$inline_150$$ = $JSCompiler_StaticMethods__calculateZombieData$$($tile$$3$$, $JSCompiler_StaticMethods_getNode$$($grid$$, $tile$$3$$.position.x, $tile$$3$$.position.y).post);
    $z$common$entities$Tile$equalZombieData$$($newZombieData$$inline_150$$, $tile$$3$$.$zombieData$) || ($tile$$3$$.$zombieData$ = $newZombieData$$inline_150$$, $JSCompiler_StaticMethods__dispatchModified$$($tile$$3$$));
  });
}
;function $goog$string$Const$$() {
  this.$a$ = "";
  this.$b$ = $goog$string$Const$TYPE_MARKER_$$;
}
$goog$string$Const$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$string$Const$$.prototype.$getTypedStringValue$ = function $$goog$string$Const$$$$$getTypedStringValue$$() {
  return this.$a$;
};
$goog$string$Const$$.prototype.toString = function $$goog$string$Const$$$$toString$() {
  return "Const{" + this.$a$ + "}";
};
function $goog$string$Const$unwrap$$($stringConst$$) {
  if ($stringConst$$ instanceof $goog$string$Const$$ && $stringConst$$.constructor === $goog$string$Const$$ && $stringConst$$.$b$ === $goog$string$Const$TYPE_MARKER_$$) {
    return $stringConst$$.$a$;
  }
  $goog$asserts$fail$$("expected object of type Const, got '" + $stringConst$$ + "'");
  return "type_error:Const";
}
var $goog$string$Const$TYPE_MARKER_$$ = {};
function $goog$string$Const$create__googStringSecurityPrivate_$$($s$$14$$) {
  var $stringConst$$1$$ = new $goog$string$Const$$;
  $stringConst$$1$$.$a$ = $s$$14$$;
  return $stringConst$$1$$;
}
;function $goog$html$SafeUrl$$() {
  this.$a$ = "";
  this.$b$ = $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
}
$JSCompiler_prototypeAlias$$ = $goog$html$SafeUrl$$.prototype;
$JSCompiler_prototypeAlias$$.$implementsGoogStringTypedString$ = !0;
$JSCompiler_prototypeAlias$$.$getTypedStringValue$ = function $$JSCompiler_prototypeAlias$$$$getTypedStringValue$$() {
  return this.$a$;
};
$JSCompiler_prototypeAlias$$.$implementsGoogI18nBidiDirectionalString$ = !0;
$JSCompiler_prototypeAlias$$.$getDirection$ = function $$JSCompiler_prototypeAlias$$$$getDirection$$() {
  return 1;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "SafeUrl{" + this.$a$ + "}";
};
function $goog$html$SafeUrl$unwrap$$($safeUrl$$) {
  if ($safeUrl$$ instanceof $goog$html$SafeUrl$$ && $safeUrl$$.constructor === $goog$html$SafeUrl$$ && $safeUrl$$.$b$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeUrl$$.$a$;
  }
  $goog$asserts$fail$$("expected object of type SafeUrl, got '" + $safeUrl$$ + "'");
  return "type_error:SafeUrl";
}
var $goog$html$SAFE_URL_PATTERN_$$ = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
function $goog$html$SafeUrl$normalize_$$($url$$23$$) {
  try {
    var $normalized$$1$$ = encodeURI($url$$23$$);
  } catch ($e$$18$$) {
    return "about:invalid#zClosurez";
  }
  return $normalized$$1$$.replace($goog$html$SafeUrl$NORMALIZE_MATCHER_$$, function($match$$5$$) {
    return $goog$html$SafeUrl$NORMALIZE_REPLACER_MAP_$$[$match$$5$$];
  });
}
var $goog$html$SafeUrl$NORMALIZE_MATCHER_$$ = /[()']|%5B|%5D|%25/g, $goog$html$SafeUrl$NORMALIZE_REPLACER_MAP_$$ = {"'":"%27", "(":"%28", ")":"%29", "%5B":"[", "%5D":"]", "%25":"%"}, $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
function $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$$($url$$24$$) {
  var $safeUrl$$1$$ = new $goog$html$SafeUrl$$;
  $safeUrl$$1$$.$a$ = $url$$24$$;
  return $safeUrl$$1$$;
}
;function $goog$html$SafeStyle$$() {
  this.$a$ = "";
  this.$b$ = $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
}
$goog$html$SafeStyle$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
$goog$html$SafeStyle$$.prototype.$getTypedStringValue$ = function $$goog$html$SafeStyle$$$$$getTypedStringValue$$() {
  return this.$a$;
};
$goog$html$SafeStyle$$.prototype.toString = function $$goog$html$SafeStyle$$$$toString$() {
  return "SafeStyle{" + this.$a$ + "}";
};
function $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$($style$$3$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeStyle$$;
  $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$a$ = $style$$3$$;
  return $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
}
var $goog$html$SafeStyle$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$(""), $goog$html$SafeStyle$VALUE_RE_$$ = /^[-,."'%_!# a-zA-Z0-9]+$/;
function $goog$html$TrustedResourceUrl$$() {
  this.$a$ = $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
}
$JSCompiler_prototypeAlias$$ = $goog$html$TrustedResourceUrl$$.prototype;
$JSCompiler_prototypeAlias$$.$implementsGoogStringTypedString$ = !0;
$JSCompiler_prototypeAlias$$.$getTypedStringValue$ = function $$JSCompiler_prototypeAlias$$$$getTypedStringValue$$() {
  return "";
};
$JSCompiler_prototypeAlias$$.$implementsGoogI18nBidiDirectionalString$ = !0;
$JSCompiler_prototypeAlias$$.$getDirection$ = function $$JSCompiler_prototypeAlias$$$$getDirection$$() {
  return 1;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "TrustedResourceUrl{}";
};
var $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
var $goog$dom$tags$VOID_TAGS_$$ = $goog$object$createSet$$("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function $goog$html$SafeHtml$$() {
  this.$a$ = "";
  this.$c$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
  this.$b$ = null;
}
$JSCompiler_prototypeAlias$$ = $goog$html$SafeHtml$$.prototype;
$JSCompiler_prototypeAlias$$.$implementsGoogI18nBidiDirectionalString$ = !0;
$JSCompiler_prototypeAlias$$.$getDirection$ = function $$JSCompiler_prototypeAlias$$$$getDirection$$() {
  return this.$b$;
};
$JSCompiler_prototypeAlias$$.$implementsGoogStringTypedString$ = !0;
$JSCompiler_prototypeAlias$$.$getTypedStringValue$ = function $$JSCompiler_prototypeAlias$$$$getTypedStringValue$$() {
  return this.$a$;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "SafeHtml{" + this.$a$ + "}";
};
function $goog$html$SafeHtml$unwrap$$($safeHtml$$) {
  if ($safeHtml$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$$.$c$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeHtml$$.$a$;
  }
  $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$$ + "'");
  return "type_error:SafeHtml";
}
function $goog$html$SafeHtml$htmlEscape$$($html$$inline_722_textOrHtml$$) {
  if ($html$$inline_722_textOrHtml$$ instanceof $goog$html$SafeHtml$$) {
    return $html$$inline_722_textOrHtml$$;
  }
  var $dir$$1$$ = null;
  $html$$inline_722_textOrHtml$$.$implementsGoogI18nBidiDirectionalString$ && ($dir$$1$$ = $html$$inline_722_textOrHtml$$.$getDirection$());
  $html$$inline_722_textOrHtml$$ = $goog$string$htmlEscape$$($html$$inline_722_textOrHtml$$.$implementsGoogStringTypedString$ ? $html$$inline_722_textOrHtml$$.$getTypedStringValue$() : String($html$$inline_722_textOrHtml$$));
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($html$$inline_722_textOrHtml$$, $dir$$1$$);
}
function $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$($html$$3_textOrHtml$$2$$) {
  if ($html$$3_textOrHtml$$2$$ instanceof $goog$html$SafeHtml$$) {
    return $html$$3_textOrHtml$$2$$;
  }
  $html$$3_textOrHtml$$2$$ = $goog$html$SafeHtml$htmlEscape$$($html$$3_textOrHtml$$2$$);
  var $JSCompiler_inline_result$$2$$;
  $JSCompiler_inline_result$$2$$ = $goog$html$SafeHtml$unwrap$$($html$$3_textOrHtml$$2$$).replace(/  /g, " &#160;").replace(/(\r\n|\r|\n)/g, "<br>");
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$$2$$, $html$$3_textOrHtml$$2$$.$getDirection$());
}
var $goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$ = /^[a-zA-Z0-9-]+$/, $goog$html$SafeHtml$URL_ATTRIBUTES_$$ = {action:!0, cite:!0, data:!0, formaction:!0, href:!0, manifest:!0, poster:!0, src:!0}, $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$ = {EMBED:!0, IFRAME:!0, LINK:!0, OBJECT:!0, SCRIPT:!0, STYLE:!0, TEMPLATE:!0};
function $goog$html$SafeHtml$create$$($dirAttribute$$inline_164_tagName$$3$$, $opt_attributes$$, $content$$inline_162_opt_content$$) {
  if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test($dirAttribute$$inline_164_tagName$$3$$)) {
    throw Error("Invalid tag name <" + $dirAttribute$$inline_164_tagName$$3$$ + ">.");
  }
  if ($dirAttribute$$inline_164_tagName$$3$$.toUpperCase() in $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$) {
    throw Error("Tag name <" + $dirAttribute$$inline_164_tagName$$3$$ + "> is not allowed for SafeHtml.");
  }
  var $dir$$inline_158_html$$inline_163$$ = null, $JSCompiler_temp_const$$701_result$$inline_159$$ = "<" + $dirAttribute$$inline_164_tagName$$3$$;
  if ($opt_attributes$$) {
    for (var $name$$inline_160$$ in $opt_attributes$$) {
      if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test($name$$inline_160$$)) {
        throw Error('Invalid attribute name "' + $name$$inline_160$$ + '".');
      }
      var $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $opt_attributes$$[$name$$inline_160$$];
      if (null != $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$) {
        var $JSCompiler_inline_result$$702_name$$inline_729$$, $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ = $dirAttribute$$inline_164_tagName$$3$$;
        $JSCompiler_inline_result$$702_name$$inline_729$$ = $name$$inline_160$$;
        if ($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$string$Const$$) {
          $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $goog$string$Const$unwrap$$($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$);
        } else {
          if ("style" == $JSCompiler_inline_result$$702_name$$inline_729$$.toLowerCase()) {
            if (!$goog$isObject$$($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$)) {
              throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + " given: " + $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$);
            }
            if (!($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$html$SafeStyle$$)) {
              var $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ = "", $name$$inline_907$$ = void 0;
              for ($name$$inline_907$$ in $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$) {
                if (!/^[-_a-zA-Z0-9]+$/.test($name$$inline_907$$)) {
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$inline_907$$);
                }
                var $value$$inline_908$$ = $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$[$name$$inline_907$$];
                if (null != $value$$inline_908$$) {
                  if ($value$$inline_908$$ instanceof $goog$string$Const$$) {
                    $value$$inline_908$$ = $goog$string$Const$unwrap$$($value$$inline_908$$), $goog$asserts$assert$$(!/[{;}]/.test($value$$inline_908$$), "Value does not allow [{;}].");
                  } else {
                    if ($goog$html$SafeStyle$VALUE_RE_$$.test($value$$inline_908$$)) {
                      for (var $outsideSingle$$inline_909$$ = !0, $outsideDouble$$inline_910$$ = !0, $i$$inline_911$$ = 0;$i$$inline_911$$ < $value$$inline_908$$.length;$i$$inline_911$$++) {
                        var $c$$inline_912$$ = $value$$inline_908$$.charAt($i$$inline_911$$);
                        "'" == $c$$inline_912$$ && $outsideDouble$$inline_910$$ ? $outsideSingle$$inline_909$$ = !$outsideSingle$$inline_909$$ : '"' == $c$$inline_912$$ && $outsideSingle$$inline_909$$ && ($outsideDouble$$inline_910$$ = !$outsideDouble$$inline_910$$);
                      }
                      $outsideSingle$$inline_909$$ && $outsideDouble$$inline_910$$ || ($goog$asserts$fail$$("String value requires balanced quotes, got: " + $value$$inline_908$$), $value$$inline_908$$ = "zClosurez");
                    } else {
                      $goog$asserts$fail$$("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + $value$$inline_908$$), $value$$inline_908$$ = "zClosurez";
                    }
                  }
                  $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ += $name$$inline_907$$ + ":" + $value$$inline_908$$ + ";";
                }
              }
              $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ ? ($goog$asserts$assert$$(!/[<>]/.test($JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$), "Forbidden characters in style string: " + $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$), $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$)) : 
              $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $goog$html$SafeStyle$EMPTY$$;
            }
            $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ = void 0;
            $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$html$SafeStyle$$ && $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.constructor === $goog$html$SafeStyle$$ && $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.$b$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ = $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.$a$ : 
            ($goog$asserts$fail$$("expected object of type SafeStyle, got '" + $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + "'"), $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ = "type_error:SafeStyle");
            $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$;
          } else {
            if (/^on/i.test($JSCompiler_inline_result$$702_name$$inline_729$$)) {
              throw Error('Attribute "' + $JSCompiler_inline_result$$702_name$$inline_729$$ + '" requires goog.string.Const value, "' + $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + '" given.');
            }
            if ($JSCompiler_inline_result$$702_name$$inline_729$$.toLowerCase() in $goog$html$SafeHtml$URL_ATTRIBUTES_$$) {
              if ($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$html$TrustedResourceUrl$$) {
                $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$html$TrustedResourceUrl$$ && $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.constructor === $goog$html$TrustedResourceUrl$$ && $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.$a$ === $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = "" : ($goog$asserts$fail$$("expected object of type TrustedResourceUrl, got '" + 
                $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + "'"), $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = "type_error:TrustedResourceUrl");
              } else {
                if ($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ instanceof $goog$html$SafeUrl$$) {
                  $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $goog$html$SafeUrl$unwrap$$($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$);
                } else {
                  throw Error('Attribute "' + $JSCompiler_inline_result$$702_name$$inline_729$$ + '" on tag "' + $JSCompiler_inline_result$$inline_913_style$$inline_906_tagName$$inline_728$$ + '" requires goog.html.SafeUrl or goog.string.Const value, "' + $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + '" given.');
                }
              }
            }
          }
        }
        $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.$implementsGoogStringTypedString$ && ($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ = $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$.$getTypedStringValue$());
        $goog$asserts$assert$$($goog$isString$$($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$) || $goog$isNumber$$($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$), "String or number value expected, got " + typeof $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$ + " with value: " + $map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$);
        $JSCompiler_inline_result$$702_name$$inline_729$$ = $JSCompiler_inline_result$$702_name$$inline_729$$ + '="' + $goog$string$htmlEscape$$(String($map$$inline_905_value$$inline_161_value$$inline_730_value$$inline_904$$)) + '"';
        $JSCompiler_temp_const$$701_result$$inline_159$$ = $JSCompiler_temp_const$$701_result$$inline_159$$ + (" " + $JSCompiler_inline_result$$702_name$$inline_729$$);
      }
    }
  }
  null != $content$$inline_162_opt_content$$ ? $goog$isArray$$($content$$inline_162_opt_content$$) || ($content$$inline_162_opt_content$$ = [$content$$inline_162_opt_content$$]) : $content$$inline_162_opt_content$$ = [];
  !0 === $goog$dom$tags$VOID_TAGS_$$[$dirAttribute$$inline_164_tagName$$3$$.toLowerCase()] ? ($goog$asserts$assert$$(!$content$$inline_162_opt_content$$.length, "Void tag <" + $dirAttribute$$inline_164_tagName$$3$$ + "> does not allow content."), $JSCompiler_temp_const$$701_result$$inline_159$$ += ">") : ($dir$$inline_158_html$$inline_163$$ = $goog$html$SafeHtml$concat$$($content$$inline_162_opt_content$$), $JSCompiler_temp_const$$701_result$$inline_159$$ += ">" + $goog$html$SafeHtml$unwrap$$($dir$$inline_158_html$$inline_163$$) + 
  "</" + $dirAttribute$$inline_164_tagName$$3$$ + ">", $dir$$inline_158_html$$inline_163$$ = $dir$$inline_158_html$$inline_163$$.$getDirection$());
  ($dirAttribute$$inline_164_tagName$$3$$ = $opt_attributes$$ && $opt_attributes$$.dir) && (/^(ltr|rtl|auto)$/i.test($dirAttribute$$inline_164_tagName$$3$$) ? $dir$$inline_158_html$$inline_163$$ = 0 : $dir$$inline_158_html$$inline_163$$ = null);
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_temp_const$$701_result$$inline_159$$, $dir$$inline_158_html$$inline_163$$);
}
function $goog$html$SafeHtml$concat$$($var_args$$79$$) {
  function $addArgument$$2$$($argument$$2_html$$5_htmlDir$$) {
    $goog$isArray$$($argument$$2_html$$5_htmlDir$$) ? $goog$array$forEach$$($argument$$2_html$$5_htmlDir$$, $addArgument$$2$$) : ($argument$$2_html$$5_htmlDir$$ = $goog$html$SafeHtml$htmlEscape$$($argument$$2_html$$5_htmlDir$$), $content$$5$$ += $goog$html$SafeHtml$unwrap$$($argument$$2_html$$5_htmlDir$$), $argument$$2_html$$5_htmlDir$$ = $argument$$2_html$$5_htmlDir$$.$getDirection$(), 0 == $dir$$3$$ ? $dir$$3$$ = $argument$$2_html$$5_htmlDir$$ : 0 != $argument$$2_html$$5_htmlDir$$ && $dir$$3$$ != 
    $argument$$2_html$$5_htmlDir$$ && ($dir$$3$$ = null));
  }
  var $dir$$3$$ = 0, $content$$5$$ = "";
  $goog$array$forEach$$(arguments, $addArgument$$2$$);
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($content$$5$$, $dir$$3$$);
}
var $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
function $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($html$$8$$, $dir$$6$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeHtml$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$a$ = $html$$8$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$b$ = $dir$$6$$;
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
}
$JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("<!DOCTYPE html>", 0);
var $goog$html$SafeHtml$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("", 0);
function $goog$structs$getValues$$($col$$1$$) {
  if ("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$();
  }
  if ($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$$1$$)) {
    for (var $rv$$11$$ = [], $l$$12$$ = $col$$1$$.length, $i$$83$$ = 0;$i$$83$$ < $l$$12$$;$i$$83$$++) {
      $rv$$11$$.push($col$$1$$[$i$$83$$]);
    }
    return $rv$$11$$;
  }
  return $goog$object$getValues$$($col$$1$$);
}
function $goog$structs$forEach$$($col$$6$$, $f$$34$$) {
  if ("function" == typeof $col$$6$$.forEach) {
    $col$$6$$.forEach($f$$34$$, void 0);
  } else {
    if ($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
      $goog$array$forEach$$($col$$6$$, $f$$34$$, void 0);
    } else {
      var $keys$$2_rv$$inline_174$$;
      if ("function" == typeof $col$$6$$.$getKeys$) {
        $keys$$2_rv$$inline_174$$ = $col$$6$$.$getKeys$();
      } else {
        if ("function" != typeof $col$$6$$.$getValues$) {
          if ($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
            $keys$$2_rv$$inline_174$$ = [];
            for (var $l$$inline_175_values$$7$$ = $col$$6$$.length, $i$$inline_176_l$$14$$ = 0;$i$$inline_176_l$$14$$ < $l$$inline_175_values$$7$$;$i$$inline_176_l$$14$$++) {
              $keys$$2_rv$$inline_174$$.push($i$$inline_176_l$$14$$);
            }
          } else {
            $keys$$2_rv$$inline_174$$ = $goog$object$getKeys$$($col$$6$$);
          }
        } else {
          $keys$$2_rv$$inline_174$$ = void 0;
        }
      }
      for (var $l$$inline_175_values$$7$$ = $goog$structs$getValues$$($col$$6$$), $i$$inline_176_l$$14$$ = $l$$inline_175_values$$7$$.length, $i$$85$$ = 0;$i$$85$$ < $i$$inline_176_l$$14$$;$i$$85$$++) {
        $f$$34$$.call(void 0, $l$$inline_175_values$$7$$[$i$$85$$], $keys$$2_rv$$inline_174$$ && $keys$$2_rv$$inline_174$$[$i$$85$$], $col$$6$$);
      }
    }
  }
}
;function $goog$structs$Map$$($opt_map$$, $var_args$$89$$) {
  this.$b$ = {};
  this.$a$ = [];
  this.$d$ = this.$c$ = 0;
  var $argLength$$2_keys$$inline_180$$ = arguments.length;
  if (1 < $argLength$$2_keys$$inline_180$$) {
    if ($argLength$$2_keys$$inline_180$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$$93_values$$inline_181$$ = 0;$i$$93_values$$inline_181$$ < $argLength$$2_keys$$inline_180$$;$i$$93_values$$inline_181$$ += 2) {
      $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$$(this, arguments[$i$$93_values$$inline_181$$], arguments[$i$$93_values$$inline_181$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      $opt_map$$ instanceof $goog$structs$Map$$ ? ($argLength$$2_keys$$inline_180$$ = $opt_map$$.$getKeys$(), $i$$93_values$$inline_181$$ = $opt_map$$.$getValues$()) : ($argLength$$2_keys$$inline_180$$ = $goog$object$getKeys$$($opt_map$$), $i$$93_values$$inline_181$$ = $goog$object$getValues$$($opt_map$$));
      for (var $i$$inline_182$$ = 0;$i$$inline_182$$ < $argLength$$2_keys$$inline_180$$.length;$i$$inline_182$$++) {
        $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$$(this, $argLength$$2_keys$$inline_180$$[$i$$inline_182$$], $i$$93_values$$inline_181$$[$i$$inline_182$$]);
      }
    }
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$$16$$ = [], $i$$94$$ = 0;$i$$94$$ < this.$a$.length;$i$$94$$++) {
    $rv$$16$$.push(this.$b$[this.$a$[$i$$94$$]]);
  }
  return $rv$$16$$;
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$a$.concat();
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$b$ = {};
  this.$d$ = this.$c$ = this.$a$.length = 0;
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$63$$) {
  return Object.prototype.hasOwnProperty.call(this.$b$, $key$$63$$) ? (delete this.$b$[$key$$63$$], this.$c$--, this.$d$++, this.$a$.length > 2 * this.$c$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      var $key$$64$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$];
      Object.prototype.hasOwnProperty.call($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$, $key$$64$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$$64$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for (var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      $key$$64$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$], Object.prototype.hasOwnProperty.call($seen$$2$$, $key$$64$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$$64$$, $seen$$2$$[$key$$64$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
}
function $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$$($JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$, $key$$66$$, $value$$102$$) {
  Object.prototype.hasOwnProperty.call($JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$.$b$, $key$$66$$) || ($JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$.$c$++, $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$.$a$.push($key$$66$$), $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$.$d$++);
  $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$self$$.$b$[$key$$66$$] = $value$$102$$;
}
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$$49$$, $opt_obj$$47$$) {
  for (var $keys$$8$$ = this.$getKeys$(), $i$$98$$ = 0;$i$$98$$ < $keys$$8$$.length;$i$$98$$++) {
    var $key$$67$$ = $keys$$8$$[$i$$98$$];
    $f$$49$$.call($opt_obj$$47$$, Object.prototype.hasOwnProperty.call(this.$b$, $key$$67$$) ? this.$b$[$key$$67$$] : void 0, $key$$67$$, this);
  }
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Map$$(this);
};
function $goog$debug$getStacktrace$$($opt_fn$$6$$) {
  var $stack$$3$$;
  $stack$$3$$ || ($stack$$3$$ = $goog$debug$getStacktraceHelper_$$($opt_fn$$6$$ || arguments.callee.caller, []));
  return $stack$$3$$;
}
function $goog$debug$getStacktraceHelper_$$($fn$$9$$, $visited$$) {
  var $sb$$3$$ = [];
  if (0 <= $goog$array$indexOf$$($visited$$, $fn$$9$$)) {
    $sb$$3$$.push("[...circular reference...]");
  } else {
    if ($fn$$9$$ && 50 > $visited$$.length) {
      $sb$$3$$.push($goog$debug$getFunctionName$$($fn$$9$$) + "(");
      for (var $args$$10$$ = $fn$$9$$.arguments, $i$$106$$ = 0;$args$$10$$ && $i$$106$$ < $args$$10$$.length;$i$$106$$++) {
        0 < $i$$106$$ && $sb$$3$$.push(", ");
        var $arg$$5_argDesc$$;
        $arg$$5_argDesc$$ = $args$$10$$[$i$$106$$];
        switch(typeof $arg$$5_argDesc$$) {
          case "object":
            $arg$$5_argDesc$$ = $arg$$5_argDesc$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$5_argDesc$$ = String($arg$$5_argDesc$$);
            break;
          case "boolean":
            $arg$$5_argDesc$$ = $arg$$5_argDesc$$ ? "true" : "false";
            break;
          case "function":
            $arg$$5_argDesc$$ = ($arg$$5_argDesc$$ = $goog$debug$getFunctionName$$($arg$$5_argDesc$$)) ? $arg$$5_argDesc$$ : "[fn]";
            break;
          default:
            $arg$$5_argDesc$$ = typeof $arg$$5_argDesc$$;
        }
        40 < $arg$$5_argDesc$$.length && ($arg$$5_argDesc$$ = $arg$$5_argDesc$$.substr(0, 40) + "...");
        $sb$$3$$.push($arg$$5_argDesc$$);
      }
      $visited$$.push($fn$$9$$);
      $sb$$3$$.push(")\n");
      try {
        $sb$$3$$.push($goog$debug$getStacktraceHelper_$$($fn$$9$$.caller, $visited$$));
      } catch ($e$$28$$) {
        $sb$$3$$.push("[exception trying to get caller]\n");
      }
    } else {
      $fn$$9$$ ? $sb$$3$$.push("[...long stack...]") : $sb$$3$$.push("[end]");
    }
  }
  return $sb$$3$$.join("");
}
function $goog$debug$getFunctionName$$($fn$$10_functionSource$$) {
  if ($goog$debug$fnNameCache_$$[$fn$$10_functionSource$$]) {
    return $goog$debug$fnNameCache_$$[$fn$$10_functionSource$$];
  }
  $fn$$10_functionSource$$ = String($fn$$10_functionSource$$);
  if (!$goog$debug$fnNameCache_$$[$fn$$10_functionSource$$]) {
    var $matches$$ = /function ([^\(]+)/.exec($fn$$10_functionSource$$);
    $goog$debug$fnNameCache_$$[$fn$$10_functionSource$$] = $matches$$ ? $matches$$[1] : "[Anonymous]";
  }
  return $goog$debug$fnNameCache_$$[$fn$$10_functionSource$$];
}
var $goog$debug$fnNameCache_$$ = {};
function $goog$debug$LogRecord$$($level$$7$$, $msg$$1$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$$7$$, $msg$$1$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$);
}
$goog$debug$LogRecord$$.prototype.$a$ = null;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$$8$$, $msg$$2$$, $loggerName$$1$$, $opt_time$$1$$, $opt_sequenceNumber$$1$$) {
  "number" == typeof $opt_sequenceNumber$$1$$ || $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$d$ = $opt_time$$1$$ || $goog$now$$();
  this.$b$ = $level$$8$$;
  this.$c$ = $msg$$2$$;
  this.$e$ = $loggerName$$1$$;
  delete this.$a$;
};
function $goog$debug$Logger$$($name$$84$$) {
  this.$e$ = $name$$84$$;
  this.$a$ = this.$c$ = this.$d$ = this.$b$ = null;
}
function $goog$debug$Logger$Level$$($name$$85$$, $value$$107$$) {
  this.name = $name$$85$$;
  this.value = $value$$107$$;
}
$goog$debug$Logger$Level$$.prototype.toString = function $$goog$debug$Logger$Level$$$$toString$() {
  return this.name;
};
var $goog$debug$Logger$Level$SHOUT$$ = new $goog$debug$Logger$Level$$("SHOUT", 1200), $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1E3), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500);
function $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$d$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$d$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$);
  }
  $goog$asserts$fail$$("Root logger has no level set.");
  return null;
}
$goog$debug$Logger$$.prototype.log = function $$goog$debug$Logger$$$$log$($level$$15_logRecord$$inline_199$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$, $msg$$inline_751_opt_exception_target$$inline_203$$) {
  if ($level$$15_logRecord$$inline_199$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    for ($goog$isFunction$$($JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$) && ($JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$()), $level$$15_logRecord$$inline_199$$ = new $goog$debug$LogRecord$$($level$$15_logRecord$$inline_199$$, String($JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$), this.$e$), $msg$$inline_751_opt_exception_target$$inline_203$$ && ($level$$15_logRecord$$inline_199$$.$a$ = 
    $msg$$inline_751_opt_exception_target$$inline_203$$), $msg$$inline_751_opt_exception_target$$inline_203$$ = "log:" + $level$$15_logRecord$$inline_199$$.$c$, $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$inline_751_opt_exception_target$$inline_203$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$inline_751_opt_exception_target$$inline_203$$)), $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$inline_751_opt_exception_target$$inline_203$$), 
    $msg$$inline_751_opt_exception_target$$inline_203$$ = this;$msg$$inline_751_opt_exception_target$$inline_203$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$ = $msg$$inline_751_opt_exception_target$$inline_203$$;
      var $logRecord$$inline_754$$ = $level$$15_logRecord$$inline_199$$;
      if ($JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$.$a$) {
        for (var $i$$inline_755$$ = 0, $handler$$inline_756$$ = void 0;$handler$$inline_756$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_753_msg$$6$$.$a$[$i$$inline_755$$];$i$$inline_755$$++) {
          $handler$$inline_756$$($logRecord$$inline_754$$);
        }
      }
      $msg$$inline_751_opt_exception_target$$inline_203$$ = $msg$$inline_751_opt_exception_target$$inline_203$$.$b$;
    }
  }
};
function $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$($JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$self$$, $msg$$11$$) {
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$self$$.log($goog$debug$Logger$Level$INFO$$, $msg$$11$$, void 0);
}
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null;
function $goog$debug$LogManager$getLogger$$($name$$89$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$d$ = $goog$debug$Logger$Level$CONFIG$$);
  var $JSCompiler_temp$$26_logger$$inline_213$$;
  if (!($JSCompiler_temp$$26_logger$$inline_213$$ = $goog$debug$LogManager$loggers_$$[$name$$89$$])) {
    $JSCompiler_temp$$26_logger$$inline_213$$ = new $goog$debug$Logger$$($name$$89$$);
    var $lastDotIndex$$inline_214_parentLogger$$inline_216$$ = $name$$89$$.lastIndexOf("."), $leafName$$inline_215$$ = $name$$89$$.substr($lastDotIndex$$inline_214_parentLogger$$inline_216$$ + 1), $lastDotIndex$$inline_214_parentLogger$$inline_216$$ = $goog$debug$LogManager$getLogger$$($name$$89$$.substr(0, $lastDotIndex$$inline_214_parentLogger$$inline_216$$));
    $lastDotIndex$$inline_214_parentLogger$$inline_216$$.$c$ || ($lastDotIndex$$inline_214_parentLogger$$inline_216$$.$c$ = {});
    $lastDotIndex$$inline_214_parentLogger$$inline_216$$.$c$[$leafName$$inline_215$$] = $JSCompiler_temp$$26_logger$$inline_213$$;
    $JSCompiler_temp$$26_logger$$inline_213$$.$b$ = $lastDotIndex$$inline_214_parentLogger$$inline_216$$;
    $goog$debug$LogManager$loggers_$$[$name$$89$$] = $JSCompiler_temp$$26_logger$$inline_213$$;
  }
  return $JSCompiler_temp$$26_logger$$inline_213$$;
}
;function $z$common$messages$MessageBuilder$$() {
  this.$stockpile$ = {};
  this.text = this.$culled$ = this.terrain = null;
  this.$level$ = "usual";
  this.$points$ = 0;
  this.$a$ = !0;
}
function $JSCompiler_StaticMethods_addCullZombieMessage$$($JSCompiler_StaticMethods_addCullZombieMessage$self$$, $culled$$) {
  $JSCompiler_StaticMethods_addCullZombieMessage$self$$.$culled$ = $culled$$;
  $JSCompiler_StaticMethods_addCullZombieMessage$self$$.$a$ = !1;
}
;function $z$service$world$World$$($services$$1$$) {
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$1$$, $z$common$Resources$REPOSITORY$$);
  this.$g$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$1$$, $z$common$Resources$RULEBOOK$$);
  this.$k$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$1$$, "service_terrain_generator");
  this.$d$ = 0;
  this.$c$ = null;
  this.$i$ = new $mugd$utils$Grid$$;
  this.$b$ = {};
  this.$f$ = this.$a$.$a$(new $z$common$data$ActorData$$(null, "modified", "actor_world", {}, 0));
  var $characterGenerator$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$1$$, "service_character_generator");
  $JSCompiler_StaticMethods__createCharacters$$(this.$g$, $characterGenerator$$, this.$f$);
  this.$h$ = {};
  this.$j$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$1$$, "game_ender");
}
$z$service$world$World$$.prototype.$e$ = $goog$debug$LogManager$getLogger$$("z.service.world.World");
function $JSCompiler_StaticMethods__createCharacters$$($rulebook$$, $characterGenerator$$1$$, $owner$$2$$) {
  $goog$array$forEach$$($rulebook$$.$b$, function($archetype$$) {
    for (var $i$$112$$ = 0;$i$$112$$ < $archetype$$.$frequency$;$i$$112$$ += 1) {
      $JSCompiler_StaticMethods_getCharacterByArchetype$$($characterGenerator$$1$$, $archetype$$.type, $owner$$2$$.$guid$);
    }
  });
}
function $JSCompiler_StaticMethods_actorEndTurn$$($JSCompiler_StaticMethods_actorEndTurn$self$$, $endTurnData$$) {
  var $actor$$5$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$($JSCompiler_StaticMethods_actorEndTurn$self$$.$a$, $endTurnData$$.$a$);
  $goog$array$forEach$$($endTurnData$$.$b$, function($entityData$$1$$) {
    if ($entityData$$1$$ instanceof $z$common$data$ProjectData$$) {
      var $character$$inline_229_project$$inline_224$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $entityData$$1$$.$guid$);
      null != $character$$inline_229_project$$inline_224$$ && $character$$inline_229_project$$inline_224$$.$b$ !== $actor$$5$$.$guid$ ? this.$e$.log($goog$debug$Logger$Level$WARNING$$, "project is not owned by the correct actor", void 0) : ($JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$(this.$e$, "Received project service side"), this.$a$.$a$($entityData$$1$$));
    } else {
      $entityData$$1$$ instanceof $z$common$data$CharacterData$$ && ($character$$inline_229_project$$inline_224$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $entityData$$1$$.$guid$), null != $character$$inline_229_project$$inline_224$$ && $character$$inline_229_project$$inline_224$$.$b$ !== $actor$$5$$.$guid$ ? this.$e$.log($goog$debug$Logger$Level$WARNING$$, "character is not owned by the correct actor", void 0) : ($JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$(this.$e$, 
      "Received character service side"), $JSCompiler_StaticMethods_assignTo$$($character$$inline_229_project$$inline_224$$, $entityData$$1$$.$a$)));
    }
  }, $JSCompiler_StaticMethods_actorEndTurn$self$$);
  $JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$$($JSCompiler_StaticMethods_actorEndTurn$self$$);
}
function $JSCompiler_StaticMethods__doBeforeFirstTurn$$($JSCompiler_StaticMethods__doBeforeFirstTurn$self$$) {
  $goog$object$forEach$$($JSCompiler_StaticMethods__doBeforeFirstTurn$self$$.$b$, function($actor$$8$$) {
    var $characters_query$$3$$ = new $z$common$EntityQuery$$;
    $characters_query$$3$$.$a$ = this.$f$.$guid$;
    $characters_query$$3$$.$category$ = $z$common$rulebook$category$CHARACTER_TYPE$$;
    $characters_query$$3$$ = $JSCompiler_StaticMethods_choose$$(this.$a$, $characters_query$$3$$);
    $goog$array$forEach$$($characters_query$$3$$, function($character$$2$$) {
      $character$$2$$.update(null, null, $actor$$8$$.$guid$);
    });
  }, $JSCompiler_StaticMethods__doBeforeFirstTurn$self$$);
  $JSCompiler_StaticMethods__expandWorld$$($JSCompiler_StaticMethods__doBeforeFirstTurn$self$$);
  $JSCompiler_StaticMethods__distributeZombies$$($JSCompiler_StaticMethods__doBeforeFirstTurn$self$$);
}
function $JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$) {
  console.log("World.endTurn begins");
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$e$, "World.endTurn begins");
  $JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$d$ || $JSCompiler_StaticMethods__doBeforeFirstTurn$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$);
  var $messages_tickResult$$ = $JSCompiler_StaticMethods_tick$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$), $killed$$2$$ = $messages_tickResult$$.$killed$, $messages_tickResult$$ = $messages_tickResult$$.$messages$, $actorGuid$$;
  for ($actorGuid$$ in $JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$b$) {
    if ($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$b$.hasOwnProperty($actorGuid$$)) {
      var $startTurn$$ = $JSCompiler_StaticMethods_createStartTurnData$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$, $actorGuid$$, $killed$$2$$, $messages_tickResult$$);
      $JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$h$[$actorGuid$$]($startTurn$$);
    }
  }
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$($JSCompiler_StaticMethods_z_service_world_World_prototype$endTurn$self$$.$e$, "World.endTurn ends");
  console.log("World.endTurn ends");
}
function $JSCompiler_StaticMethods_createStartTurnData$$($JSCompiler_StaticMethods_createStartTurnData$self$$, $actorGuid$$1$$, $killed$$3$$, $messageBuilders_messages$$1$$) {
  var $tiles$$1$$ = $JSCompiler_StaticMethods_getVisibleTiles$$($JSCompiler_StaticMethods_createStartTurnData$self$$), $visibleProjects$$ = $JSCompiler_StaticMethods_getVisibleProjects$$($JSCompiler_StaticMethods_createStartTurnData$self$$), $characters$$1$$ = $JSCompiler_StaticMethods_getVisibleCharacters$$($JSCompiler_StaticMethods_createStartTurnData$self$$), $entities$$1$$ = [];
  $messageBuilders_messages$$1$$ = $goog$array$map$$($goog$array$filter$$($messageBuilders_messages$$1$$, function($mb$$) {
    return !$mb$$.$a$;
  }), function($mb$$1$$) {
    var $message$$inline_232$$ = {$level$:$mb$$1$$.$level$}, $JSCompiler_inline_result$$697_obj$$inline_774$$;
    a: {
      $JSCompiler_inline_result$$697_obj$$inline_774$$ = $mb$$1$$.$stockpile$;
      for (var $key$$inline_775$$ in $JSCompiler_inline_result$$697_obj$$inline_774$$) {
        $JSCompiler_inline_result$$697_obj$$inline_774$$ = !1;
        break a;
      }
      $JSCompiler_inline_result$$697_obj$$inline_774$$ = !0;
    }
    $JSCompiler_inline_result$$697_obj$$inline_774$$ || ($message$$inline_232$$.$stockpile$ = $mb$$1$$.$stockpile$);
    $mb$$1$$.terrain && ($message$$inline_232$$.terrain = $mb$$1$$.terrain);
    $mb$$1$$.$culled$ && ($message$$inline_232$$.$culled$ = $mb$$1$$.$culled$);
    $mb$$1$$.text && ($message$$inline_232$$.text = $mb$$1$$.text);
    $mb$$1$$.$points$ && ($message$$inline_232$$.$points$ = $mb$$1$$.$points$);
    $message$$inline_232$$.$template$ = "important" === $mb$$1$$.$level$ ? "game_over" : "chatter";
    return $message$$inline_232$$;
  });
  $goog$array$extend$$($entities$$1$$, $tiles$$1$$, $visibleProjects$$, $characters$$1$$);
  $entities$$1$$.push($z$common$data$ActorData$fromEntity$$($JSCompiler_StaticMethods_createStartTurnData$self$$.$b$[$actorGuid$$1$$]));
  return new $z$common$data$StartTurnData$$($entities$$1$$, $killed$$3$$, $messageBuilders_messages$$1$$, $JSCompiler_StaticMethods_createStartTurnData$self$$.$d$, $JSCompiler_StaticMethods_createStartTurnData$self$$.$c$);
}
function $JSCompiler_StaticMethods_getVisibleTiles$$($JSCompiler_StaticMethods_getVisibleTiles$self$$) {
  return $JSCompiler_StaticMethods_getVisibleTiles$self$$.$a$.map(function($entity$$15$$) {
    return $z$common$data$TileData$fromEntity$$($entity$$15$$);
  }, function($entity$$16$$) {
    return "tile" === $entity$$16$$.$meta$.$category$;
  });
}
function $JSCompiler_StaticMethods_getVisibleProjects$$($JSCompiler_StaticMethods_getVisibleProjects$self$$) {
  return $JSCompiler_StaticMethods_getVisibleProjects$self$$.$a$.map(function($item$$2$$) {
    return $z$common$data$ProjectData$fromEntity$$($item$$2$$);
  }, function($entity$$17$$) {
    return $entity$$17$$ instanceof $z$common$entities$Project$$ ? !0 : !1;
  });
}
function $JSCompiler_StaticMethods_getVisibleCharacters$$($JSCompiler_StaticMethods_getVisibleCharacters$self$$) {
  return $JSCompiler_StaticMethods_getVisibleCharacters$self$$.$a$.map(function($item$$3$$) {
    return $z$common$data$CharacterData$fromEntity$$($item$$3$$);
  }, function($entity$$18$$) {
    return $entity$$18$$ instanceof $z$common$entities$Character$$ ? !0 : !1;
  });
}
function $JSCompiler_StaticMethods_tick$$($JSCompiler_StaticMethods_tick$self$$) {
  $JSCompiler_StaticMethods_cleanUp$$($JSCompiler_StaticMethods_tick$self$$.$a$);
  $JSCompiler_StaticMethods__endProjects$$($JSCompiler_StaticMethods_tick$self$$);
  $JSCompiler_StaticMethods__consumeUpkeep$$($JSCompiler_StaticMethods_tick$self$$);
  var $killed$$4$$ = $JSCompiler_StaticMethods_resetState$$($JSCompiler_StaticMethods_tick$self$$.$a$);
  $JSCompiler_StaticMethods__expandWorld$$($JSCompiler_StaticMethods_tick$self$$);
  var $messages$$2$$ = [], $messages$$2$$ = $goog$array$concat$$($messages$$2$$, $JSCompiler_StaticMethods__advanceProjects$$($JSCompiler_StaticMethods_tick$self$$)), $messages$$2$$ = $goog$array$concat$$($messages$$2$$, $JSCompiler_StaticMethods__endProjects$$($JSCompiler_StaticMethods_tick$self$$));
  $JSCompiler_StaticMethods__distributeZombies$$($JSCompiler_StaticMethods_tick$self$$);
  $JSCompiler_StaticMethods__advanceTime$$($JSCompiler_StaticMethods_tick$self$$);
  $goog$object$forEach$$($JSCompiler_StaticMethods_tick$self$$.$b$, function($actor$$9$$) {
    var $effects_people$$inline_237_query$$inline_236$$;
    $effects_people$$inline_237_query$$inline_236$$ = new $z$common$EntityQuery$$;
    $effects_people$$inline_237_query$$inline_236$$.$a$ = $actor$$9$$.$guid$;
    $effects_people$$inline_237_query$$inline_236$$.$b$ = !0;
    $effects_people$$inline_237_query$$inline_236$$.$category$ = $z$common$rulebook$category$CHARACTER_TYPE$$;
    $effects_people$$inline_237_query$$inline_236$$ = this.$a$.filter($effects_people$$inline_237_query$$inline_236$$);
    $effects_people$$inline_237_query$$inline_236$$ = $JSCompiler_StaticMethods_getEffects$$(this.$j$, {turn:this.$d$, people:$effects_people$$inline_237_query$$inline_236$$.length});
    var $msg$$16$$ = new $z$common$messages$MessageBuilder$$;
    $JSCompiler_StaticMethods__applyEffects$$(this, $effects_people$$inline_237_query$$inline_236$$, $actor$$9$$, $msg$$16$$);
    $messages$$2$$.push($msg$$16$$);
  }, $JSCompiler_StaticMethods_tick$self$$);
  $JSCompiler_StaticMethods_cleanUp$$($JSCompiler_StaticMethods_tick$self$$.$a$);
  return {$killed$:$killed$$4$$, $messages$:$messages$$2$$};
}
function $JSCompiler_StaticMethods__distributeZombies$$($JSCompiler_StaticMethods__distributeZombies$self_tiles$$3$$) {
  var $query$$4$$ = new $z$common$EntityQuery$$;
  $query$$4$$.$category$ = "tile";
  $JSCompiler_StaticMethods__distributeZombies$self_tiles$$3$$ = $JSCompiler_StaticMethods__distributeZombies$self_tiles$$3$$.$a$.filter($query$$4$$.match.bind($query$$4$$));
  $JSCompiler_StaticMethods_distribute$$($JSCompiler_StaticMethods__distributeZombies$self_tiles$$3$$);
}
function $JSCompiler_StaticMethods__advanceTime$$($JSCompiler_StaticMethods__advanceTime$self$$) {
  $JSCompiler_StaticMethods__advanceTime$self$$.$d$ += 1;
  var $year$$1$$ = $JSCompiler_StaticMethods__advanceTime$self$$.$g$.year;
  $JSCompiler_StaticMethods__advanceTime$self$$.$c$ = $year$$1$$[($JSCompiler_StaticMethods__advanceTime$self$$.$d$ - 1) % $year$$1$$.length];
}
function $JSCompiler_StaticMethods__endProjects$$($JSCompiler_StaticMethods__endProjects$self$$) {
  var $projects$$ = $JSCompiler_StaticMethods__endProjects$self$$.$a$.filter(function($entity$$19$$) {
    return $entity$$19$$ instanceof $z$common$entities$Project$$ && "kill" === $entity$$19$$.$a$ ? !0 : !1;
  });
  return $goog$array$map$$($projects$$, function($project$$3$$) {
    var $msg$$17$$ = new $z$common$messages$MessageBuilder$$, $effects$$1$$ = $project$$3$$.trigger({end:!0});
    $JSCompiler_StaticMethods__applyEffects$$(this, $effects$$1$$, $project$$3$$, $msg$$17$$);
    return $msg$$17$$;
  }, $JSCompiler_StaticMethods__endProjects$self$$);
}
function $JSCompiler_StaticMethods__consumeUpkeep$$($JSCompiler_StaticMethods__consumeUpkeep$self$$) {
  $JSCompiler_StaticMethods__consumeUpkeep$self$$.$a$.map(function($entity$$20$$) {
    var $owner$$3$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$($JSCompiler_StaticMethods__consumeUpkeep$self$$.$a$, $entity$$20$$.$b$);
    if (!$owner$$3$$) {
      debugger;
    }
    var $stockpile$$1$$ = $owner$$3$$.$stockpile$;
    $goog$object$forEach$$($entity$$20$$.$meta$.$upkeep$, function($value$$109$$, $name$$91$$) {
      $stockpile$$1$$.$take$($name$$91$$, $value$$109$$) !== $value$$109$$ && $JSCompiler_StaticMethods_setState$$($entity$$20$$, "kill");
    });
  }, function($entity$$21$$) {
    return $entity$$21$$.$b$ !== $JSCompiler_StaticMethods__consumeUpkeep$self$$.$f$.$guid$;
  });
}
function $JSCompiler_StaticMethods__advanceProjects$$($JSCompiler_StaticMethods__advanceProjects$self$$) {
  var $projects$$1$$ = $JSCompiler_StaticMethods__advanceProjects$self$$.$a$.filter(function($entity$$22$$) {
    return $entity$$22$$ instanceof $z$common$entities$Project$$ && "dead" !== $entity$$22$$.$a$ ? !0 : !1;
  });
  $projects$$1$$.sort(function($lhs$$, $rhs$$) {
    return $lhs$$.$i$ - $rhs$$.$i$;
  });
  var $globalWork$$ = {};
  return $goog$array$map$$($projects$$1$$, function($project$$4$$) {
    $globalWork$$[$project$$4$$.$b$] || ($globalWork$$[$project$$4$$.$b$] = $z$service$world$WorkCalculator$calculateWithRepository$$(this.$a$, $z$common$queries$getUnassignedQuery$$($project$$4$$.$b$)));
    var $msg$$18$$ = new $z$common$messages$MessageBuilder$$;
    $JSCompiler_StaticMethods__advanceProject$$(this, $project$$4$$, $msg$$18$$, $globalWork$$[$project$$4$$.$b$]);
    console.log("globalWork", $JSCompiler_StaticMethods_peekAll$$($globalWork$$[$project$$4$$.$b$]));
    return $msg$$18$$;
  }, $JSCompiler_StaticMethods__advanceProjects$self$$);
}
function $JSCompiler_StaticMethods__advanceProject$$($JSCompiler_StaticMethods__advanceProject$self$$, $project$$5$$, $message$$25$$, $globalWork$$1_investment_shouldTriggerComplete$$) {
  var $effects$$2_tile$$7$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$($JSCompiler_StaticMethods__advanceProject$self$$.$a$, $project$$5$$.$tile$), $stockpile$$2$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$($JSCompiler_StaticMethods__advanceProject$self$$.$a$, $project$$5$$.$b$).$stockpile$, $cost$$1$$ = $JSCompiler_StaticMethods_diffAll$$($project$$5$$.$d$, $project$$5$$.$meta$.$cost$), $initialCompletion$$ = $project$$5$$.$f$, $work$$ = $z$service$world$WorkCalculator$calculateWithRepository$$($JSCompiler_StaticMethods__advanceProject$self$$.$a$, 
  function($entity$$23$$) {
    return $entity$$23$$ instanceof $z$common$entities$Character$$ ? $entity$$23$$.$c$ === $project$$5$$.$guid$ : !1;
  }), $time$$1$$ = new $z$common$Stockpile$$;
  $time$$1$$.add("game://static/time", 1);
  $globalWork$$1_investment_shouldTriggerComplete$$ = $JSCompiler_StaticMethods_withdraw$$(new $z$common$Cashier$$($work$$, $time$$1$$, $stockpile$$2$$, $globalWork$$1_investment_shouldTriggerComplete$$), $cost$$1$$);
  $globalWork$$1_investment_shouldTriggerComplete$$ = $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$$($project$$5$$, $globalWork$$1_investment_shouldTriggerComplete$$);
  $JSCompiler_StaticMethods_addZombieActivity$$($effects$$2_tile$$7$$, ($project$$5$$.$f$ - $initialCompletion$$) * $project$$5$$.$activity$ | 0);
  $effects$$2_tile$$7$$ = $project$$5$$.trigger({complete:$globalWork$$1_investment_shouldTriggerComplete$$, season:$JSCompiler_StaticMethods__advanceProject$self$$.$c$, end:!1});
  $JSCompiler_StaticMethods__applyEffects$$($JSCompiler_StaticMethods__advanceProject$self$$, $effects$$2_tile$$7$$, $project$$5$$, $message$$25$$);
}
function $JSCompiler_StaticMethods__applyEffects$$($JSCompiler_StaticMethods__applyEffects$self$$, $effects$$3$$, $entity$$24$$, $message$$26$$) {
  $goog$array$forEach$$($effects$$3$$, function($effect$$) {
    this["_apply_" + $effect$$.type]($effect$$.args, $entity$$24$$, $message$$26$$);
  }, $JSCompiler_StaticMethods__applyEffects$self$$);
}
$z$service$world$World$$.prototype._apply_effect_stockpile = function $$z$service$world$World$$$$_apply_effect_stockpile$($effect$$1$$, $project$$6$$, $message$$27$$) {
  var $owner$$5$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $project$$6$$.$b$);
  $goog$array$forEach$$($effect$$1$$, function($amount$$inline_241_resource$$3$$) {
    $owner$$5$$.$stockpile$.add($amount$$inline_241_resource$$3$$.type, $amount$$inline_241_resource$$3$$.magnitude);
    var $type$$inline_240$$ = $amount$$inline_241_resource$$3$$.type;
    $amount$$inline_241_resource$$3$$ = $amount$$inline_241_resource$$3$$.magnitude;
    $message$$27$$.$stockpile$[$type$$inline_240$$] = $message$$27$$.$stockpile$[$type$$inline_240$$] ? $message$$27$$.$stockpile$[$type$$inline_240$$] + $amount$$inline_241_resource$$3$$ : $amount$$inline_241_resource$$3$$;
    $message$$27$$.$a$ = !1;
  }, this);
};
$z$service$world$World$$.prototype._apply_effect_terrain = function $$z$service$world$World$$$$_apply_effect_terrain$($effect$$2$$, $project$$7_tileData$$, $message$$28$$) {
  $project$$7_tileData$$ = $z$common$data$TileData$fromEntity$$($JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $project$$7_tileData$$.$tile$));
  var $terrainMeta$$ = $JSCompiler_StaticMethods_getMetaClass$$(this.$g$, $effect$$2$$);
  $project$$7_tileData$$.terrain = $goog$object$unsafeClone$$($project$$7_tileData$$.terrain);
  $project$$7_tileData$$.terrain[$terrainMeta$$.$zone$] = $effect$$2$$;
  this.$a$.$a$($project$$7_tileData$$);
  $message$$28$$.terrain = $effect$$2$$;
  $message$$28$$.$a$ = !1;
};
$z$service$world$World$$.prototype._apply_effect_cull_zombies = function $$z$service$world$World$$$$_apply_effect_cull_zombies$($effect$$3_magnitude$$, $project$$8$$, $message$$29$$) {
  var $tile$$9$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $project$$8$$.$tile$);
  $effect$$3_magnitude$$ = -1 * ($goog$array$reduce$$(this.$a$.map(function($character$$6$$) {
    return $character$$6$$.$combat$;
  }, function($entity$$25$$) {
    return $entity$$25$$ instanceof $z$common$entities$Character$$ ? $entity$$25$$.$c$ === $project$$8$$.$guid$ : !1;
  }), function($x$$71$$, $y$$45$$) {
    return $x$$71$$ + $y$$45$$;
  }, 0, this) * $effect$$3_magnitude$$.$skill$ + $effect$$3_magnitude$$.$magnitude$) | 0;
  $JSCompiler_StaticMethods_addZombieDensity$$($tile$$9$$, $effect$$3_magnitude$$);
  $JSCompiler_StaticMethods_addCullZombieMessage$$($message$$29$$, $effect$$3_magnitude$$);
};
$z$service$world$World$$.prototype._apply_effect_end = function $$z$service$world$World$$$$_apply_effect_end$($effect$$4$$, $project$$9$$) {
  $effect$$4$$ && $JSCompiler_StaticMethods_setState$$($project$$9$$, "kill");
};
$z$service$world$World$$.prototype._apply_effect_game_over = function $$z$service$world$World$$$$_apply_effect_game_over$($effect$$5$$) {
  "victory" === $effect$$5$$ ? console.log("Victory!") : console.log("Defeat!");
};
$z$service$world$World$$.prototype._apply_effect_message = function $$z$service$world$World$$$$_apply_effect_message$($effect$$6$$, $actor$$12$$, $message$$32$$) {
  $message$$32$$.text = $effect$$6$$.text;
  $message$$32$$.$a$ = !1;
  $message$$32$$.$level$ = $effect$$6$$.$level$;
};
$z$service$world$World$$.prototype._apply_effect_points = function $$z$service$world$World$$$$_apply_effect_points$($effect$$7$$, $actor$$13_entity$$26$$, $message$$33$$) {
  $actor$$13_entity$$26$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this.$a$, $actor$$13_entity$$26$$.$b$);
  $actor$$13_entity$$26$$.$e$ += $effect$$7$$;
  $message$$33$$.$points$ += $effect$$7$$;
  $message$$33$$.$a$ = !1;
};
$z$service$world$World$$.prototype._apply_effect_points_per_character = function $$z$service$world$World$$$$_apply_effect_points_per_character$($effect$$8_points$$2$$, $actor$$14$$, $message$$34$$) {
  var $query$$6$$ = new $z$common$EntityQuery$$;
  $query$$6$$.$a$ = $actor$$14$$.$guid$;
  $query$$6$$.$b$ = !0;
  $query$$6$$.$category$ = $z$common$rulebook$category$CHARACTER_TYPE$$;
  $effect$$8_points$$2$$ *= this.$a$.filter($query$$6$$).length;
  $actor$$14$$.$e$ += $effect$$8_points$$2$$;
  $message$$34$$.$points$ += $effect$$8_points$$2$$;
  $message$$34$$.$a$ = !1;
};
function $JSCompiler_StaticMethods__expandWorld$$($JSCompiler_StaticMethods__expandWorld$self$$) {
  var $x_min$$ = -10, $x_max$$ = 10, $y_min$$ = -10, $y_max$$ = 10;
  $JSCompiler_StaticMethods__expandWorld$self$$.$a$.map(function($entity$$27$$) {
    var $range$$5$$ = $entity$$27$$.$m$ ? $entity$$27$$.$m$ + 5 : 0;
    $x_min$$ = Math.min($x_min$$, $entity$$27$$.position.x - $range$$5$$);
    $x_max$$ = Math.max($x_max$$, $entity$$27$$.position.x + $range$$5$$);
    $y_min$$ = Math.min($y_min$$, $entity$$27$$.position.y - $range$$5$$);
    $y_max$$ = Math.max($y_max$$, $entity$$27$$.position.y + $range$$5$$);
  }, function($entity$$28$$) {
    return null !== $entity$$28$$.position;
  });
  for (var $y$$46$$ = $y_min$$;$y$$46$$ <= $y_max$$;$y$$46$$++) {
    for (var $x$$72$$ = $x_min$$;$x$$72$$ <= $x_max$$;$x$$72$$++) {
      if (!$goog$isDef$$($JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods__expandWorld$self$$.$i$, $x$$72$$, $y$$46$$))) {
        var $tile$$10_tileData$$1$$ = $JSCompiler_StaticMethods__expandWorld$self$$.$k$.$c$($x$$72$$, $y$$46$$);
        $tile$$10_tileData$$1$$.$ownerId$ = $JSCompiler_StaticMethods__expandWorld$self$$.$f$.$guid$;
        $tile$$10_tileData$$1$$ = $JSCompiler_StaticMethods__expandWorld$self$$.$a$.$a$($tile$$10_tileData$$1$$);
        $JSCompiler_StaticMethods_setNode$$($JSCompiler_StaticMethods__expandWorld$self$$.$i$, $x$$72$$, $y$$46$$, $tile$$10_tileData$$1$$);
      }
    }
  }
}
;var $z$common$Resources$INJECTOR$$ = "$injector", $z$common$Resources$RULEBOOK$$ = "common_rulebook", $z$common$Resources$REPOSITORY$$ = "common_repository";
function $z$common$data$TileData$$($guid$$4$$, $state$$3$$, $ownerId$$, $x$$73$$, $y$$47$$, $terrain$$5$$, $type$$120$$, $zombieData$$) {
  this.$guid$ = $guid$$4$$;
  this.state = $state$$3$$;
  this.$ownerId$ = $ownerId$$;
  this.x = $x$$73$$;
  this.y = $y$$47$$;
  this.terrain = $terrain$$5$$;
  this.type = $type$$120$$;
  this.$category$ = "tile";
  this.$zombieData$ = $zombieData$$;
}
function $z$common$data$TileData$fromEntity$$($tile$$11$$) {
  return new $z$common$data$TileData$$($tile$$11$$.$guid$, $tile$$11$$.$a$, $tile$$11$$.$b$, $tile$$11$$.position.x, $tile$$11$$.position.y, $tile$$11$$.terrain, $tile$$11$$.$meta$.type, $tile$$11$$.$zombieData$);
}
;function $z$common$data$StartTurnData$$($entities$$2$$, $killed$$5$$, $messages$$5$$, $turn$$2$$, $season$$) {
  this.$a$ = $entities$$2$$;
  this.$turn$ = $turn$$2$$;
  this.$season$ = $season$$;
  this.$killed$ = $killed$$5$$;
  this.$messages$ = $messages$$5$$;
}
;function $z$client$WorldProxy$$($services$$2$$) {
  $goog$events$EventTarget$$.call(this);
  $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$2$$, "common_ruleset");
  this.$e$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$2$$, "client_world service")();
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$2$$, $z$common$Resources$REPOSITORY$$);
  this.$f$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$2$$, "client_message_log_facet");
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$2$$, "client_player_facet");
  this.$b$ = 0;
}
$goog$inherits$$($z$client$WorldProxy$$, $goog$events$EventTarget$$);
$z$client$WorldProxy$$.prototype.$i$ = function $$z$client$WorldProxy$$$$$i$$($startTurnData$$) {
  this.$b$ = $startTurnData$$.$turn$;
  this.$c$ = $startTurnData$$.$season$;
  $goog$array$forEach$$($startTurnData$$.$a$, this.$a$.$a$, this.$a$);
  $goog$array$forEach$$($startTurnData$$.$killed$, function($entity$$30_guid$$5$$) {
    $entity$$30_guid$$5$$ = $JSCompiler_StaticMethods_z_common_EntityRepository_prototype$get$$(this, $entity$$30_guid$$5$$);
    null === $entity$$30_guid$$5$$ || $JSCompiler_StaticMethods_setState$$($entity$$30_guid$$5$$, "dead");
  }, this.$a$);
  $JSCompiler_StaticMethods_resetState$$(this.$a$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $z$client$events$BeforeStartTurn$$({$turn$:this.$b$, $season$:this.$c$}));
  $JSCompiler_StaticMethods_sendMessages$$(this, $startTurnData$$.$messages$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $z$client$events$StartTurn$$({$turn$:this.$b$, $season$:this.$c$}));
  console.log($startTurnData$$.$messages$);
};
function $JSCompiler_StaticMethods_sendMessages$$($JSCompiler_StaticMethods_sendMessages$self$$, $messages$$6$$) {
  $goog$array$forEach$$($messages$$6$$, function($message$$35$$) {
    $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$$(this.$f$, JSON.stringify($message$$35$$, null, 2), [$message$$35$$.$level$], $message$$35$$);
  }, $JSCompiler_StaticMethods_sendMessages$self$$);
}
function $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$$($JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$) {
  if (null === $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$d$.guid) {
    throw "Tried to end turn with no actor";
  }
  var $projects$$2$$ = $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$a$.map(function($item$$4$$) {
    return $z$common$data$ProjectData$fromEntity$$($item$$4$$);
  }, function($entity$$32$$) {
    return $entity$$32$$ instanceof $z$common$entities$Project$$ && "pass" !== $entity$$32$$.$a$ && "dead" !== $entity$$32$$.$a$ ? !0 : !1;
  }), $characters$$3$$ = $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$a$.map(function($item$$5$$) {
    return $z$common$data$CharacterData$fromEntity$$($item$$5$$);
  }, function($entity$$33$$) {
    return $entity$$33$$ instanceof $z$common$entities$Character$$ && "pass" !== $entity$$33$$.$a$ && "dead" !== $entity$$33$$.$a$ ? !0 : !1;
  }), $data$$41$$ = [];
  $goog$array$extend$$($data$$41$$, $projects$$2$$, $characters$$3$$);
  $JSCompiler_StaticMethods_actorEndTurn$$($JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$e$, new $z$common$data$ClientEndTurn$$($JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$d$.guid, $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$self$$.$b$, $data$$41$$));
}
;function $goog$events$EventHandler$$($opt_scope$$1$$) {
  $goog$Disposable$$.call(this);
  this.$b$ = $opt_scope$$1$$;
  this.$a$ = {};
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$JSCompiler_prototypeAlias$$ = $goog$events$EventHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($src$$19$$, $type$$121_type$$inline_266$$, $opt_fn$$7$$, $opt_capture$$5$$) {
  $goog$isArray$$($type$$121_type$$inline_266$$) || ($type$$121_type$$inline_266$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$121_type$$inline_266$$.toString()), $type$$121_type$$inline_266$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$$inline_270$$ = 0;$i$$inline_270$$ < $type$$121_type$$inline_266$$.length;$i$$inline_270$$++) {
    var $listenerObj$$inline_271$$ = $goog$events$listen$$($src$$19$$, $type$$121_type$$inline_266$$[$i$$inline_270$$], $opt_fn$$7$$ || this.handleEvent, $opt_capture$$5$$ || !1, this.$b$ || this);
    if (!$listenerObj$$inline_271$$) {
      break;
    }
    this.$a$[$listenerObj$$inline_271$$.$goog_events_ListenableKey_prototype$key$] = $listenerObj$$inline_271$$;
  }
  return this;
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($listenerMap$$inline_279_src$$28$$, $listener$$68_type$$127$$, $listener$$inline_275_opt_fn$$11$$, $capture$$inline_278_opt_capture$$9$$, $opt_handler$$inline_277_opt_scope$$5$$) {
  if ($goog$isArray$$($listener$$68_type$$127$$)) {
    for (var $i$$115$$ = 0;$i$$115$$ < $listener$$68_type$$127$$.length;$i$$115$$++) {
      this.$unlisten$($listenerMap$$inline_279_src$$28$$, $listener$$68_type$$127$$[$i$$115$$], $listener$$inline_275_opt_fn$$11$$, $capture$$inline_278_opt_capture$$9$$, $opt_handler$$inline_277_opt_scope$$5$$);
    }
  } else {
    $listener$$inline_275_opt_fn$$11$$ = $listener$$inline_275_opt_fn$$11$$ || this.handleEvent, $opt_handler$$inline_277_opt_scope$$5$$ = $opt_handler$$inline_277_opt_scope$$5$$ || this.$b$ || this, $listener$$inline_275_opt_fn$$11$$ = $goog$events$wrapListener$$($listener$$inline_275_opt_fn$$11$$), $capture$$inline_278_opt_capture$$9$$ = !!$capture$$inline_278_opt_capture$$9$$, $listener$$68_type$$127$$ = $listenerMap$$inline_279_src$$28$$ && $listenerMap$$inline_279_src$$28$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] ? 
    $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$$inline_279_src$$28$$.$eventTargetListeners_$, String($listener$$68_type$$127$$), $listener$$inline_275_opt_fn$$11$$, $capture$$inline_278_opt_capture$$9$$, $opt_handler$$inline_277_opt_scope$$5$$) : $listenerMap$$inline_279_src$$28$$ ? ($listenerMap$$inline_279_src$$28$$ = $goog$events$getListenerMap_$$($listenerMap$$inline_279_src$$28$$)) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$$inline_279_src$$28$$, 
    $listener$$68_type$$127$$, $listener$$inline_275_opt_fn$$11$$, $capture$$inline_278_opt_capture$$9$$, $opt_handler$$inline_277_opt_scope$$5$$) : null : null, $listener$$68_type$$127$$ && ($goog$events$unlistenByKey$$($listener$$68_type$$127$$), delete this.$a$[$listener$$68_type$$127$$.$goog_events_ListenableKey_prototype$key$]);
  }
  return this;
};
$JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$() {
  $goog$object$forEach$$(this.$a$, $goog$events$unlistenByKey$$);
  this.$a$ = {};
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.removeAll();
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
function $z$client$facet$Facet$$() {
  $goog$events$EventTarget$$.call(this);
  this.$a$ = new $goog$events$EventHandler$$(this);
}
$goog$inherits$$($z$client$facet$Facet$$, $goog$events$EventTarget$$);
function $z$client$facet$EntityFacet$$() {
  $z$client$facet$Facet$$.call(this);
  this.$entity$ = ko.observable();
  this.$meta$ = ko.computed(this.$c$, this);
  this.guid = null;
  this.category = ko.computed(function() {
    var $meta$$1$$ = this.$meta$();
    return $meta$$1$$ ? $meta$$1$$.$category$ : void 0;
  }, this);
  this.name = ko.computed(function() {
    var $meta$$2$$ = this.$meta$();
    return $meta$$2$$ ? $meta$$2$$.name : void 0;
  }, this);
  this.description = ko.computed(function() {
    var $meta$$3$$ = this.$meta$();
    return $meta$$3$$ ? $meta$$3$$.description : void 0;
  }, this);
  this.type = ko.computed(function() {
    var $meta$$4$$ = this.$meta$();
    return $meta$$4$$ ? $meta$$4$$.type : void 0;
  }, this);
}
$goog$inherits$$($z$client$facet$EntityFacet$$, $z$client$facet$Facet$$);
function $JSCompiler_StaticMethods_setEntity$$($JSCompiler_StaticMethods_setEntity$self$$, $entity$$34$$) {
  if (!$JSCompiler_StaticMethods_setEntity$self$$.$entity$() || $JSCompiler_StaticMethods_setEntity$self$$.$entity$() && $JSCompiler_StaticMethods_setEntity$self$$.$entity$().$guid$ === $entity$$34$$.$guid$) {
    $JSCompiler_StaticMethods_setEntity$self$$.$entity$($entity$$34$$), $JSCompiler_StaticMethods_setEntity$self$$.guid = $JSCompiler_StaticMethods_setEntity$self$$.$entity$().$guid$, $JSCompiler_StaticMethods_setEntity$self$$.$a$.$listen$($entity$$34$$, $z$common$events$EventType$ENTITY_MODIFIED$$, $JSCompiler_StaticMethods_setEntity$self$$.$d$), $JSCompiler_StaticMethods_setEntity$self$$.$_update$();
  } else {
    throw ["Wrong entity, expected (", $JSCompiler_StaticMethods_setEntity$self$$.$entity$().$guid$, "), got (", $entity$$34$$.$guid$, ")"].join("");
  }
}
$z$client$facet$EntityFacet$$.prototype.$d$ = function $$z$client$facet$EntityFacet$$$$$d$$($event$$11$$) {
  $JSCompiler_StaticMethods_setEntity$$(this, $event$$11$$.$entity$);
};
$z$client$facet$EntityFacet$$.prototype.$_update$ = function $$z$client$facet$EntityFacet$$$$$_update$$() {
  throw {name:"NotImplementedException", message:"_setEntity"};
};
$z$client$facet$EntityFacet$$.prototype.$c$ = function $$z$client$facet$EntityFacet$$$$$c$$() {
  var $entity$$35$$ = this.$entity$();
  return $entity$$35$$ ? $entity$$35$$.$meta$ : null;
};
function $z$client$action$Action$$($name$$92$$) {
  this.name = $name$$92$$;
  this.$meta$ = null;
}
function $JSCompiler_StaticMethods_canExecute$$($JSCompiler_StaticMethods_canExecute$self$$, $args$$12$$) {
  return ($goog$isDef$$($args$$12$$) ? $goog$array$every$$($JSCompiler_StaticMethods_canExecute$self$$.$b$, function($item$$6$$) {
    return null != $args$$12$$[$item$$6$$];
  }, $JSCompiler_StaticMethods_canExecute$self$$) : 0 === $JSCompiler_StaticMethods_canExecute$self$$.$b$.length) ? $JSCompiler_StaticMethods_canExecute$self$$.$c$($args$$12$$) : !1;
}
$z$client$action$Action$$.prototype.$c$ = function $$z$client$action$Action$$$$$c$$() {
  return !1;
};
$z$client$action$Action$$.prototype.execute = function $$z$client$action$Action$$$$execute$($args$$14$$) {
  if (this.$c$($args$$14$$)) {
    this.$d$($args$$14$$);
  } else {
    throw {name:"Cannot execute with given arguments", args:$args$$14$$, "required args":this.$b$};
  }
};
$z$client$action$Action$$.prototype.$d$ = function $$z$client$action$Action$$$$$d$$() {
};
$z$client$action$Action$$.prototype.$b$ = [];
function $z$client$actions$AssignCharacterToProject$$() {
  $z$client$action$Action$$.call(this, "Assigns a character to a project");
  this.$meta$ = {type:"assign_character_to_a_project", $category$:"action", name:"Assigns a character to a project", description:"Assigns a character to a project"};
}
$goog$inherits$$($z$client$actions$AssignCharacterToProject$$, $z$client$action$Action$$);
$z$client$actions$AssignCharacterToProject$$.prototype.$a$ = $goog$debug$LogManager$getLogger$$("z.client.actions.AssignCharacterToProject");
$z$client$actions$AssignCharacterToProject$$.prototype.$c$ = function $$z$client$actions$AssignCharacterToProject$$$$$c$$($args$$16_targetEntity_targetEntityOK$$) {
  var $asset_assetEntity_assetEntityOK$$ = $args$$16_targetEntity_targetEntityOK$$.asset;
  $args$$16_targetEntity_targetEntityOK$$ = $args$$16_targetEntity_targetEntityOK$$.target.$entity$();
  $args$$16_targetEntity_targetEntityOK$$ = null !== $args$$16_targetEntity_targetEntityOK$$ && "project" === $args$$16_targetEntity_targetEntityOK$$.$meta$.$category$;
  $asset_assetEntity_assetEntityOK$$ = $asset_assetEntity_assetEntityOK$$.$entity$();
  $asset_assetEntity_assetEntityOK$$ = null !== $asset_assetEntity_assetEntityOK$$ && $asset_assetEntity_assetEntityOK$$.$meta$.$category$ === $z$common$rulebook$category$CHARACTER_TYPE$$;
  return $args$$16_targetEntity_targetEntityOK$$ && $asset_assetEntity_assetEntityOK$$;
};
$z$client$actions$AssignCharacterToProject$$.prototype.$d$ = function $$z$client$actions$AssignCharacterToProject$$$$$d$$($args$$17_targetEntity$$1$$) {
  var $asset$$1_assetEntity$$1$$ = $args$$17_targetEntity$$1$$.asset;
  $args$$17_targetEntity$$1$$ = $args$$17_targetEntity$$1$$.target.$entity$();
  $asset$$1_assetEntity$$1$$ = $asset$$1_assetEntity$$1$$.$entity$();
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$(this.$a$, "Assign " + $asset$$1_assetEntity$$1$$.name + " to " + $args$$17_targetEntity$$1$$.name);
  $JSCompiler_StaticMethods_assignTo$$($asset$$1_assetEntity$$1$$, $args$$17_targetEntity$$1$$.$guid$);
};
$z$client$actions$AssignCharacterToProject$$.prototype.$b$ = ["target", "asset"];
function $z$client$facet$CharacterFacet$$() {
  $z$client$facet$EntityFacet$$.call(this);
  this.name = ko.computed(this.$_getName$, this);
  this.health = ko.computed(this.$_getHealth$, this);
  this.combat = ko.computed(this.$_getCombat$, this);
  this.labour = ko.computed(this.$_getLabour$, this);
  this.knowledge = ko.computed(this.$_getKnowledge$, this);
  this.gender = ko.computed(this.$_getGender$, this);
  this.assignedTo = ko.computed(this.$_getAssignedTo$, this);
}
$goog$inherits$$($z$client$facet$CharacterFacet$$, $z$client$facet$EntityFacet$$);
$JSCompiler_prototypeAlias$$ = $z$client$facet$CharacterFacet$$.prototype;
$JSCompiler_prototypeAlias$$.$_getName$ = function $$JSCompiler_prototypeAlias$$$$_getName$$() {
  var $character$$8$$ = this.$entity$();
  return $character$$8$$ ? $character$$8$$.name : 0;
};
$JSCompiler_prototypeAlias$$.$_getHealth$ = function $$JSCompiler_prototypeAlias$$$$_getHealth$$() {
  var $character$$9$$ = this.$entity$();
  return $character$$9$$ ? $character$$9$$.$i$ : 0;
};
$JSCompiler_prototypeAlias$$.$_getCombat$ = function $$JSCompiler_prototypeAlias$$$$_getCombat$$() {
  var $character$$10$$ = this.$entity$();
  return $character$$10$$ ? $character$$10$$.$combat$ : 0;
};
$JSCompiler_prototypeAlias$$.$_getLabour$ = function $$JSCompiler_prototypeAlias$$$$_getLabour$$() {
  var $character$$11$$ = this.$entity$();
  return $character$$11$$ ? $character$$11$$.$f$ : 0;
};
$JSCompiler_prototypeAlias$$.$_getKnowledge$ = function $$JSCompiler_prototypeAlias$$$$_getKnowledge$$() {
  var $character$$12$$ = this.$entity$();
  return $character$$12$$ ? $character$$12$$.$d$ : 0;
};
$JSCompiler_prototypeAlias$$.$_getGender$ = function $$JSCompiler_prototypeAlias$$$$_getGender$$() {
  var $character$$13$$ = this.$entity$();
  return $character$$13$$ ? $character$$13$$.$l$ : 0;
};
$JSCompiler_prototypeAlias$$.$_getAssignedTo$ = function $$JSCompiler_prototypeAlias$$$$_getAssignedTo$$() {
  var $character$$14$$ = this.$entity$();
  return $character$$14$$ ? $character$$14$$.$c$ : null;
};
$JSCompiler_prototypeAlias$$.$_update$ = function $$JSCompiler_prototypeAlias$$$$_update$$() {
  this.$entity$();
};
function $z$common$entities$Entity$$($owner$$6_services$$3$$) {
  $goog$events$EventTarget$$.call(this);
  var $entityData$$2$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($owner$$6_services$$3$$, "entityData");
  this.$guid$ = $entityData$$2$$.$guid$;
  this.$meta$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($owner$$6_services$$3$$, "meta");
  this.position = null;
  this.$b$ = ($owner$$6_services$$3$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($owner$$6_services$$3$$, "owner")) ? $owner$$6_services$$3$$.$guid$ : null;
  if (!$entityData$$2$$.state) {
    throw "No state set on entity";
  }
  this.$a$ = $entityData$$2$$.state;
}
$goog$inherits$$($z$common$entities$Entity$$, $goog$events$EventTarget$$);
function $JSCompiler_StaticMethods_setState$$($JSCompiler_StaticMethods_setState$self$$, $state$$4$$) {
  $JSCompiler_StaticMethods_setState$self$$.$a$ !== $state$$4$$ && "dead" !== $JSCompiler_StaticMethods_setState$self$$.$a$ && ("kill" === $JSCompiler_StaticMethods_setState$self$$.$a$ && "dead" !== $state$$4$$ && console.log("Resurrected entity ", $JSCompiler_StaticMethods_setState$self$$), $JSCompiler_StaticMethods_setState$self$$.$a$ = $state$$4$$);
}
$z$common$entities$Entity$$.prototype.$k$ = function $$z$common$entities$Entity$$$$$k$$() {
};
$z$common$entities$Entity$$.prototype.update = function $$z$common$entities$Entity$$$$update$($entityData$$3$$, $meta$$5$$, $owner$$7$$) {
  var $updated$$ = !1;
  if ($entityData$$3$$) {
    var $state$$6$$ = $entityData$$3$$.state;
    this.$a$ !== $state$$6$$ && (this.$a$ = $state$$6$$, $updated$$ = !0);
  }
  $owner$$7$$ && $owner$$7$$ !== this.$b$ && (this.$b$ = $owner$$7$$, $updated$$ = !0);
  ($updated$$ = this.$_update$($entityData$$3$$, $meta$$5$$, $owner$$7$$) || $updated$$) && $JSCompiler_StaticMethods__dispatchModified$$(this);
  return $updated$$;
};
function $JSCompiler_StaticMethods__dispatchModified$$($JSCompiler_StaticMethods__dispatchModified$self$$) {
  $JSCompiler_StaticMethods__setModified$$($JSCompiler_StaticMethods__dispatchModified$self$$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods__dispatchModified$self$$, new $z$common$events$EntityModified$$($JSCompiler_StaticMethods__dispatchModified$self$$));
}
function $JSCompiler_StaticMethods__setModified$$($JSCompiler_StaticMethods__setModified$self$$) {
  "pass" === $JSCompiler_StaticMethods__setModified$self$$.$a$ && ($JSCompiler_StaticMethods__setModified$self$$.$a$ = "modified");
}
$z$common$entities$Entity$$.prototype.$_update$ = function $$z$common$entities$Entity$$$$$_update$$() {
  throw {name:"NotImplementedException", message:"update"};
};
function $z$common$entities$Character$$($characterData$$2_services$$4$$) {
  $z$common$entities$Entity$$.call(this, $characterData$$2_services$$4$$);
  $characterData$$2_services$$4$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($characterData$$2_services$$4$$, "entityData");
  this.name = $characterData$$2_services$$4$$.name;
  this.$l$ = $characterData$$2_services$$4$$.$e$;
  this.$combat$ = $characterData$$2_services$$4$$.$combat$;
  this.$d$ = $characterData$$2_services$$4$$.$c$;
  this.$f$ = $characterData$$2_services$$4$$.$d$;
  this.$i$ = $characterData$$2_services$$4$$.$b$;
  this.$c$ = $characterData$$2_services$$4$$.$a$;
  this.$traits$ = $JSCompiler_StaticMethods__parseTraits$$(this, $characterData$$2_services$$4$$);
}
$goog$inherits$$($z$common$entities$Character$$, $z$common$entities$Entity$$);
$z$common$entities$Character$$.prototype.$_update$ = function $$z$common$entities$Character$$$$$_update$$($entityData$$5_hasNewTraits$$) {
  var $updated$$1$$ = !1;
  if (null !== $entityData$$5_hasNewTraits$$) {
    if ($entityData$$5_hasNewTraits$$ instanceof $z$common$data$CharacterData$$) {
      this.name !== $entityData$$5_hasNewTraits$$.name && (this.name = $entityData$$5_hasNewTraits$$.name, $updated$$1$$ = !0);
      this.$combat$ !== $entityData$$5_hasNewTraits$$.$combat$ && (this.$combat$ = $entityData$$5_hasNewTraits$$.$combat$, $updated$$1$$ = !0);
      this.$d$ !== $entityData$$5_hasNewTraits$$.$c$ && (this.$d$ = $entityData$$5_hasNewTraits$$.$c$, $updated$$1$$ = !0);
      this.$f$ !== $entityData$$5_hasNewTraits$$.$d$ && (this.$f$ = $entityData$$5_hasNewTraits$$.$d$, $updated$$1$$ = !0);
      this.$i$ !== $entityData$$5_hasNewTraits$$.$b$ && (this.$i$ = $entityData$$5_hasNewTraits$$.$b$, $updated$$1$$ = !0);
      this.$c$ !== $entityData$$5_hasNewTraits$$.$a$ && (this.$c$ = $entityData$$5_hasNewTraits$$.$a$, $updated$$1$$ = !0);
      var $newTraits$$ = $JSCompiler_StaticMethods__parseTraits$$(this, $entityData$$5_hasNewTraits$$);
      $entityData$$5_hasNewTraits$$ = !$goog$object$every$$($newTraits$$, function($element$$18$$) {
        return this.$traits$[$element$$18$$.type];
      }, this);
      var $hasLostTraits$$ = !$goog$object$every$$(this.$traits$, function($element$$19$$) {
        return $newTraits$$[$element$$19$$.type];
      }, this);
      if ($entityData$$5_hasNewTraits$$ || $hasLostTraits$$) {
        this.$traits$ = $newTraits$$, $updated$$1$$ = !0;
      }
    } else {
      throw {name:"InvalidDataException", message:"not a z.common.data.CharacterData"};
    }
  }
  return $updated$$1$$;
};
function $JSCompiler_StaticMethods__parseTraits$$($JSCompiler_StaticMethods__parseTraits$self$$, $characterData$$4$$) {
  var $traits$$ = {};
  $goog$array$forEach$$($characterData$$4$$.$traits$, function($element$$20$$) {
    $traits$$[$element$$20$$.type] = $element$$20$$;
  }, $JSCompiler_StaticMethods__parseTraits$self$$);
  return $traits$$;
}
$z$common$entities$Character$$.prototype.$k$ = function $$z$common$entities$Character$$$$$k$$($guid$$7$$) {
  $guid$$7$$ === this.$c$ && $JSCompiler_StaticMethods_assignTo$$(this, null);
};
function $JSCompiler_StaticMethods_assignTo$$($JSCompiler_StaticMethods_assignTo$self$$, $guid$$8$$) {
  $JSCompiler_StaticMethods_assignTo$self$$.$c$ !== $guid$$8$$ && ($JSCompiler_StaticMethods_assignTo$self$$.$c$ = $guid$$8$$, $JSCompiler_StaticMethods__dispatchModified$$($JSCompiler_StaticMethods_assignTo$self$$));
}
;function $z$client$facet$CharacterListFacet$$($services$$5$$) {
  $z$client$facet$Facet$$.call(this);
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$5$$, $z$common$Resources$REPOSITORY$$);
  this.$b$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$5$$, "entityQueryObservable");
  this.characters = ko.observableArray($JSCompiler_StaticMethods__getCharacterList$$(this));
}
$goog$inherits$$($z$client$facet$CharacterListFacet$$, $z$client$facet$Facet$$);
$z$client$facet$CharacterListFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$CharacterListFacet$$$$$setParentEventTarget$$($parent$$5$$) {
  $z$client$facet$CharacterListFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$5$$);
  this.$a$.$listen$($parent$$5$$, "entity_created$3", this.$d$);
  this.$a$.$listen$($parent$$5$$, $z$common$events$EventType$ENTITY_MODIFIED$$, this.$e$);
};
function $JSCompiler_StaticMethods__getCharacterList$$($JSCompiler_StaticMethods__getCharacterList$self_entities$$3$$) {
  var $entityQuery$$1$$ = $JSCompiler_StaticMethods__getCharacterList$self_entities$$3$$.$b$();
  $entityQuery$$1$$.$category$ = $z$common$rulebook$category$CHARACTER_TYPE$$;
  $JSCompiler_StaticMethods__getCharacterList$self_entities$$3$$ = $JSCompiler_StaticMethods__getCharacterList$self_entities$$3$$.$c$.filter($entityQuery$$1$$);
  return $goog$array$map$$($JSCompiler_StaticMethods__getCharacterList$self_entities$$3$$, function($character$$16$$) {
    var $facet$$ = new $z$client$facet$CharacterFacet$$;
    $JSCompiler_StaticMethods_setEntity$$($facet$$, $character$$16$$);
    return $facet$$;
  });
}
$z$client$facet$CharacterListFacet$$.prototype.$d$ = function $$z$client$facet$CharacterListFacet$$$$$d$$($e$$30$$) {
  $e$$30$$.$entity$ instanceof $z$common$entities$Character$$ && this.characters($JSCompiler_StaticMethods__getCharacterList$$(this));
};
$z$client$facet$CharacterListFacet$$.prototype.$e$ = function $$z$client$facet$CharacterListFacet$$$$$e$$($e$$31$$) {
  $e$$31$$.$entity$ instanceof $z$common$entities$Character$$ && this.characters($JSCompiler_StaticMethods__getCharacterList$$(this));
};
function $z$common$rulebook$Trigger$$($trigger$$) {
  this.$a$ = $trigger$$.effects;
  var $triggerType$$ = $trigger$$.predicate.type;
  this.$c$ = $trigger$$.predicate;
  this.$b$ = $z$common$rulebook$logic$predicates$$[$triggerType$$];
}
$z$common$rulebook$Trigger$$.prototype.test = function $$z$common$rulebook$Trigger$$$$test$($triggerArgs$$7$$) {
  return this.$b$($triggerArgs$$7$$, this.$c$);
};
function $JSCompiler_StaticMethods_effects$$($JSCompiler_StaticMethods_effects$self$$) {
  var $effects$$4$$ = [];
  $goog$object$forEach$$($JSCompiler_StaticMethods_effects$self$$.$a$, function($effect$$9$$, $key$$75$$) {
    var $tmp$$1$$ = {};
    $tmp$$1$$.type = $key$$75$$;
    $tmp$$1$$.args = $goog$object$unsafeClone$$($effect$$9$$);
    $effects$$4$$.push($tmp$$1$$);
  }, $JSCompiler_StaticMethods_effects$self$$);
  return $effects$$4$$;
}
;function $z$service$world$GameEnder$$($rulebook$$1_services$$6$$) {
  $rulebook$$1_services$$6$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($rulebook$$1_services$$6$$, $z$common$Resources$RULEBOOK$$);
  this.$triggers$ = $goog$array$map$$($rulebook$$1_services$$6$$.$c$, function($trigger$$1$$) {
    return new $z$common$rulebook$Trigger$$($trigger$$1$$);
  });
}
function $JSCompiler_StaticMethods_getEffects$$($JSCompiler_StaticMethods_getEffects$self$$, $triggerArgs$$8$$) {
  return $goog$array$flatten$$($goog$array$map$$($JSCompiler_StaticMethods_getEffects$self$$.$triggers$, function($trigger$$2$$) {
    return $trigger$$2$$.test($triggerArgs$$8$$) ? $JSCompiler_StaticMethods_effects$$($trigger$$2$$) : [];
  }));
}
;function $goog$math$Coordinate$$($opt_x$$2$$, $opt_y$$2$$) {
  this.x = $goog$isDef$$($opt_x$$2$$) ? $opt_x$$2$$ : 0;
  this.y = $goog$isDef$$($opt_y$$2$$) ? $opt_y$$2$$ : 0;
}
$JSCompiler_prototypeAlias$$ = $goog$math$Coordinate$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Coordinate$$(this.x, this.y);
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "(" + this.x + ", " + this.y + ")";
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
function $z$common$rulebook$GameStartingData$$($ruleset$$1$$) {
  this.$startingResources$ = {};
  $goog$array$forEach$$($ruleset$$1$$.bounds.starting_resources, function($resource$$4$$) {
    this.$startingResources$[$resource$$4$$.type] = $resource$$4$$.amount;
  }, this);
}
;function $z$common$rulebook$CharacterType$$($meta$$8$$) {
  this.$a$ = $meta$$8$$;
  this.type = this.$a$.type;
  this.$category$ = $z$common$rulebook$category$CHARACTER_TYPE$$;
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$upkeep$ = {};
  $goog$object$forEach$$(this.$a$.upkeep, function($resourceDesc$$) {
    this.$upkeep$[$resourceDesc$$.type] = $resourceDesc$$.amount;
  }, this);
}
;function $z$common$rulebook$Tile$$($meta$$9$$) {
  this.$a$ = $meta$$9$$;
  this.type = this.$a$.type;
  this.$category$ = "tile";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$upkeep$ = {};
}
;function $z$common$rulebook$Project$$($project$$11_stockpile$$3_time$$2_work$$1$$) {
  this.$a$ = $project$$11_stockpile$$3_time$$2_work$$1$$;
  this.type = this.$a$.type;
  this.$category$ = "project";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$upkeep$ = {};
  this.$activity$ = this.$a$.activity;
  this.$defence$ = this.$a$.defence;
  this.$cost$ = {};
  ($project$$11_stockpile$$3_time$$2_work$$1$$ = this.$a$.cost.stockpile) && $goog$array$forEach$$($project$$11_stockpile$$3_time$$2_work$$1$$, function($item$$7$$) {
    this.$cost$[$item$$7$$.type] = $item$$7$$.amount;
  }, this);
  ($project$$11_stockpile$$3_time$$2_work$$1$$ = this.$a$.cost.work) && $goog$object$forEach$$($project$$11_stockpile$$3_time$$2_work$$1$$, function($value$$110$$, $key$$76$$) {
    this.$cost$["game://static/" + $key$$76$$] = $value$$110$$;
  }, this);
  ($project$$11_stockpile$$3_time$$2_work$$1$$ = this.$a$.cost.time) && (this.$cost$["game://static/time"] = $project$$11_stockpile$$3_time$$2_work$$1$$);
  this.$triggers$ = $goog$array$map$$(this.$a$.triggers, function($trigger$$3$$) {
    return new $z$common$rulebook$Trigger$$($trigger$$3$$);
  });
}
;function $z$common$rulebook$Terrain$$($terrain$$6$$) {
  this.$a$ = $terrain$$6$$;
  this.type = this.$a$.type;
  this.$category$ = "terrain";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$zone$ = this.$a$.zone;
  this.$activity$ = this.$a$.activity;
  this.$defence$ = this.$a$.defence;
}
;function $z$common$rulebook$Archetype$$($meta$$10$$) {
  this.$a$ = $meta$$10$$;
  this.type = this.$a$.type;
  this.$category$ = "archetype";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$frequency$ = this.$a$.frequency;
  this.$traits$ = this.$a$.traits;
  this.$combat$ = this.$a$.stats.combat;
  this.$b$ = this.$a$.stats.knowledge;
  this.$c$ = this.$a$.stats.labour;
}
;function $z$common$rulebook$StockpiledResource$$($meta$$11$$) {
  this.$a$ = $meta$$11$$;
  this.type = this.$a$.type;
  this.$category$ = "stockpile";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
}
;function $z$common$rulebook$Trait$$($trait$$4$$) {
  this.$a$ = $trait$$4$$;
  this.type = this.$a$.type;
  this.$category$ = "trait";
  this.name = this.$a$.name;
  this.description = this.$a$.description;
}
;function $z$common$rulebook$Actor$$($meta$$12$$) {
  this.$a$ = $meta$$12$$;
  this.type = this.$a$.type;
  this.$category$ = $z$common$rulebook$category$ACTOR$$;
  this.name = this.$a$.name;
  this.description = this.$a$.description;
  this.$upkeep$ = {};
}
;function $z$common$rulebook$Rulebook$$($bounds$$1_ruleset$$2_services$$7$$) {
  $bounds$$1_ruleset$$2_services$$7$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($bounds$$1_ruleset$$2_services$$7$$, "common_ruleset");
  this.$a$ = {};
  this.$e$ = $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.project, $z$common$rulebook$Project$$);
  this.terrain = $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.terrain, $z$common$rulebook$Terrain$$);
  $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$[$z$common$rulebook$category$ACTOR$$], $z$common$rulebook$Actor$$);
  $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.stockpile, $z$common$rulebook$StockpiledResource$$);
  $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.tile, $z$common$rulebook$Tile$$);
  this.$b$ = $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.archetype, $z$common$rulebook$Archetype$$);
  this.$traits$ = $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$.trait, $z$common$rulebook$Trait$$);
  $JSCompiler_StaticMethods__parseCategoryData$$(this, $bounds$$1_ruleset$$2_services$$7$$[$z$common$rulebook$category$CHARACTER_TYPE$$], $z$common$rulebook$CharacterType$$);
  this.$d$ = new $z$common$rulebook$GameStartingData$$($bounds$$1_ruleset$$2_services$$7$$);
  $bounds$$1_ruleset$$2_services$$7$$ = $bounds$$1_ruleset$$2_services$$7$$.bounds;
  this.$c$ = $bounds$$1_ruleset$$2_services$$7$$.game_over;
  this.year = $bounds$$1_ruleset$$2_services$$7$$.year;
}
function $JSCompiler_StaticMethods_getMetaClass$$($JSCompiler_StaticMethods_getMetaClass$self$$, $type$$128$$) {
  var $meta$$13$$ = $JSCompiler_StaticMethods_getMetaClass$self$$.$a$[$type$$128$$];
  if (null != $meta$$13$$) {
    return $meta$$13$$;
  }
  throw "type: " + $type$$128$$ + " has no meta class";
}
function $JSCompiler_StaticMethods__parseCategoryData$$($JSCompiler_StaticMethods__parseCategoryData$self$$, $categoryData$$, $CategoryClass$$) {
  return $goog$array$map$$($categoryData$$, function($categoryInstance_item$$8$$) {
    $categoryInstance_item$$8$$ = new $CategoryClass$$($categoryInstance_item$$8$$);
    return this.$a$[$categoryInstance_item$$8$$.type] = $categoryInstance_item$$8$$;
  }, $JSCompiler_StaticMethods__parseCategoryData$self$$);
}
;function $z$common$entities$Tile$$($services$$8$$) {
  $z$common$entities$Entity$$.call(this, $services$$8$$);
  var $tileData$$2$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$8$$, "entityData");
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$8$$, $z$common$Resources$RULEBOOK$$);
  $JSCompiler_StaticMethods__setTerrain$$(this, $tileData$$2$$.terrain);
  this.position = new $goog$math$Coordinate$$($tileData$$2$$.x, $tileData$$2$$.y);
  this.$zombieData$ = $JSCompiler_StaticMethods__calculateZombieData$$(this, $tileData$$2$$.$zombieData$);
}
$goog$inherits$$($z$common$entities$Tile$$, $z$common$entities$Entity$$);
$z$common$entities$Tile$$.prototype.$_update$ = function $$z$common$entities$Tile$$$$$_update$$($data$$42$$, $meta$$14$$) {
  if (!($data$$42$$ instanceof $z$common$data$TileData$$)) {
    throw {name:"InvalidDataException", message:"not a z.common.data.TileData"};
  }
  if (this.position.x !== $data$$42$$.x || this.position.y !== $data$$42$$.y || this.$guid$ !== $data$$42$$.$guid$) {
    throw {name:"InvalidDataException", message:"Incorrect update data, not correct tile", "real x":this.position.x, "real y":this.position.y, "bad x":$data$$42$$.x, "bad y":$data$$42$$.y, tileData:$data$$42$$, guid:this.$guid$, tileId:$data$$42$$.$guid$};
  }
  var $updated$$2$$ = !$goog$object$every$$(this.terrain, function($value$$111$$, $key$$78$$) {
    return $data$$42$$.terrain[$key$$78$$] === $value$$111$$;
  }, this);
  $z$common$entities$Tile$equalZombieData$$($data$$42$$.$zombieData$, this.$zombieData$) || (this.$zombieData$ = $data$$42$$.$zombieData$, $updated$$2$$ = !0);
  $updated$$2$$ || ($updated$$2$$ = $goog$object$getCount$$(this.terrain) !== $goog$object$getCount$$($data$$42$$.terrain));
  $JSCompiler_StaticMethods__setTerrain$$(this, $data$$42$$.terrain);
  this.$meta$ = $meta$$14$$;
  return $updated$$2$$;
};
function $JSCompiler_StaticMethods__setTerrain$$($JSCompiler_StaticMethods__setTerrain$self$$, $inTerrain$$) {
  var $terrain$$7$$ = {};
  $goog$object$forEach$$($inTerrain$$, function($value$$112$$, $index$$63$$) {
    $value$$112$$ && ($terrain$$7$$[$index$$63$$] = $value$$112$$);
  });
  $JSCompiler_StaticMethods__setTerrain$self$$.terrain = $terrain$$7$$;
  Object.freeze($JSCompiler_StaticMethods__setTerrain$self$$.terrain);
}
function $JSCompiler_StaticMethods_addZombieActivity$$($JSCompiler_StaticMethods_addZombieActivity$self$$, $magnitude$$1$$) {
  if ($magnitude$$1$$) {
    var $zombieData$$1$$ = $goog$object$unsafeClone$$($JSCompiler_StaticMethods_addZombieActivity$self$$.$zombieData$);
    $zombieData$$1$$.$activity$ += $magnitude$$1$$;
    $JSCompiler_StaticMethods_addZombieActivity$self$$.$zombieData$ = $zombieData$$1$$;
    $JSCompiler_StaticMethods__dispatchModified$$($JSCompiler_StaticMethods_addZombieActivity$self$$);
  }
}
function $JSCompiler_StaticMethods_addZombieDensity$$($JSCompiler_StaticMethods_addZombieDensity$self$$, $magnitude$$2$$) {
  if ($magnitude$$2$$) {
    var $zombieData$$2$$ = $goog$object$unsafeClone$$($JSCompiler_StaticMethods_addZombieDensity$self$$.$zombieData$);
    $zombieData$$2$$.$density$ = Math.max($zombieData$$2$$.$density$ + $magnitude$$2$$, 0);
    $JSCompiler_StaticMethods_addZombieDensity$self$$.$zombieData$ = $zombieData$$2$$;
    $JSCompiler_StaticMethods__dispatchModified$$($JSCompiler_StaticMethods_addZombieDensity$self$$);
  }
}
function $JSCompiler_StaticMethods__calculateZombieData$$($JSCompiler_StaticMethods__calculateZombieData$self$$, $data$$44$$) {
  var $totalDefence$$ = 0, $totalActivity$$ = 0, $zombieData$$3$$ = {$density$:0, $defence$:0, $attraction$:0, $activity$:0, $danger$:0};
  $goog$object$map$$($JSCompiler_StaticMethods__calculateZombieData$self$$.terrain, function($metaClass_terrain$$8$$) {
    $metaClass_terrain$$8$$ = $JSCompiler_StaticMethods_getMetaClass$$(this.$d$, $metaClass_terrain$$8$$);
    $totalDefence$$ += $metaClass_terrain$$8$$.$defence$;
    $totalActivity$$ += $metaClass_terrain$$8$$.$activity$;
  }, $JSCompiler_StaticMethods__calculateZombieData$self$$);
  $zombieData$$3$$.$density$ = $data$$44$$.$density$;
  $zombieData$$3$$.$defence$ = $totalDefence$$;
  $zombieData$$3$$.$attraction$ = $data$$44$$.$attraction$;
  $zombieData$$3$$.$activity$ = $totalActivity$$;
  $zombieData$$3$$.$danger$ = Math.max($data$$44$$.$density$ - $totalDefence$$, 0);
  return $zombieData$$3$$;
}
function $z$common$entities$Tile$equalZombieData$$($lhs$$1$$, $rhs$$1$$) {
  return $lhs$$1$$.$density$ === $rhs$$1$$.$density$ && $lhs$$1$$.$defence$ === $rhs$$1$$.$defence$ && $lhs$$1$$.$attraction$ === $rhs$$1$$.$attraction$ && $lhs$$1$$.$activity$ === $rhs$$1$$.$activity$ && $lhs$$1$$.$danger$ === $rhs$$1$$.$danger$;
}
;function $z$client$facet$Gem$$($services$$9_world$$) {
  $z$client$facet$Facet$$.call(this);
  this.mapFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_map_facet");
  this.contextMenuFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_context_menu_facet");
  this.toolbarFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_toolbar");
  this.infoFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_info_facet");
  this.messageLogFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_message_log_facet");
  this.currentTarget = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_current_target");
  this.currentAction = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_current_action");
  this.projectsFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_project_list_facet");
  this.modalFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_modal_facet");
  this.playerFacet = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "client_player_facet");
  var $repository$$1$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, $z$common$Resources$REPOSITORY$$);
  $services$$9_world$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$9_world$$, "common_world");
  this.mapFacet.$setParentEventTarget$(this);
  this.contextMenuFacet.$setParentEventTarget$(this);
  this.toolbarFacet.$setParentEventTarget$(this);
  this.infoFacet.$setParentEventTarget$(this);
  this.messageLogFacet.$setParentEventTarget$(this);
  this.projectsFacet.$setParentEventTarget$(this);
  this.playerFacet.$setParentEventTarget$(this);
  this.modalFacet.$setParentEventTarget$(this);
  $repository$$1$$.$setParentEventTarget$(this);
  $services$$9_world$$.$setParentEventTarget$(this);
  this.$a$.$listen$(this, "start_turn$0", this.$b$);
}
$goog$inherits$$($z$client$facet$Gem$$, $z$client$facet$Facet$$);
$z$client$facet$Gem$$.prototype.$b$ = function $$z$client$facet$Gem$$$$$b$$() {
  this.messageLogFacet.any().important && this.modalFacet.facet(this.messageLogFacet);
};
function $z$client$facet$StockpileFacet$$() {
  $z$client$facet$Facet$$.call(this);
  this.resources = ko.observableArray();
}
$goog$inherits$$($z$client$facet$StockpileFacet$$, $z$client$facet$Facet$$);
$z$client$facet$StockpileFacet$$.prototype.update = function $$z$client$facet$StockpileFacet$$$$update$($stockpile$$4$$) {
  var $resources$$ = $JSCompiler_StaticMethods_peekAll$$($stockpile$$4$$);
  $goog$array$forEach$$(this.resources(), function($resource$$5$$) {
    var $amount$$15$$ = $stockpile$$4$$.$peek$($resource$$5$$.type);
    $resource$$5$$.amount($amount$$15$$);
    delete $resources$$[$resource$$5$$.type];
  }, this);
  $goog$object$forEach$$($resources$$, function($amount$$16$$, $resource$$6$$) {
    this.resources.push({amount:ko.observable($amount$$16$$), type:$resource$$6$$, name:$goog$string$toTitleCase$$($resource$$6$$)});
  }, this);
};
function $z$client$facet$InfoFacet$$($player_services$$10$$) {
  $z$client$facet$Facet$$.call(this);
  this.turn = ko.observable();
  this.season = ko.observable();
  $player_services$$10$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($player_services$$10$$, "client_player_facet");
  this.resources = $player_services$$10$$.resources;
  this.unassignedCharacters = $player_services$$10$$.unassignedCharactersListFacet;
  this.points = $player_services$$10$$.points;
}
$goog$inherits$$($z$client$facet$InfoFacet$$, $z$client$facet$Facet$$);
$z$client$facet$InfoFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$InfoFacet$$$$$setParentEventTarget$$($parent$$6$$) {
  $z$client$facet$InfoFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$6$$);
  this.$a$.$listen$($parent$$6$$, "start_turn$0", this.$b$);
};
$z$client$facet$InfoFacet$$.prototype.$b$ = function $$z$client$facet$InfoFacet$$$$$b$$($e$$33$$) {
  this.turn($e$$33$$.data.$turn$);
  this.season($e$$33$$.data.$season$);
};
function $z$client$actions$EndTurn$$($services$$11$$) {
  $z$client$action$Action$$.call(this, "End turn");
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$11$$, "common_world");
  this.$meta$ = {type:"action_end_turn", category:"action", name:"End turn", description:"Ends your turn, commence gnawing"};
}
$goog$inherits$$($z$client$actions$EndTurn$$, $z$client$action$Action$$);
$z$client$actions$EndTurn$$.prototype.$c$ = function $$z$client$actions$EndTurn$$$$$c$$() {
  return !0;
};
$z$client$actions$EndTurn$$.prototype.$d$ = function $$z$client$actions$EndTurn$$$$$d$$() {
  $JSCompiler_StaticMethods_z_client_WorldProxy_prototype$endTurn$$(this.$a$);
};
function $z$common$entities$Actor$$($actorData$$2_services$$12$$) {
  $z$common$entities$Entity$$.call(this, $actorData$$2_services$$12$$);
  this.name = null;
  this.$b$ = this.$guid$;
  $actorData$$2_services$$12$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($actorData$$2_services$$12$$, "entityData");
  this.$stockpile$ = new $z$common$Stockpile$$;
  $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$(this.$stockpile$, $actorData$$2_services$$12$$.$stockpile$);
  this.$e$ = $actorData$$2_services$$12$$.$points$;
}
$goog$inherits$$($z$common$entities$Actor$$, $z$common$entities$Entity$$);
$z$common$entities$Actor$$.prototype.$_update$ = function $$z$common$entities$Actor$$$$$_update$$($entityData$$6$$) {
  var $updated$$3$$ = !1;
  if ($entityData$$6$$) {
    if ($entityData$$6$$ instanceof $z$common$data$ActorData$$) {
      $JSCompiler_StaticMethods_purgeAll$$(this.$stockpile$), $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$(this.$stockpile$, $entityData$$6$$.$stockpile$), this.$e$ = $entityData$$6$$.$points$, $updated$$3$$ = !0;
    } else {
      throw "InvalidDataException: not a z.common.data.ActorData";
    }
  }
  return $updated$$3$$;
};
function $z$service$world$RandomTerrainGenerator$$($rulebook$$2_services$$13$$) {
  $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($rulebook$$2_services$$13$$, "service_terrain_seed");
  $rulebook$$2_services$$13$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($rulebook$$2_services$$13$$, $z$common$Resources$RULEBOOK$$);
  this.$a$ = [];
  $goog$array$forEach$$($rulebook$$2_services$$13$$.terrain, function($terrain$$9$$) {
    "base" === $terrain$$9$$.$zone$ && this.$a$.push($terrain$$9$$);
  }, this);
  new $mugd$utils$SimplexNoise$$;
}
$z$service$world$RandomTerrainGenerator$$.prototype.$c$ = function $$z$service$world$RandomTerrainGenerator$$$$$c$$($x$$76$$, $y$$50$$) {
  var $t$$1$$ = this.$a$[Math.random() * this.$a$.length | 0];
  terrain = {};
  terrain.base = $t$$1$$.type;
  return new $z$common$data$TileData$$(null, "modified", null, $x$$76$$, $y$$50$$, terrain, "tile", {$density$:10, $defence$:0, $attraction$:0, $activity$:0, $danger$:0});
};
function $z$common$data$CharacterData$$($guid$$9$$, $ownerId$$1$$, $state$$7$$, $name$$96$$, $gender$$, $combat$$, $knowledge$$, $labour$$, $health$$, $assignedTo$$, $traits$$1$$) {
  this.$category$ = "character";
  this.$guid$ = $guid$$9$$;
  this.$ownerId$ = $ownerId$$1$$;
  this.state = $state$$7$$;
  this.name = $name$$96$$;
  this.type = this.$e$ = $gender$$;
  this.$combat$ = $combat$$;
  this.$c$ = $knowledge$$;
  this.$d$ = $labour$$;
  this.$b$ = $health$$;
  this.$a$ = $assignedTo$$;
  this.$traits$ = $traits$$1$$;
}
function $z$common$data$CharacterData$fromEntity$$($character$$17$$) {
  return new $z$common$data$CharacterData$$($character$$17$$.$guid$, $character$$17$$.$b$, $character$$17$$.$a$, $character$$17$$.name, $character$$17$$.$l$, $character$$17$$.$combat$, $character$$17$$.$d$, $character$$17$$.$f$, $character$$17$$.$i$, $character$$17$$.$c$, $goog$object$getKeys$$($character$$17$$.$traits$));
}
;function $z$service$world$CharacterGenerator$$($services$$14$$) {
  var $ruleset$$3$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$14$$, "common_ruleset");
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$14$$, $z$common$Resources$RULEBOOK$$);
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$14$$, $z$common$Resources$REPOSITORY$$);
  this.$a$ = {};
  this.$b$ = [];
  $goog$array$forEach$$($ruleset$$3$$.character, function($data$$46$$) {
    null != $data$$46$$.archetype ? (this.$a$[$data$$46$$.archetype] || (this.$a$[$data$$46$$.archetype] = []), this.$a$[$data$$46$$.archetype].push($data$$46$$)) : this.$b$.push($data$$46$$);
  }, this);
  $goog$object$forEach$$(this.$a$, $goog$array$shuffle$$);
  $goog$array$shuffle$$(this.$b$);
}
function $JSCompiler_StaticMethods_getCharacterByArchetype$$($JSCompiler_StaticMethods_getCharacterByArchetype$self$$, $archetype$$1_archetypeType$$, $characterData$$5_ownerId$$2$$) {
  var $characterBase$$ = null;
  if ($JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$a$[$archetype$$1_archetypeType$$] && $JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$a$[$archetype$$1_archetypeType$$].length) {
    $characterBase$$ = $JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$a$[$archetype$$1_archetypeType$$].pop();
  } else {
    if ($JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$b$.length) {
      $characterBase$$ = $JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$b$.pop();
    } else {
      throw "No more characters left";
    }
  }
  $archetype$$1_archetypeType$$ = $JSCompiler_StaticMethods_getMetaClass$$($JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$c$, $archetype$$1_archetypeType$$);
  $characterData$$5_ownerId$$2$$ = new $z$common$data$CharacterData$$(null, $characterData$$5_ownerId$$2$$, "modified", $characterBase$$.name, $characterBase$$.type, $JSCompiler_StaticMethods__addStatVariation$$($archetype$$1_archetypeType$$.$combat$), $JSCompiler_StaticMethods__addStatVariation$$($archetype$$1_archetypeType$$.$b$), $JSCompiler_StaticMethods__addStatVariation$$($archetype$$1_archetypeType$$.$c$), 1, null, $goog$array$map$$($goog$array$filter$$($archetype$$1_archetypeType$$.$traits$, 
  function($trait$$5$$) {
    return $trait$$5$$.$probability$ > Math.random();
  }), function($trait$$6$$) {
    return $trait$$6$$.type;
  }));
  $JSCompiler_StaticMethods_getCharacterByArchetype$self$$.$d$.$a$($characterData$$5_ownerId$$2$$);
}
function $JSCompiler_StaticMethods__addStatVariation$$($value$$113$$) {
  return Math.max(0, Math.floor(7 * Math.random()) - 3 + $value$$113$$);
}
;function $goog$math$Box$$($top$$2$$, $right$$5$$, $bottom$$1$$, $left$$5$$) {
  this.top = $top$$2$$;
  this.right = $right$$5$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$5$$;
}
$JSCompiler_prototypeAlias$$ = $goog$math$Box$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left);
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($other$$4$$) {
  return this && $other$$4$$ ? $other$$4$$ instanceof $goog$math$Box$$ ? $other$$4$$.left >= this.left && $other$$4$$.right <= this.right && $other$$4$$.top >= this.top && $other$$4$$.bottom <= this.bottom : $other$$4$$.x >= this.left && $other$$4$$.x <= this.right && $other$$4$$.y >= this.top && $other$$4$$.y <= this.bottom : !1;
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentModeOrHigher$$(9) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
var $goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$;
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$);
}
function $goog$dom$getElementHelper_$$($doc$$7$$, $element$$22$$) {
  return $goog$isString$$($element$$22$$) ? $doc$$7$$.getElementById($element$$22$$) : $element$$22$$;
}
function $goog$dom$getParentElement$$($element$$28$$) {
  var $parent$$17$$;
  if ($goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ && !($goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9") && !$goog$userAgent$isVersionOrHigher$$("10") && $goog$global$$.SVGElement && $element$$28$$ instanceof $goog$global$$.SVGElement) && ($parent$$17$$ = $element$$28$$.parentElement)) {
    return $parent$$17$$;
  }
  $parent$$17$$ = $element$$28$$.parentNode;
  return $goog$isObject$$($parent$$17$$) && 1 == $parent$$17$$.nodeType ? $parent$$17$$ : null;
}
function $goog$dom$getOwnerDocument$$($node$$24$$) {
  $goog$asserts$assert$$($node$$24$$, "Node cannot be null or undefined.");
  return 9 == $node$$24$$.nodeType ? $node$$24$$ : $node$$24$$.ownerDocument || $node$$24$$.document;
}
function $goog$dom$DomHelper$$($opt_document$$1$$) {
  this.$a$ = $opt_document$$1$$ || $goog$global$$.document || document;
}
$goog$dom$DomHelper$$.prototype.contains = function $$goog$dom$DomHelper$$$$contains$($parent$$18$$, $descendant$$) {
  if ($parent$$18$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$18$$ == $descendant$$ || $parent$$18$$.contains($descendant$$);
  }
  if ("undefined" != typeof $parent$$18$$.compareDocumentPosition) {
    return $parent$$18$$ == $descendant$$ || Boolean($parent$$18$$.compareDocumentPosition($descendant$$) & 16);
  }
  for (;$descendant$$ && $parent$$18$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode;
  }
  return $descendant$$ == $parent$$18$$;
};
$goog$dom$DomHelper$$.prototype.setTextContent = function $$goog$dom$DomHelper$$$$setTextContent$($node$$25$$, $text$$15$$) {
  $goog$asserts$assert$$(null != $node$$25$$, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in $node$$25$$) {
    $node$$25$$.textContent = $text$$15$$;
  } else {
    if (3 == $node$$25$$.nodeType) {
      $node$$25$$.data = $text$$15$$;
    } else {
      if ($node$$25$$.firstChild && 3 == $node$$25$$.firstChild.nodeType) {
        for (;$node$$25$$.lastChild != $node$$25$$.firstChild;) {
          $node$$25$$.removeChild($node$$25$$.lastChild);
        }
        $node$$25$$.firstChild.data = $text$$15$$;
      } else {
        for (var $child$$inline_282_doc$$24$$;$child$$inline_282_doc$$24$$ = $node$$25$$.firstChild;) {
          $node$$25$$.removeChild($child$$inline_282_doc$$24$$);
        }
        $child$$inline_282_doc$$24$$ = $goog$dom$getOwnerDocument$$($node$$25$$);
        $node$$25$$.appendChild($child$$inline_282_doc$$24$$.createTextNode(String($text$$15$$)));
      }
    }
  }
};
function $goog$style$getComputedStyle$$($element$$46$$, $property$$5$$) {
  var $doc$$29_styles$$ = $goog$dom$getOwnerDocument$$($element$$46$$);
  return $doc$$29_styles$$.defaultView && $doc$$29_styles$$.defaultView.getComputedStyle && ($doc$$29_styles$$ = $doc$$29_styles$$.defaultView.getComputedStyle($element$$46$$, null)) ? $doc$$29_styles$$[$property$$5$$] || $doc$$29_styles$$.getPropertyValue($property$$5$$) || "" : "";
}
function $goog$style$getPageOffset$$($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$) {
  var $doc$$34_el$$inline_780_scrollCoord$$ = $goog$dom$getOwnerDocument$$($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$);
  $goog$asserts$assertObject$$($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$, "Parameter is required");
  var $pos$$2$$ = new $goog$math$Coordinate$$(0, 0), $doc$$inline_285$$;
  $doc$$inline_285$$ = $doc$$34_el$$inline_780_scrollCoord$$ ? $goog$dom$getOwnerDocument$$($doc$$34_el$$inline_780_scrollCoord$$) : document;
  var $JSCompiler_temp$$708$$;
  ($JSCompiler_temp$$708$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentModeOrHigher$$(9)) || ($JSCompiler_temp$$708$$ = "CSS1Compat" == $goog$dom$getDomHelper$$($doc$$inline_285$$).$a$.compatMode);
  if ($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$ == ($JSCompiler_temp$$708$$ ? $doc$$inline_285$$.documentElement : $doc$$inline_285$$.body)) {
    return $pos$$2$$;
  }
  var $box$$7_rect$$inline_288$$;
  a: {
    try {
      $box$$7_rect$$inline_288$$ = $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.getBoundingClientRect();
    } catch ($e$$inline_290$$) {
      $box$$7_rect$$inline_288$$ = {left:0, top:0, right:0, bottom:0};
      break a;
    }
    $goog$userAgent$IE$$ && $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.ownerDocument.body && ($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$ = $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.ownerDocument, $box$$7_rect$$inline_288$$.left -= $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.documentElement.clientLeft + $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.body.clientLeft, $box$$7_rect$$inline_288$$.top -= $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.documentElement.clientTop + 
    $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.body.clientTop);
  }
  $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$ = $goog$dom$getDomHelper$$($doc$$34_el$$inline_780_scrollCoord$$).$a$;
  $doc$$34_el$$inline_780_scrollCoord$$ = $goog$userAgent$WEBKIT$$ || "CSS1Compat" != $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.compatMode ? $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.body || $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.documentElement : $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.documentElement;
  $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$ = $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.parentWindow || $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.defaultView;
  $doc$$34_el$$inline_780_scrollCoord$$ = $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("10") && $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.pageYOffset != $doc$$34_el$$inline_780_scrollCoord$$.scrollTop ? new $goog$math$Coordinate$$($doc$$34_el$$inline_780_scrollCoord$$.scrollLeft, $doc$$34_el$$inline_780_scrollCoord$$.scrollTop) : new $goog$math$Coordinate$$($doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.pageXOffset || $doc$$34_el$$inline_780_scrollCoord$$.scrollLeft, 
  $doc$$inline_289_doc$$inline_779_el$$7_win$$inline_781$$.pageYOffset || $doc$$34_el$$inline_780_scrollCoord$$.scrollTop);
  $pos$$2$$.x = $box$$7_rect$$inline_288$$.left + $doc$$34_el$$inline_780_scrollCoord$$.x;
  $pos$$2$$.y = $box$$7_rect$$inline_288$$.top + $doc$$34_el$$inline_780_scrollCoord$$.y;
  return $pos$$2$$;
}
var $goog$style$ieBorderWidthKeywords_$$ = {thin:2, medium:4, thick:6};
function $goog$style$getIePixelBorder_$$($element$$82$$, $prop$$5$$) {
  if ("none" == ($element$$82$$.currentStyle ? $element$$82$$.currentStyle[$prop$$5$$ + "Style"] : null)) {
    return 0;
  }
  var $pixelValue$$inline_300_width$$15$$ = $element$$82$$.currentStyle ? $element$$82$$.currentStyle[$prop$$5$$ + "Width"] : null, $JSCompiler_temp$$34_oldStyleValue$$inline_298$$;
  if ($pixelValue$$inline_300_width$$15$$ in $goog$style$ieBorderWidthKeywords_$$) {
    $JSCompiler_temp$$34_oldStyleValue$$inline_298$$ = $goog$style$ieBorderWidthKeywords_$$[$pixelValue$$inline_300_width$$15$$];
  } else {
    if (/^\d+px?$/.test($pixelValue$$inline_300_width$$15$$)) {
      $JSCompiler_temp$$34_oldStyleValue$$inline_298$$ = parseInt($pixelValue$$inline_300_width$$15$$, 10);
    } else {
      $JSCompiler_temp$$34_oldStyleValue$$inline_298$$ = $element$$82$$.style.left;
      var $oldRuntimeValue$$inline_299$$ = $element$$82$$.runtimeStyle.left;
      $element$$82$$.runtimeStyle.left = $element$$82$$.currentStyle.left;
      $element$$82$$.style.left = $pixelValue$$inline_300_width$$15$$;
      $pixelValue$$inline_300_width$$15$$ = $element$$82$$.style.pixelLeft;
      $element$$82$$.style.left = $JSCompiler_temp$$34_oldStyleValue$$inline_298$$;
      $element$$82$$.runtimeStyle.left = $oldRuntimeValue$$inline_299$$;
      $JSCompiler_temp$$34_oldStyleValue$$inline_298$$ = $pixelValue$$inline_300_width$$15$$;
    }
  }
  return $JSCompiler_temp$$34_oldStyleValue$$inline_298$$;
}
;function $z$client$events$ShowContextMenu$$($context$$5$$, $position$$1$$) {
  $goog$events$Event$$.call(this, "show_context_menu$2");
  this.context = $context$$5$$;
  this.position = $position$$1$$;
}
$goog$inherits$$($z$client$events$ShowContextMenu$$, $goog$events$Event$$);
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var $goog$dom$query$$ = function() {
  function $query$$9$$($query$$15$$, $root$$20$$) {
    if (!$query$$15$$) {
      return [];
    }
    if ($query$$15$$.constructor == Array) {
      return $query$$15$$;
    }
    if (!$goog$isString$$($query$$15$$)) {
      return [$query$$15$$];
    }
    if ($goog$isString$$($root$$20$$) && ($root$$20$$ = $goog$dom$getElementHelper_$$(document, $root$$20$$), !$root$$20$$)) {
      return [];
    }
    $root$$20$$ = $root$$20$$ || document;
    var $od_r$$6$$ = $root$$20$$.ownerDocument || $root$$20$$.documentElement;
    $caseSensitive$$ = $root$$20$$.contentType && "application/xml" == $root$$20$$.contentType || $goog$userAgent$OPERA$$ && ($root$$20$$.doctype || "[object XMLDocument]" == $od_r$$6$$.toString()) || !!$od_r$$6$$ && ($legacyIE$$ ? $od_r$$6$$.xml : $root$$20$$.xmlVersion || $od_r$$6$$.xmlVersion);
    return ($od_r$$6$$ = $getQueryFunc$$($query$$15$$)($root$$20$$)) && $od_r$$6$$.$nozip$ ? $od_r$$6$$ : $_zip$$($od_r$$6$$);
  }
  function $_zip$$($arr$$82$$) {
    if ($arr$$82$$ && $arr$$82$$.$nozip$) {
      return $arr$$82$$;
    }
    var $ret$$12$$ = [];
    if (!$arr$$82$$ || !$arr$$82$$.length) {
      return $ret$$12$$;
    }
    $arr$$82$$[0] && $ret$$12$$.push($arr$$82$$[0]);
    if (2 > $arr$$82$$.length) {
      return $ret$$12$$;
    }
    $_zipIdx$$++;
    if ($legacyIE$$ && $caseSensitive$$) {
      var $szidx$$ = $_zipIdx$$ + "";
      $arr$$82$$[0].setAttribute("_zipIdx", $szidx$$);
      for (var $x$$88$$ = 1, $te$$8$$;$te$$8$$ = $arr$$82$$[$x$$88$$];$x$$88$$++) {
        $arr$$82$$[$x$$88$$].getAttribute("_zipIdx") != $szidx$$ && $ret$$12$$.push($te$$8$$), $te$$8$$.setAttribute("_zipIdx", $szidx$$);
      }
    } else {
      if ($legacyIE$$ && $arr$$82$$.$commentStrip$) {
        try {
          for ($x$$88$$ = 1;$te$$8$$ = $arr$$82$$[$x$$88$$];$x$$88$$++) {
            $isElement$$($te$$8$$) && $ret$$12$$.push($te$$8$$);
          }
        } catch ($e$$39$$) {
        }
      } else {
        for ($arr$$82$$[0] && ($arr$$82$$[0]._zipIdx = $_zipIdx$$), $x$$88$$ = 1;$te$$8$$ = $arr$$82$$[$x$$88$$];$x$$88$$++) {
          $arr$$82$$[$x$$88$$]._zipIdx != $_zipIdx$$ && $ret$$12$$.push($te$$8$$), $te$$8$$._zipIdx = $_zipIdx$$;
        }
      }
    }
    return $ret$$12$$;
  }
  function $_isUnique$$($node$$41$$, $bag$$4$$) {
    if (!$bag$$4$$) {
      return 1;
    }
    var $id$$9$$ = $_nodeUID$$($node$$41$$);
    return $bag$$4$$[$id$$9$$] ? 0 : $bag$$4$$[$id$$9$$] = 1;
  }
  function $getQueryFunc$$($query$$14$$, $opt_forceDOM$$) {
    if ($qsaAvail$$) {
      var $domCached_qcz_qsaCached$$ = $_queryFuncCacheQSA$$[$query$$14$$];
      if ($domCached_qcz_qsaCached$$ && !$opt_forceDOM$$) {
        return $domCached_qcz_qsaCached$$;
      }
    }
    if ($domCached_qcz_qsaCached$$ = $_queryFuncCacheDOM$$[$query$$14$$]) {
      return $domCached_qcz_qsaCached$$;
    }
    var $domCached_qcz_qsaCached$$ = $query$$14$$.charAt(0), $nospace$$ = -1 == $query$$14$$.indexOf(" ");
    0 <= $query$$14$$.indexOf("#") && $nospace$$ && ($opt_forceDOM$$ = !0);
    if (!$qsaAvail$$ || $opt_forceDOM$$ || -1 != ">~+".indexOf($domCached_qcz_qsaCached$$) || $legacyIE$$ && -1 != $query$$14$$.indexOf(":") || $cssCaseBug$$ && 0 <= $query$$14$$.indexOf(".") || -1 != $query$$14$$.indexOf(":contains") || -1 != $query$$14$$.indexOf("|=")) {
      var $parts$$5$$ = $query$$14$$.split(/\s*,\s*/);
      return $_queryFuncCacheDOM$$[$query$$14$$] = 2 > $parts$$5$$.length ? $getStepQueryFunc$$($query$$14$$) : function($root$$19$$) {
        for (var $pindex$$ = 0, $ret$$11$$ = [], $tp$$;$tp$$ = $parts$$5$$[$pindex$$++];) {
          $ret$$11$$ = $ret$$11$$.concat($getStepQueryFunc$$($tp$$)($root$$19$$));
        }
        return $ret$$11$$;
      };
    }
    var $tq$$ = 0 <= ">~+".indexOf($query$$14$$.charAt($query$$14$$.length - 1)) ? $query$$14$$ + " *" : $query$$14$$;
    return $_queryFuncCacheQSA$$[$query$$14$$] = function $$_queryFuncCacheQSA$$$$query$$14$$$($root$$18$$) {
      try {
        if (9 != $root$$18$$.nodeType && !$nospace$$) {
          throw Error("");
        }
        var $r$$5$$ = $root$$18$$.querySelectorAll($tq$$);
        $legacyIE$$ ? $r$$5$$.$commentStrip$ = !0 : $r$$5$$.$nozip$ = !0;
        return $r$$5$$;
      } catch ($e$$38$$) {
        return $getQueryFunc$$($query$$14$$, !0)($root$$18$$);
      }
    };
  }
  function $getStepQueryFunc$$($query$$13$$) {
    var $qparts$$ = $getQueryParts$$($goog$string$trim$$($query$$13$$));
    if (1 == $qparts$$.length) {
      var $tef$$ = $getElementsFunc$$($qparts$$[0]);
      return function($r$$4_root$$16$$) {
        if ($r$$4_root$$16$$ = $tef$$($r$$4_root$$16$$, [])) {
          $r$$4_root$$16$$.$nozip$ = !0;
        }
        return $r$$4_root$$16$$;
      };
    }
    return function($candidates$$inline_316_root$$17$$) {
      $candidates$$inline_316_root$$17$$ = $getArr$$($candidates$$inline_316_root$$17$$);
      for (var $qp$$inline_317_te$$inline_319$$, $gef$$inline_324_x$$inline_318$$, $qpl$$inline_320$$ = $qparts$$.length, $bag$$inline_321$$, $ret$$inline_322$$, $i$$inline_323$$ = 0;$i$$inline_323$$ < $qpl$$inline_320$$;$i$$inline_323$$++) {
        $ret$$inline_322$$ = [];
        $qp$$inline_317_te$$inline_319$$ = $qparts$$[$i$$inline_323$$];
        $gef$$inline_324_x$$inline_318$$ = $candidates$$inline_316_root$$17$$.length - 1;
        0 < $gef$$inline_324_x$$inline_318$$ && ($bag$$inline_321$$ = {}, $ret$$inline_322$$.$nozip$ = !0);
        $gef$$inline_324_x$$inline_318$$ = $getElementsFunc$$($qp$$inline_317_te$$inline_319$$);
        for (var $j$$inline_325$$ = 0;$qp$$inline_317_te$$inline_319$$ = $candidates$$inline_316_root$$17$$[$j$$inline_325$$];$j$$inline_325$$++) {
          $gef$$inline_324_x$$inline_318$$($qp$$inline_317_te$$inline_319$$, $ret$$inline_322$$, $bag$$inline_321$$);
        }
        if (!$ret$$inline_322$$.length) {
          break;
        }
        $candidates$$inline_316_root$$17$$ = $ret$$inline_322$$;
      }
      return $ret$$inline_322$$;
    };
  }
  function $getElementsFunc$$($query$$12$$) {
    var $retFunc$$ = $_getElementsFuncCache$$[$query$$12$$.$query$];
    if ($retFunc$$) {
      return $retFunc$$;
    }
    var $io_oper$$ = $query$$12$$.$infixOper$, $io_oper$$ = $io_oper$$ ? $io_oper$$.$oper$ : "", $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$12$$, {$el$:1}), $wildcardTag$$ = "*" == $query$$12$$.tag, $ecs_skipFilters$$ = document.getElementsByClassName;
    if ($io_oper$$) {
      $ecs_skipFilters$$ = {$el$:1}, $wildcardTag$$ && ($ecs_skipFilters$$.tag = 1), $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$12$$, $ecs_skipFilters$$), "+" == $io_oper$$ ? $retFunc$$ = $nextSiblingIterator$$($filterFunc$$3$$) : "~" == $io_oper$$ ? $retFunc$$ = $nextSiblingsIterator$$($filterFunc$$3$$) : ">" == $io_oper$$ && ($retFunc$$ = $_childElements$$($filterFunc$$3$$));
    } else {
      if ($query$$12$$.id) {
        $filterFunc$$3$$ = !$query$$12$$.$loops$ && $wildcardTag$$ ? $goog$functions$TRUE$$ : $getSimpleFilterFunc$$($query$$12$$, {$el$:1, id:1}), $retFunc$$ = function $$retFunc$$$($root$$11$$, $arr$$78$$) {
          var $JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$;
          $JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$ = $goog$dom$getDomHelper$$($root$$11$$);
          $JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$ = $goog$dom$getElementHelper_$$($JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$.$a$, $query$$12$$.id);
          var $JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$;
          if (($JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ = $JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$ && $filterFunc$$3$$($JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$)) && !($JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ = 9 == $root$$11$$.nodeType)) {
            for ($JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ = $JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$.parentNode;$JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ && $JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ != $root$$11$$;) {
              $JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ = $JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$.parentNode;
            }
            $JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$ = !!$JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$;
          }
          if ($JSCompiler_temp$$36_JSCompiler_temp$$37_pn$$inline_312$$) {
            return $getArr$$($JSCompiler_StaticMethods_getElement$self$$inline_307_te$$3$$, $arr$$78$$);
          }
        };
      } else {
        if ($ecs_skipFilters$$ && /\{\s*\[native code\]\s*\}/.test(String($ecs_skipFilters$$)) && $query$$12$$.$classes$.length && !$cssCaseBug$$) {
          var $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$12$$, {$el$:1, $classes$:1, id:1}), $classesString$$ = $query$$12$$.$classes$.join(" "), $retFunc$$ = function $$retFunc$$$($root$$12$$, $arr$$79$$) {
            for (var $ret$$7$$ = $getArr$$(0, $arr$$79$$), $te$$4$$, $x$$84$$ = 0, $tret$$2$$ = $root$$12$$.getElementsByClassName($classesString$$);$te$$4$$ = $tret$$2$$[$x$$84$$++];) {
              $filterFunc$$3$$($te$$4$$, $root$$12$$) && $ret$$7$$.push($te$$4$$);
            }
            return $ret$$7$$;
          }
        } else {
          $wildcardTag$$ || $query$$12$$.$loops$ ? ($filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$12$$, {$el$:1, tag:1, id:1}), $retFunc$$ = function $$retFunc$$$($root$$14$$, $arr$$81$$) {
            for (var $ret$$9$$ = $getArr$$(0, $arr$$81$$), $te$$6$$, $x$$86$$ = 0, $tret$$4$$ = $root$$14$$.getElementsByTagName($query$$12$$.$getTag$());$te$$6$$ = $tret$$4$$[$x$$86$$++];) {
              $filterFunc$$3$$($te$$6$$, $root$$14$$) && $ret$$9$$.push($te$$6$$);
            }
            return $ret$$9$$;
          }) : $retFunc$$ = function $$retFunc$$$($root$$13$$, $arr$$80$$) {
            for (var $ret$$8$$ = $getArr$$(0, $arr$$80$$), $te$$5$$, $x$$85$$ = 0, $tret$$3$$ = $root$$13$$.getElementsByTagName($query$$12$$.$getTag$());$te$$5$$ = $tret$$3$$[$x$$85$$++];) {
              $ret$$8$$.push($te$$5$$);
            }
            return $ret$$8$$;
          };
        }
      }
    }
    return $_getElementsFuncCache$$[$query$$12$$.$query$] = $retFunc$$;
  }
  function $_childElements$$($filterFunc$$2$$) {
    $filterFunc$$2$$ = $filterFunc$$2$$ || $goog$functions$TRUE$$;
    return function($root$$9_te$$2$$, $ret$$6$$, $bag$$2$$) {
      for (var $x$$83$$ = 0, $tret$$1$$ = $root$$9_te$$2$$[$childNodesName$$];$root$$9_te$$2$$ = $tret$$1$$[$x$$83$$++];) {
        $simpleNodeTest$$($root$$9_te$$2$$) && (!$bag$$2$$ || $_isUnique$$($root$$9_te$$2$$, $bag$$2$$)) && $filterFunc$$2$$($root$$9_te$$2$$, $x$$83$$) && $ret$$6$$.push($root$$9_te$$2$$);
      }
      return $ret$$6$$;
    };
  }
  function $nextSiblingsIterator$$($filterFunc$$1$$) {
    return function($root$$8_te$$1$$, $ret$$5$$, $bag$$1$$) {
      for ($root$$8_te$$1$$ = $root$$8_te$$1$$[$nSibling$$];$root$$8_te$$1$$;) {
        if ($simpleNodeTest$$($root$$8_te$$1$$)) {
          if ($bag$$1$$ && !$_isUnique$$($root$$8_te$$1$$, $bag$$1$$)) {
            break;
          }
          $filterFunc$$1$$($root$$8_te$$1$$) && $ret$$5$$.push($root$$8_te$$1$$);
        }
        $root$$8_te$$1$$ = $root$$8_te$$1$$[$nSibling$$];
      }
      return $ret$$5$$;
    };
  }
  function $nextSiblingIterator$$($filterFunc$$) {
    return function($node$$37$$, $ret$$4$$, $bag$$) {
      for (;$node$$37$$ = $node$$37$$[$nSibling$$];) {
        if (!$noNextElementSibling$$ || $isElement$$($node$$37$$)) {
          $bag$$ && !$_isUnique$$($node$$37$$, $bag$$) || !$filterFunc$$($node$$37$$) || $ret$$4$$.push($node$$37$$);
          break;
        }
      }
      return $ret$$4$$;
    };
  }
  function $getSimpleFilterFunc$$($query$$11$$, $ignores$$1$$) {
    if (!$query$$11$$) {
      return $goog$functions$TRUE$$;
    }
    $ignores$$1$$ = $ignores$$1$$ || {};
    var $ff$$ = null;
    $ignores$$1$$.$el$ || ($ff$$ = $agree$$($ff$$, $isElement$$));
    $ignores$$1$$.tag || "*" != $query$$11$$.tag && ($ff$$ = $agree$$($ff$$, function($elem$$30$$) {
      return $elem$$30$$ && $elem$$30$$.tagName == $query$$11$$.$getTag$();
    }));
    $ignores$$1$$.$classes$ || $goog$array$forEach$$($query$$11$$.$classes$, function($cname$$, $idx$$1$$) {
      var $re$$3$$ = new RegExp("(?:^|\\s)" + $cname$$ + "(?:\\s|$)");
      $ff$$ = $agree$$($ff$$, function($elem$$31$$) {
        return $re$$3$$.test($elem$$31$$.className);
      });
      $ff$$.count = $idx$$1$$;
    });
    $ignores$$1$$.$pseudos$ || $goog$array$forEach$$($query$$11$$.$pseudos$, function($pseudo$$) {
      var $pn$$ = $pseudo$$.name;
      $pseudos$$[$pn$$] && ($ff$$ = $agree$$($ff$$, $pseudos$$[$pn$$]($pn$$, $pseudo$$.value)));
    });
    $ignores$$1$$.$attrs$ || $goog$array$forEach$$($query$$11$$.$attrs$, function($attr$$7$$) {
      var $matcher$$1$$, $a$$33$$ = $attr$$7$$.attr;
      $attr$$7$$.type && $attrs$$[$attr$$7$$.type] ? $matcher$$1$$ = $attrs$$[$attr$$7$$.type]($a$$33$$, $attr$$7$$.$matchFor$) : $a$$33$$.length && ($matcher$$1$$ = $defaultGetter$$($a$$33$$));
      $matcher$$1$$ && ($ff$$ = $agree$$($ff$$, $matcher$$1$$));
    });
    $ignores$$1$$.id || $query$$11$$.id && ($ff$$ = $agree$$($ff$$, function($elem$$32$$) {
      return !!$elem$$32$$ && $elem$$32$$.id == $query$$11$$.id;
    }));
    $ff$$ || "default" in $ignores$$1$$ || ($ff$$ = $goog$functions$TRUE$$);
    return $ff$$;
  }
  function $isOdd$$($elem$$21$$) {
    return $getNodeIndex$$($elem$$21$$) % 2;
  }
  function $isEven$$($elem$$20$$) {
    return !($getNodeIndex$$($elem$$20$$) % 2);
  }
  function $getNodeIndex$$($node$$35$$) {
    var $root$$7_te$$ = $node$$35$$.parentNode, $i$$124$$ = 0, $l$$21_tret$$ = $root$$7_te$$[$childNodesName$$], $ci$$ = $node$$35$$._i || -1, $cl$$ = $root$$7_te$$._l || -1;
    if (!$l$$21_tret$$) {
      return -1;
    }
    $l$$21_tret$$ = $l$$21_tret$$.length;
    if ($cl$$ == $l$$21_tret$$ && 0 <= $ci$$ && 0 <= $cl$$) {
      return $ci$$;
    }
    $root$$7_te$$._l = $l$$21_tret$$;
    $ci$$ = -1;
    for ($root$$7_te$$ = $root$$7_te$$.firstElementChild || $root$$7_te$$.firstChild;$root$$7_te$$;$root$$7_te$$ = $root$$7_te$$[$nSibling$$]) {
      $simpleNodeTest$$($root$$7_te$$) && ($root$$7_te$$._i = ++$i$$124$$, $node$$35$$ === $root$$7_te$$ && ($ci$$ = $i$$124$$));
    }
    return $ci$$;
  }
  function $_lookRight$$($node$$34$$) {
    for (;$node$$34$$ = $node$$34$$[$nSibling$$];) {
      if ($simpleNodeTest$$($node$$34$$)) {
        return !1;
      }
    }
    return !0;
  }
  function $_lookLeft$$($node$$33$$) {
    for (;$node$$33$$ = $node$$33$$[$pSibling$$];) {
      if ($simpleNodeTest$$($node$$33$$)) {
        return !1;
      }
    }
    return !0;
  }
  function $getAttr$$($elem$$13$$, $attr$$) {
    return $elem$$13$$ ? "class" == $attr$$ ? $elem$$13$$.className || "" : "for" == $attr$$ ? $elem$$13$$.htmlFor || "" : "style" == $attr$$ ? $elem$$13$$.style.cssText || "" : ($caseSensitive$$ ? $elem$$13$$.getAttribute($attr$$) : $elem$$13$$.getAttribute($attr$$, 2)) || "" : "";
  }
  function $isElement$$($n$$9$$) {
    return 1 == $n$$9$$.nodeType;
  }
  function $agree$$($first$$5$$, $second$$2$$) {
    return $first$$5$$ ? $second$$2$$ ? function() {
      return $first$$5$$.apply(window, arguments) && $second$$2$$.apply(window, arguments);
    } : $first$$5$$ : $second$$2$$;
  }
  function $getQueryParts$$($query$$10$$) {
    function $endAll$$() {
      0 <= $inId$$ && ($currentPart$$.id = $ts$$($inId$$, $x$$81$$).replace(/\\/g, ""), $inId$$ = -1);
      if (0 <= $inTag$$) {
        var $tv$$inline_303$$ = $inTag$$ == $x$$81$$ ? null : $ts$$($inTag$$, $x$$81$$);
        0 > ">~+".indexOf($tv$$inline_303$$) ? $currentPart$$.tag = $tv$$inline_303$$ : $currentPart$$.$oper$ = $tv$$inline_303$$;
        $inTag$$ = -1;
      }
      0 <= $inClass$$ && ($currentPart$$.$classes$.push($ts$$($inClass$$ + 1, $x$$81$$).replace(/\\/g, "")), $inClass$$ = -1);
    }
    function $ts$$($s$$22$$, $e$$37$$) {
      return $goog$string$trim$$($query$$10$$.slice($s$$22$$, $e$$37$$));
    }
    $query$$10$$ = 0 <= ">~+".indexOf($query$$10$$.slice(-1)) ? $query$$10$$ + " * " : $query$$10$$ + " ";
    for (var $queryParts$$ = [], $cmf_inBrackets$$ = -1, $inParens$$ = -1, $addToCc_inMatchFor$$ = -1, $inPseudo$$ = -1, $inClass$$ = -1, $inId$$ = -1, $inTag$$ = -1, $lc$$ = "", $cc$$2$$ = "", $pStart$$, $x$$81$$ = 0, $ql$$ = $query$$10$$.length, $currentPart$$ = null, $cp$$ = null;$lc$$ = $cc$$2$$, $cc$$2$$ = $query$$10$$.charAt($x$$81$$), $x$$81$$ < $ql$$;$x$$81$$++) {
      "\\" != $lc$$ && ($currentPart$$ || ($pStart$$ = $x$$81$$, $currentPart$$ = {$query$:null, $pseudos$:[], $attrs$:[], $classes$:[], tag:null, $oper$:null, id:null, $getTag$:function $$currentPart$$$$getTag$$() {
        return $caseSensitive$$ ? this.$otag$ : this.tag;
      }}, $inTag$$ = $x$$81$$), 0 <= $cmf_inBrackets$$ ? "]" == $cc$$2$$ ? ($cp$$.attr ? $cp$$.$matchFor$ = $ts$$($addToCc_inMatchFor$$ || $cmf_inBrackets$$ + 1, $x$$81$$) : $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$81$$), !($cmf_inBrackets$$ = $cp$$.$matchFor$) || '"' != $cmf_inBrackets$$.charAt(0) && "'" != $cmf_inBrackets$$.charAt(0) || ($cp$$.$matchFor$ = $cmf_inBrackets$$.slice(1, -1)), $currentPart$$.$attrs$.push($cp$$), $cp$$ = null, $cmf_inBrackets$$ = $addToCc_inMatchFor$$ = -1) : "=" == 
      $cc$$2$$ && ($addToCc_inMatchFor$$ = 0 <= "|~^$*".indexOf($lc$$) ? $lc$$ : "", $cp$$.type = $addToCc_inMatchFor$$ + $cc$$2$$, $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$81$$ - $addToCc_inMatchFor$$.length), $addToCc_inMatchFor$$ = $x$$81$$ + 1) : 0 <= $inParens$$ ? ")" == $cc$$2$$ && (0 <= $inPseudo$$ && ($cp$$.value = $ts$$($inParens$$ + 1, $x$$81$$)), $inPseudo$$ = $inParens$$ = -1) : "#" == $cc$$2$$ ? ($endAll$$(), $inId$$ = $x$$81$$ + 1) : "." == $cc$$2$$ ? ($endAll$$(), $inClass$$ = 
      $x$$81$$) : ":" == $cc$$2$$ ? ($endAll$$(), $inPseudo$$ = $x$$81$$) : "[" == $cc$$2$$ ? ($endAll$$(), $cmf_inBrackets$$ = $x$$81$$, $cp$$ = {}) : "(" == $cc$$2$$ ? (0 <= $inPseudo$$ && ($cp$$ = {name:$ts$$($inPseudo$$ + 1, $x$$81$$), value:null}, $currentPart$$.$pseudos$.push($cp$$)), $inParens$$ = $x$$81$$) : " " == $cc$$2$$ && $lc$$ != $cc$$2$$ && ($endAll$$(), 0 <= $inPseudo$$ && $currentPart$$.$pseudos$.push({name:$ts$$($inPseudo$$ + 1, $x$$81$$)}), $currentPart$$.$loops$ = $currentPart$$.$pseudos$.length || 
      $currentPart$$.$attrs$.length || $currentPart$$.$classes$.length, $currentPart$$.$oquery$ = $currentPart$$.$query$ = $ts$$($pStart$$, $x$$81$$), $currentPart$$.$otag$ = $currentPart$$.tag = $currentPart$$.$oper$ ? null : $currentPart$$.tag || "*", $currentPart$$.tag && ($currentPart$$.tag = $currentPart$$.tag.toUpperCase()), $queryParts$$.length && $queryParts$$[$queryParts$$.length - 1].$oper$ && ($currentPart$$.$infixOper$ = $queryParts$$.pop(), $currentPart$$.$query$ = $currentPart$$.$infixOper$.$query$ + 
      " " + $currentPart$$.$query$), $queryParts$$.push($currentPart$$), $currentPart$$ = null));
    }
    return $queryParts$$;
  }
  function $getArr$$($i$$123$$, $opt_arr$$) {
    var $r$$3$$ = $opt_arr$$ || [];
    $i$$123$$ && $r$$3$$.push($i$$123$$);
    return $r$$3$$;
  }
  var $cssCaseBug$$ = $goog$userAgent$WEBKIT$$ && "BackCompat" == document.compatMode, $legacyIE$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9"), $childNodesName$$ = document.firstChild.children ? "children" : "childNodes", $caseSensitive$$ = !1, $attrs$$ = {"*=":function($attr$$1$$, $value$$123$$) {
    return function($elem$$14$$) {
      return 0 <= $getAttr$$($elem$$14$$, $attr$$1$$).indexOf($value$$123$$);
    };
  }, "^=":function($attr$$2$$, $value$$124$$) {
    return function($elem$$15$$) {
      return 0 == $getAttr$$($elem$$15$$, $attr$$2$$).indexOf($value$$124$$);
    };
  }, "$=":function($attr$$3$$, $value$$125$$) {
    return function($ea_elem$$16$$) {
      $ea_elem$$16$$ = " " + $getAttr$$($ea_elem$$16$$, $attr$$3$$);
      return $ea_elem$$16$$.lastIndexOf($value$$125$$) == $ea_elem$$16$$.length - $value$$125$$.length;
    };
  }, "~=":function($attr$$4$$, $value$$126$$) {
    var $tval$$1$$ = " " + $value$$126$$ + " ";
    return function($elem$$17$$) {
      return 0 <= (" " + $getAttr$$($elem$$17$$, $attr$$4$$) + " ").indexOf($tval$$1$$);
    };
  }, "|=":function($attr$$5$$, $value$$127$$) {
    $value$$127$$ = " " + $value$$127$$;
    return function($ea$$2_elem$$18$$) {
      $ea$$2_elem$$18$$ = " " + $getAttr$$($ea$$2_elem$$18$$, $attr$$5$$);
      return $ea$$2_elem$$18$$ == $value$$127$$ || 0 == $ea$$2_elem$$18$$.indexOf($value$$127$$ + "-");
    };
  }, "=":function($attr$$6$$, $value$$128$$) {
    return function($elem$$19$$) {
      return $getAttr$$($elem$$19$$, $attr$$6$$) == $value$$128$$;
    };
  }}, $noNextElementSibling$$ = "undefined" == typeof document.firstChild.nextElementSibling, $nSibling$$ = $noNextElementSibling$$ ? "nextSibling" : "nextElementSibling", $pSibling$$ = $noNextElementSibling$$ ? "previousSibling" : "previousElementSibling", $simpleNodeTest$$ = $noNextElementSibling$$ ? $isElement$$ : $goog$functions$TRUE$$, $pseudos$$ = {checked:function() {
    return function($elem$$22$$) {
      return $elem$$22$$.checked || $elem$$22$$.attributes.checked;
    };
  }, "first-child":function() {
    return $_lookLeft$$;
  }, "last-child":function() {
    return $_lookRight$$;
  }, "only-child":function() {
    return function($node$$36$$) {
      return $_lookLeft$$($node$$36$$) && $_lookRight$$($node$$36$$) ? !0 : !1;
    };
  }, empty:function() {
    return function($elem$$23_x$$82$$) {
      var $cn$$ = $elem$$23_x$$82$$.childNodes;
      for ($elem$$23_x$$82$$ = $elem$$23_x$$82$$.childNodes.length - 1;0 <= $elem$$23_x$$82$$;$elem$$23_x$$82$$--) {
        var $nt$$ = $cn$$[$elem$$23_x$$82$$].nodeType;
        if (1 === $nt$$ || 3 == $nt$$) {
          return !1;
        }
      }
      return !0;
    };
  }, contains:function($name$$104$$, $condition$$8$$) {
    var $cz$$ = $condition$$8$$.charAt(0);
    if ('"' == $cz$$ || "'" == $cz$$) {
      $condition$$8$$ = $condition$$8$$.slice(1, -1);
    }
    return function($elem$$24$$) {
      return 0 <= $elem$$24$$.innerHTML.indexOf($condition$$8$$);
    };
  }, not:function($name$$105$$, $condition$$9$$) {
    var $p$$3$$ = $getQueryParts$$($condition$$9$$)[0], $ignores$$ = {$el$:1};
    "*" != $p$$3$$.tag && ($ignores$$.tag = 1);
    $p$$3$$.$classes$.length || ($ignores$$.$classes$ = 1);
    var $ntf$$ = $getSimpleFilterFunc$$($p$$3$$, $ignores$$);
    return function($elem$$25$$) {
      return !$ntf$$($elem$$25$$);
    };
  }, "nth-child":function($name$$106$$, $condition$$10$$) {
    if ("odd" == $condition$$10$$) {
      return $isOdd$$;
    }
    if ("even" == $condition$$10$$) {
      return $isEven$$;
    }
    if (-1 != $condition$$10$$.indexOf("n")) {
      var $tparts$$ = $condition$$10$$.split("n", 2), $pred$$ = $tparts$$[0] ? "-" == $tparts$$[0] ? -1 : parseInt($tparts$$[0], 10) : 1, $idx$$ = $tparts$$[1] ? parseInt($tparts$$[1], 10) : 0, $lb$$ = 0, $ub$$ = -1;
      0 < $pred$$ ? 0 > $idx$$ ? $idx$$ = $idx$$ % $pred$$ && $pred$$ + $idx$$ % $pred$$ : 0 < $idx$$ && ($idx$$ >= $pred$$ && ($lb$$ = $idx$$ - $idx$$ % $pred$$), $idx$$ = $idx$$ % $pred$$) : 0 > $pred$$ && ($pred$$ *= -1, 0 < $idx$$ && ($ub$$ = $idx$$, $idx$$ = $idx$$ % $pred$$));
      if (0 < $pred$$) {
        return function($elem$$26_i$$125$$) {
          $elem$$26_i$$125$$ = $getNodeIndex$$($elem$$26_i$$125$$);
          return $elem$$26_i$$125$$ >= $lb$$ && (0 > $ub$$ || $elem$$26_i$$125$$ <= $ub$$) && $elem$$26_i$$125$$ % $pred$$ == $idx$$;
        };
      }
      $condition$$10$$ = $idx$$;
    }
    var $ncount$$ = parseInt($condition$$10$$, 10);
    return function($elem$$27$$) {
      return $getNodeIndex$$($elem$$27$$) == $ncount$$;
    };
  }}, $defaultGetter$$ = $legacyIE$$ ? function($cond$$) {
    var $clc$$ = $cond$$.toLowerCase();
    "class" == $clc$$ && ($cond$$ = "className");
    return function($elem$$28$$) {
      return $caseSensitive$$ ? $elem$$28$$.getAttribute($cond$$) : $elem$$28$$[$cond$$] || $elem$$28$$[$clc$$];
    };
  } : function($cond$$1$$) {
    return function($elem$$29$$) {
      return $elem$$29$$ && $elem$$29$$.getAttribute && $elem$$29$$.hasAttribute($cond$$1$$);
    };
  }, $_getElementsFuncCache$$ = {}, $_queryFuncCacheDOM$$ = {}, $_queryFuncCacheQSA$$ = {}, $qsaAvail$$ = !!document.querySelectorAll && (!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("526")), $_zipIdx$$ = 0, $_nodeUID$$ = $legacyIE$$ ? function($node$$39$$) {
    return $caseSensitive$$ ? $node$$39$$.getAttribute("_uid") || $node$$39$$.setAttribute("_uid", ++$_zipIdx$$) || $_zipIdx$$ : $node$$39$$.uniqueID;
  } : function($node$$40$$) {
    return $node$$40$$._uid || ($node$$40$$._uid = ++$_zipIdx$$);
  };
  $query$$9$$.$pseudos$ = $pseudos$$;
  return $query$$9$$;
}();
$goog$exportPath_$$("goog.dom.query", $goog$dom$query$$);
$goog$exportPath_$$("goog.dom.query.pseudos", $goog$dom$query$$.$pseudos$);
function $z$client$ui$widget$MapWidget$$($imapClass_services$$15$$) {
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_map_facet");
  this.$a$.projects.subscribe(function($arrayChange$$) {
    $goog$array$forEach$$($arrayChange$$, function($item$$9$$) {
      "added" === $item$$9$$.status && console.log("Get the tile facet!");
    }, this);
  }, null, "arrayChange");
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_gem");
  var $textures$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_textures"), $tileVariationStrategy$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_tile_variation_strategy");
  this.$i$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_current_target");
  $imapClass_services$$15$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($imapClass_services$$15$$, "client_imap");
  this.$g$ = {$tileSize$:100};
  this.$c$ = new $imapClass_services$$15$$(this.$g$, $textures$$, $tileVariationStrategy$$);
  this.$j$ = new $goog$events$EventHandler$$(this);
  this.$j$.$listen$(this.$d$, "start_turn$0", this.$k$);
}
$z$client$ui$widget$MapWidget$$.prototype.$h$ = function $$z$client$ui$widget$MapWidget$$$$$h$$($mapEvent$$1$$) {
  this.$d$.currentTarget($JSCompiler_StaticMethods_getTileFacet$$(this.$a$, $mapEvent$$1$$.tileX, $mapEvent$$1$$.tileY));
};
$z$client$ui$widget$MapWidget$$.prototype.$e$ = function $$z$client$ui$widget$MapWidget$$$$$e$$($mapEvent$$2_showContextMenu$$) {
  var $facet$$1$$ = $JSCompiler_StaticMethods_getTileFacet$$(this.$a$, $mapEvent$$2_showContextMenu$$.tileX, $mapEvent$$2_showContextMenu$$.tileY);
  this.$i$($facet$$1$$);
  $mapEvent$$2_showContextMenu$$ = new $z$client$events$ShowContextMenu$$($JSCompiler_StaticMethods_getTerrainMeta$$($facet$$1$$), new $goog$math$Coordinate$$($mapEvent$$2_showContextMenu$$.clientX, $mapEvent$$2_showContextMenu$$.clientY));
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$a$, $mapEvent$$2_showContextMenu$$);
};
$z$client$ui$widget$MapWidget$$.prototype.$k$ = function $$z$client$ui$widget$MapWidget$$$$$k$$() {
  $goog$array$forEach$$(this.$a$.tiles(), this.$f$, this);
};
$z$client$ui$widget$MapWidget$$.prototype.$f$ = function $$z$client$ui$widget$MapWidget$$$$$f$$($tileFacet$$) {
  if ($tileFacet$$) {
    var $x$$89$$ = $tileFacet$$.x, $y$$54$$ = $tileFacet$$.y, $adjacent$$2$$ = $goog$array$map$$($JSCompiler_StaticMethods_mugd_utils_Grid_prototype$getAdjacent$$(this.$a$.$b$, $x$$89$$, $y$$54$$), function($tileFacet$$1$$) {
      return $tileFacet$$1$$ ? $JSCompiler_StaticMethods__getTerrain$$(this, $tileFacet$$1$$) : {};
    }, this);
    this.$c$.drawTile($x$$89$$, $y$$54$$, $JSCompiler_StaticMethods__getTerrain$$(this, $tileFacet$$), $adjacent$$2$$);
  }
};
function $JSCompiler_StaticMethods__getTerrain$$($JSCompiler_StaticMethods__getTerrain$self$$, $tileFacet$$2$$) {
  var $terrain$$10$$ = $tileFacet$$2$$.terrain(), $terrain$$10$$ = $goog$object$unsafeClone$$($terrain$$10$$);
  if ($tileFacet$$2$$.$entity$()) {
    var $notice_overlay_overlay$$inline_337$$, $data$$inline_338_tile$$inline_336$$ = $tileFacet$$2$$.$entity$();
    $notice_overlay_overlay$$inline_337$$ = null;
    $data$$inline_338_tile$$inline_336$$ && ($data$$inline_338_tile$$inline_336$$ = $data$$inline_338_tile$$inline_336$$.$zombieData$, 10 <= $data$$inline_338_tile$$inline_336$$.$density$ && 15 > $data$$inline_338_tile$$inline_336$$.$density$ ? $notice_overlay_overlay$$inline_337$$ = "zombie_density_low" : 15 <= $data$$inline_338_tile$$inline_336$$.$density$ && 20 > $data$$inline_338_tile$$inline_336$$.$density$ ? $notice_overlay_overlay$$inline_337$$ = "zombie_density_medium" : 20 <= $data$$inline_338_tile$$inline_336$$.$density$ && 
    ($notice_overlay_overlay$$inline_337$$ = "zombie_density_high"));
    $notice_overlay_overlay$$inline_337$$ && ($terrain$$10$$.overlay = $notice_overlay_overlay$$inline_337$$);
    ($notice_overlay_overlay$$inline_337$$ = $JSCompiler_StaticMethods__getNotice$$($JSCompiler_StaticMethods__getTerrain$self$$, $tileFacet$$2$$)) && ($terrain$$10$$.notice = $notice_overlay_overlay$$inline_337$$);
  }
  return $terrain$$10$$;
}
function $JSCompiler_StaticMethods__getNotice$$($JSCompiler_StaticMethods__getNotice$self$$, $tileFacet$$4$$) {
  var $notice$$1$$ = null;
  $goog$array$find$$($JSCompiler_StaticMethods__getNotice$self$$.$a$.projects(), function($project$$12$$) {
    return $project$$12$$.$entity$().$tile$ === $tileFacet$$4$$.$entity$().$guid$;
  }) && ($notice$$1$$ = "project_notice");
  return $notice$$1$$;
}
;function $z$client$User$$() {
}
$z$client$User$$.prototype.name = null;
function $z$client$facet$ActorFacet$$($injector$$1_services$$16$$) {
  $z$client$facet$EntityFacet$$.call(this);
  this.resources = new $z$client$facet$StockpileFacet$$;
  this.points = ko.observable(0);
  $injector$$1_services$$16$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($injector$$1_services$$16$$, $z$common$Resources$INJECTOR$$);
  this.$b$ = ko.observable(new $z$common$EntityEmptyQuery$$);
  this.unassignedCharactersListFacet = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_With$$($JSCompiler_StaticMethods_Compose$$($injector$$1_services$$16$$, $z$client$facet$CharacterListFacet$$), {entityQueryObservable:this.$b$}));
}
$goog$inherits$$($z$client$facet$ActorFacet$$, $z$client$facet$EntityFacet$$);
$z$client$facet$ActorFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$ActorFacet$$$$$setParentEventTarget$$($parent$$22$$) {
  $z$client$facet$ActorFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$22$$);
  this.unassignedCharactersListFacet.$setParentEventTarget$($parent$$22$$);
};
$z$client$facet$ActorFacet$$.prototype.$_update$ = function $$z$client$facet$ActorFacet$$$$$_update$$() {
  var $actor$$15_entityQuery$$2$$ = this.$entity$();
  this.resources.update($actor$$15_entityQuery$$2$$.$stockpile$);
  this.points($actor$$15_entityQuery$$2$$.$e$);
  $actor$$15_entityQuery$$2$$ = $z$common$queries$getUnassignedQuery$$($actor$$15_entityQuery$$2$$.$guid$);
  this.$b$($actor$$15_entityQuery$$2$$);
};
function $z$client$GameSession$$($services$$17$$) {
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$17$$, "common_world");
  this.$b$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$17$$, "client_game_session_widget");
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$17$$, "client_game_dom_element");
}
function $JSCompiler_StaticMethods_z_client_GameSession_prototype$start$$($JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$) {
  var $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$ = $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$b$, $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$ = 
  $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$a$;
  $JSCompiler_StaticMethods_initKo$$();
  ko.applyBindings($JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$b$, $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$);
  var $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$ = $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$c$, $actor$$inline_790_targetElement$$inline_784$$ = $goog$dom$getElementHelper_$$(document, 
  "map");
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$b$ = $actor$$inline_790_targetElement$$inline_784$$;
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$c$.claim($actor$$inline_790_targetElement$$inline_784$$.id);
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$c$.onTileFocused($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$h$.bind($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$));
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$c$.onTileContext($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$e$.bind($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$));
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$c$.onTileContext($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$e$.bind($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$));
  $goog$events$listen$$($JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$b$, "contextmenu", $goog$events$Event$preventDefault$$, !1);
  $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$ = $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$a$;
  $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$b$ = $goog$dom$getElementHelper_$$(document, "context_menu");
  $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$c$.$listen$($goog$dom$getParentElement$$($JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$b$), 
  "mousedown", $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$.$d$);
  $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$ = $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$c$;
  $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$ = $goog$bind$$($JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$i$, $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$);
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$ = $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$e$;
  $actor$$inline_790_targetElement$$inline_784$$ = $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$a$.$a$(new $z$common$data$ActorData$$(null, "modified", "actor_player", $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$g$.$d$.$startingResources$, 
  0));
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$b$[$actor$$inline_790_targetElement$$inline_784$$.$guid$] = $actor$$inline_790_targetElement$$inline_784$$;
  $JSCompiler_StaticMethods_createPlayerActor$self$$inline_788_JSCompiler_StaticMethods_z_client_ui_widget_MapWidget_prototype$claim$self$$inline_783_gameDomElement$$inline_341$$.$h$[$actor$$inline_790_targetElement$$inline_784$$.$guid$] = $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$;
  $JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$ = $z$common$data$ActorData$fromEntity$$($actor$$inline_790_targetElement$$inline_784$$);
  $JSCompiler_StaticMethods_setEntity$$($JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$d$, $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$a$.$a$($JSCompiler_StaticMethods_z_client_ui_widget_ContextMenuWidget_prototype$claim$self$$inline_786_JSCompiler_StaticMethods_z_client_ui_widget_GameSessionWidget_prototype$claim$self$$inline_340_actorData$$inline_345_callback$$inline_344$$));
  $JSCompiler_StaticMethods_actorEndTurn$$($JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$e$, new $z$common$data$ClientEndTurn$$($JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$d$.guid, $JSCompiler_StaticMethods_firstTurn$self$$inline_343_JSCompiler_StaticMethods_z_client_GameSession_prototype$start$self$$.$b$, []));
}
;function $z$client$facet$ProjectFacet$$($services$$18$$) {
  $z$client$facet$EntityFacet$$.call(this);
  this.completion = ko.observable(0);
  this.completionPercent = ko.computed(function() {
    return 100 * this.completion();
  }, this);
  var $self$$3$$ = this, $entityQueryObservable$$ = ko.computed(function() {
    var $workforceQuery$$ = new $z$common$EntityQuery$$;
    $workforceQuery$$.match = function $$workforceQuery$$$match$($entity$$39$$) {
      return $entity$$39$$ instanceof $z$common$entities$Character$$ ? !(!$self$$3$$.$entity$() || $entity$$39$$.$c$ !== $self$$3$$.$entity$().$guid$) : !1;
    };
    return $workforceQuery$$;
  });
  this.workforce = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_With$$($JSCompiler_StaticMethods_Compose$$($JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$18$$, $z$common$Resources$INJECTOR$$), $z$client$facet$CharacterListFacet$$), {entityQueryObservable:$entityQueryObservable$$}));
  this.remove = ko.observable(!1);
  this.remove.subscribe(this.$handleRemoveSubscribe$, this);
  this.$b$ = new $z$client$actions$AssignCharacterToProject$$;
}
$goog$inherits$$($z$client$facet$ProjectFacet$$, $z$client$facet$EntityFacet$$);
$JSCompiler_prototypeAlias$$ = $z$client$facet$ProjectFacet$$.prototype;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$23$$) {
  $z$client$facet$ProjectFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$23$$);
  this.workforce.$setParentEventTarget$($parent$$23$$);
};
$JSCompiler_prototypeAlias$$.$_update$ = function $$JSCompiler_prototypeAlias$$$$_update$$() {
  var $project$$13$$ = this.$entity$(), $state$$8$$ = $project$$13$$.$a$;
  this.remove("kill" === $state$$8$$ || "dead" === $state$$8$$);
  this.completion($project$$13$$.$f$);
};
$JSCompiler_prototypeAlias$$.$handleRemoveSubscribe$ = function $$JSCompiler_prototypeAlias$$$$handleRemoveSubscribe$$($value$$129$$) {
  $value$$129$$ ? $JSCompiler_StaticMethods_setState$$(this.$entity$(), "kill") : $JSCompiler_StaticMethods_setState$$(this.$entity$(), "modified");
};
$JSCompiler_prototypeAlias$$.$canDrop$ = function $$JSCompiler_prototypeAlias$$$$canDrop$$($facet$$2$$) {
  if ($facet$$2$$ instanceof $z$client$facet$CharacterFacet$$) {
    var $args$$22$$ = {target:this};
    $args$$22$$.asset = $facet$$2$$;
    return $JSCompiler_StaticMethods_canExecute$$(this.$b$, $args$$22$$);
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$doDrop$ = function $$JSCompiler_prototypeAlias$$$$doDrop$$($facet$$3$$) {
  var $args$$23$$ = {target:this};
  $args$$23$$.asset = $facet$$3$$;
  return this.$b$.execute($args$$23$$);
};
function $z$client$ui$widget$GameSessionWidget$$($services$$19$$) {
  this.$b$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$19$$, "client_gem");
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$19$$, "client_map widget");
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$19$$, "client_context_menu_widget");
}
function $JSCompiler_StaticMethods_initKo$$() {
  function $zeroFill2$$($hours_hours2$$) {
    $hours_hours2$$ = $hours_hours2$$ + "";
    1 === $hours_hours2$$.length && ($hours_hours2$$ = "0" + $hours_hours2$$);
    return $hours_hours2$$;
  }
  ko.bindingHandlers.time = {update:function $ko$bindingHandlers$time$update$($element$$85$$, $valueAccessor$$2$$) {
    var $date$$2$$ = ko.utils.unwrapObservable($valueAccessor$$2$$());
    $element$$85$$.innerHTML = $zeroFill2$$($date$$2$$.getHours()) + ":" + $zeroFill2$$($date$$2$$.getMinutes()) + ":" + $zeroFill2$$($date$$2$$.getSeconds());
  }};
  ko.bindingHandlers.scrollIntoView = {update:function $ko$bindingHandlers$scrollIntoView$update$($element$$86$$) {
    setTimeout(function() {
      var $container$$inline_348$$ = $element$$86$$.parentElement, $containerPos$$inline_796_offset$$inline_350$$, $elementPos$$inline_795_relY$$inline_799$$ = $goog$style$getPageOffset$$($element$$86$$);
      $containerPos$$inline_796_offset$$inline_350$$ = $goog$style$getPageOffset$$($container$$inline_348$$);
      var $containerBorder$$inline_797_left$$inline_921$$;
      if ($goog$userAgent$IE$$ && !$goog$userAgent$isDocumentModeOrHigher$$(9)) {
        $containerBorder$$inline_797_left$$inline_921$$ = $goog$style$getIePixelBorder_$$($container$$inline_348$$, "borderLeft");
        var $relX$$inline_798_right$$inline_922$$ = $goog$style$getIePixelBorder_$$($container$$inline_348$$, "borderRight"), $spaceX$$inline_800_top$$inline_923$$ = $goog$style$getIePixelBorder_$$($container$$inline_348$$, "borderTop"), $bottom$$inline_924_spaceY$$inline_801$$ = $goog$style$getIePixelBorder_$$($container$$inline_348$$, "borderBottom");
        $containerBorder$$inline_797_left$$inline_921$$ = new $goog$math$Box$$($spaceX$$inline_800_top$$inline_923$$, $relX$$inline_798_right$$inline_922$$, $bottom$$inline_924_spaceY$$inline_801$$, $containerBorder$$inline_797_left$$inline_921$$);
      } else {
        $containerBorder$$inline_797_left$$inline_921$$ = $goog$style$getComputedStyle$$($container$$inline_348$$, "borderLeftWidth"), $relX$$inline_798_right$$inline_922$$ = $goog$style$getComputedStyle$$($container$$inline_348$$, "borderRightWidth"), $spaceX$$inline_800_top$$inline_923$$ = $goog$style$getComputedStyle$$($container$$inline_348$$, "borderTopWidth"), $bottom$$inline_924_spaceY$$inline_801$$ = $goog$style$getComputedStyle$$($container$$inline_348$$, "borderBottomWidth"), $containerBorder$$inline_797_left$$inline_921$$ = 
        new $goog$math$Box$$(parseFloat($spaceX$$inline_800_top$$inline_923$$), parseFloat($relX$$inline_798_right$$inline_922$$), parseFloat($bottom$$inline_924_spaceY$$inline_801$$), parseFloat($containerBorder$$inline_797_left$$inline_921$$));
      }
      var $relX$$inline_798_right$$inline_922$$ = $elementPos$$inline_795_relY$$inline_799$$.x - $containerPos$$inline_796_offset$$inline_350$$.x - $containerBorder$$inline_797_left$$inline_921$$.left, $elementPos$$inline_795_relY$$inline_799$$ = $elementPos$$inline_795_relY$$inline_799$$.y - $containerPos$$inline_796_offset$$inline_350$$.y - $containerBorder$$inline_797_left$$inline_921$$.top, $spaceX$$inline_800_top$$inline_923$$ = $container$$inline_348$$.clientWidth - $element$$86$$.offsetWidth, 
      $bottom$$inline_924_spaceY$$inline_801$$ = $container$$inline_348$$.clientHeight - $element$$86$$.offsetHeight, $scrollLeft$$inline_802$$ = $container$$inline_348$$.scrollLeft, $scrollTop$$inline_803$$ = $container$$inline_348$$.scrollTop;
      if ($container$$inline_348$$ == document.body || $container$$inline_348$$ == document.documentElement) {
        $scrollLeft$$inline_802$$ = $containerPos$$inline_796_offset$$inline_350$$.x + $containerBorder$$inline_797_left$$inline_921$$.left, $scrollTop$$inline_803$$ = $containerPos$$inline_796_offset$$inline_350$$.y + $containerBorder$$inline_797_left$$inline_921$$.top, $goog$userAgent$IE$$ && !$goog$userAgent$isDocumentModeOrHigher$$(10) && ($scrollLeft$$inline_802$$ += $containerBorder$$inline_797_left$$inline_921$$.left, $scrollTop$$inline_803$$ += $containerBorder$$inline_797_left$$inline_921$$.top)
        ;
      }
      $scrollLeft$$inline_802$$ += Math.min($relX$$inline_798_right$$inline_922$$, Math.max($relX$$inline_798_right$$inline_922$$ - $spaceX$$inline_800_top$$inline_923$$, 0));
      $scrollTop$$inline_803$$ += Math.min($elementPos$$inline_795_relY$$inline_799$$, Math.max($elementPos$$inline_795_relY$$inline_799$$ - $bottom$$inline_924_spaceY$$inline_801$$, 0));
      $containerPos$$inline_796_offset$$inline_350$$ = new $goog$math$Coordinate$$($scrollLeft$$inline_802$$, $scrollTop$$inline_803$$);
      $container$$inline_348$$.scrollLeft = $containerPos$$inline_796_offset$$inline_350$$.x;
      $container$$inline_348$$.scrollTop = $containerPos$$inline_796_offset$$inline_350$$.y;
    }, 0);
  }};
}
;function $z$client$ui$widget$ContextMenuWidget$$($services$$20$$) {
  $goog$Disposable$$.call(this);
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$20$$, "client_context_menu_facet");
  this.$c$ = new $goog$events$EventHandler$$(this);
}
$goog$inherits$$($z$client$ui$widget$ContextMenuWidget$$, $goog$Disposable$$);
$z$client$ui$widget$ContextMenuWidget$$.prototype.$d$ = function $$z$client$ui$widget$ContextMenuWidget$$$$$d$$($e$$41$$) {
  this.$a$.visible() && !this.$b$.contains($e$$41$$.target) && $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$$(this.$a$);
};
$z$client$ui$widget$ContextMenuWidget$$.prototype.$disposeInternal$ = function $$z$client$ui$widget$ContextMenuWidget$$$$$disposeInternal$$() {
  $JSCompiler_StaticMethods_dispose$$(this.$c$);
};
function $z$client$actions$CreateProject$$($services$$21$$) {
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$21$$, "current_project");
  $z$client$action$Action$$.call(this, this.$a$.name);
  this.$f$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$21$$, $z$common$Resources$REPOSITORY$$);
  this.$e$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$21$$, "client_player_facet");
  this.$meta$ = {type:"action_create_project" + this.$a$.type, $category$:"action", name:this.$a$.name, description:"Start doing the following: " + this.$a$.description};
}
$goog$inherits$$($z$client$actions$CreateProject$$, $z$client$action$Action$$);
$z$client$actions$CreateProject$$.prototype.$g$ = $goog$debug$LogManager$getLogger$$("z.client.actions.CreateProject");
$z$client$actions$CreateProject$$.prototype.$c$ = function $$z$client$actions$CreateProject$$$$$c$$($args$$24_entity$$40$$) {
  $args$$24_entity$$40$$ = $args$$24_entity$$40$$.target.$entity$();
  var $JSCompiler_temp$$33_key$$inline_354$$;
  if (null === $args$$24_entity$$40$$ || "tile" !== $args$$24_entity$$40$$.$meta$.$category$) {
    $JSCompiler_temp$$33_key$$inline_354$$ = !1;
  } else {
    a: {
      var $JSCompiler_StaticMethods_isApplicable$self$$inline_352$$ = this.$a$;
      for ($JSCompiler_temp$$33_key$$inline_354$$ in $JSCompiler_StaticMethods_isApplicable$self$$inline_352$$.$a$.prerequisites) {
        if ($JSCompiler_StaticMethods_isApplicable$self$$inline_352$$.$a$.prerequisites.hasOwnProperty($JSCompiler_temp$$33_key$$inline_354$$) && !$z$common$rulebook$logic$prerequisites$$[$JSCompiler_temp$$33_key$$inline_354$$]($JSCompiler_StaticMethods_isApplicable$self$$inline_352$$.$a$.prerequisites[$JSCompiler_temp$$33_key$$inline_354$$], $args$$24_entity$$40$$)) {
          $JSCompiler_temp$$33_key$$inline_354$$ = !1;
          break a;
        }
      }
      $JSCompiler_temp$$33_key$$inline_354$$ = !0;
    }
  }
  return $JSCompiler_temp$$33_key$$inline_354$$;
};
$z$client$actions$CreateProject$$.prototype.$d$ = function $$z$client$actions$CreateProject$$$$$d$$($args$$25_target$$68$$) {
  $args$$25_target$$68$$ = $args$$25_target$$68$$.target;
  var $projectData$$3$$ = new $z$common$data$ProjectData$$(null, null, this.$a$.type, "modified", 0, null, [], {});
  $projectData$$3$$.$tileId$ = $args$$25_target$$68$$.guid;
  $projectData$$3$$.$ownerId$ = this.$e$.guid;
  this.$f$.$a$($projectData$$3$$);
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$(this.$g$, "Create a " + this.$a$.name + " at target (" + $args$$25_target$$68$$.$entity$().position.x + ";" + $args$$25_target$$68$$.$entity$().position.y + ")");
};
$z$client$actions$CreateProject$$.prototype.$b$ = ["target"];
function $z$client$ActionFactory$$($services$$22$$) {
  this.$b$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$22$$, $z$common$Resources$RULEBOOK$$);
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$22$$, $z$common$Resources$INJECTOR$$);
}
function $JSCompiler_StaticMethods__createActions$$($JSCompiler_StaticMethods__createActions$self$$, $metas$$1$$) {
  var $actions$$ = [];
  if ($JSCompiler_StaticMethods__hasCategory$$($metas$$1$$)) {
    var $factory$$1$$ = $JSCompiler_StaticMethods_Compose$$($JSCompiler_StaticMethods__createActions$self$$.$a$, $z$client$actions$CreateProject$$);
    $goog$array$forEach$$($JSCompiler_StaticMethods__createActions$self$$.$b$.$e$, function($project$$14$$) {
      $actions$$.push($JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_With$$($factory$$1$$, {current_project:$project$$14$$})));
    });
  }
  return $actions$$;
}
function $JSCompiler_StaticMethods__hasCategory$$($metas$$2$$) {
  return $goog$array$some$$($metas$$2$$, function($meta$$16$$) {
    return "terrain" === $meta$$16$$.$category$;
  });
}
;function $z$client$facet$ActionFacet$$($action$$2$$) {
  this.$_action$ = $action$$2$$;
  this.type = this.$_action$.$meta$.type;
  this.category = this.$_action$.$meta$.$category$;
  this.name = this.$_action$.$meta$.name;
  this.description = this.$_action$.$meta$.description;
  this.className = this.name.toLocaleLowerCase().split(" ").join("-");
  $goog$array$forEach$$(this.$_action$.$b$, function($item$$10$$) {
    this[$item$$10$$] = ko.observable();
  }, this);
  this.canExecute = ko.computed(this.$a$, this);
}
function $JSCompiler_StaticMethods__getArgs$$($JSCompiler_StaticMethods__getArgs$self$$) {
  var $args$$26$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods__getArgs$self$$.$_action$.$b$, function($item$$11$$) {
    $args$$26$$[$item$$11$$] = this[$item$$11$$]();
  }, $JSCompiler_StaticMethods__getArgs$self$$);
  return $args$$26$$;
}
$z$client$facet$ActionFacet$$.prototype.$a$ = function $$z$client$facet$ActionFacet$$$$$a$$() {
  var $args$$27$$ = $JSCompiler_StaticMethods__getArgs$$(this);
  return $JSCompiler_StaticMethods_canExecute$$(this.$_action$, $args$$27$$);
};
$z$client$facet$ActionFacet$$.prototype.execute = function $$z$client$facet$ActionFacet$$$$execute$() {
  var $args$$28$$ = $JSCompiler_StaticMethods__getArgs$$(this);
  this.$_action$.execute($args$$28$$);
};
function $z$client$facet$ToolbarFacet$$($openProjectManagementAction_services$$23$$) {
  $z$client$facet$Facet$$.call(this);
  this.actionFacets = ko.observableArray();
  var $endTurnAction$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($openProjectManagementAction_services$$23$$, "client_end_turn_action");
  $openProjectManagementAction_services$$23$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($openProjectManagementAction_services$$23$$, "client_open_project_management_action");
  this.actionFacets.push(new $z$client$facet$ActionFacet$$($endTurnAction$$));
  this.actionFacets.push(new $z$client$facet$ActionFacet$$($openProjectManagementAction_services$$23$$));
}
$goog$inherits$$($z$client$facet$ToolbarFacet$$, $z$client$facet$Facet$$);
function $z$common$data$ProjectData$$($guid$$10$$, $ownerId$$3$$, $type$$129$$, $state$$9$$, $priority$$, $tileId$$, $resources$$1$$, $investment$$1$$) {
  this.$guid$ = $guid$$10$$;
  this.$ownerId$ = $ownerId$$3$$;
  this.type = $type$$129$$;
  this.state = $state$$9$$;
  this.$b$ = $priority$$;
  this.$tileId$ = $tileId$$;
  this.$c$ = $resources$$1$$;
  this.$a$ = $investment$$1$$;
}
function $z$common$data$ProjectData$fromEntity$$($investment$$2_project$$15$$) {
  var $guid$$11$$ = $investment$$2_project$$15$$.$guid$, $ownerId$$4$$ = $investment$$2_project$$15$$.$b$, $type$$130$$ = $investment$$2_project$$15$$.$meta$.type, $state$$10$$ = $investment$$2_project$$15$$.$a$, $priority$$1$$ = $investment$$2_project$$15$$.$i$, $tileId$$1$$ = $investment$$2_project$$15$$.$tile$, $resources$$2$$ = $investment$$2_project$$15$$.$l$;
  $investment$$2_project$$15$$ = $JSCompiler_StaticMethods_peekAll$$($investment$$2_project$$15$$.$d$);
  return new $z$common$data$ProjectData$$($guid$$11$$, $ownerId$$4$$, $type$$130$$, $state$$10$$, $priority$$1$$, $tileId$$1$$, $resources$$2$$, $investment$$2_project$$15$$);
}
;function $z$common$entities$Project$$($services$$24$$) {
  $z$common$entities$Entity$$.call(this, $services$$24$$);
  this.name = this.$meta$.name;
  var $projectData$$4$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$24$$, "entityData");
  $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$24$$, $z$common$Resources$REPOSITORY$$);
  this.$category$ = this.$meta$.$category$;
  this.$activity$ = this.$meta$.$activity$;
  this.$i$ = $projectData$$4$$.$b$;
  this.$tile$ = $projectData$$4$$.$tileId$;
  this.$d$ = new $z$common$Stockpile$$;
  $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$(this.$d$, $projectData$$4$$.$a$);
  this.duration = this.$f$ = 0;
  this.$l$ = $projectData$$4$$.$c$;
}
$goog$inherits$$($z$common$entities$Project$$, $z$common$entities$Entity$$);
function $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$, $investment$$4$$) {
  var $shouldTriggerComplete$$1_wasDone$$;
  $shouldTriggerComplete$$1_wasDone$$ = !$goog$object$some$$($JSCompiler_StaticMethods_diffAll$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$d$, $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$meta$.$cost$));
  var $previous$$inline_358$$ = $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$f$;
  $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$d$, $investment$$4$$);
  $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$f$ = $JSCompiler_StaticMethods_ratioAll$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$d$, $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$meta$.$cost$);
  $previous$$inline_358$$ !== $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$f$ && $JSCompiler_StaticMethods__setModified$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$);
  $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.duration += 1;
  $shouldTriggerComplete$$1_wasDone$$ ? $shouldTriggerComplete$$1_wasDone$$ = !1 : ($shouldTriggerComplete$$1_wasDone$$ = !$goog$object$some$$($JSCompiler_StaticMethods_diffAll$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$d$, $JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$.$meta$.$cost$)), $JSCompiler_StaticMethods__setModified$$($JSCompiler_StaticMethods_z_common_entities_Project_prototype$advance$self$$));
  return $shouldTriggerComplete$$1_wasDone$$;
}
$z$common$entities$Project$$.prototype.trigger = function $$z$common$entities$Project$$$$trigger$($triggerArgs$$9$$) {
  $triggerArgs$$9$$.duration = this.duration;
  var $effects$$5$$ = [];
  $goog$array$some$$(this.$meta$.$triggers$, function($trigger$$4$$) {
    return $trigger$$4$$.test($triggerArgs$$9$$) ? ($effects$$5$$ = $JSCompiler_StaticMethods_effects$$($trigger$$4$$), !0) : !1;
  });
  return $effects$$5$$;
};
$z$common$entities$Project$$.prototype.$_update$ = function $$z$common$entities$Project$$$$$_update$$($entityData$$7$$, $meta$$17_updated$$4$$, $diff_owner$$11$$) {
  if (!($entityData$$7$$ instanceof $z$common$data$ProjectData$$)) {
    throw {name:"InvalidDataException", message:"not a z.common.data.ProjectData"};
  }
  $meta$$17_updated$$4$$ = !1;
  this.$i$ !== $entityData$$7$$.$b$ && (this.$i$ = $entityData$$7$$.$b$, $meta$$17_updated$$4$$ = !0);
  null != $diff_owner$$11$$ && this.$b$ !== $diff_owner$$11$$ && (this.$b$ = $diff_owner$$11$$, $meta$$17_updated$$4$$ = !0);
  $diff_owner$$11$$ = $JSCompiler_StaticMethods_diffAll$$(this.$d$, $entityData$$7$$.$a$);
  $goog$object$some$$($diff_owner$$11$$) && ($JSCompiler_StaticMethods_purgeAll$$(this.$d$), $JSCompiler_StaticMethods_z_common_Stockpile_prototype$addAll$$(this.$d$, $entityData$$7$$.$a$), $meta$$17_updated$$4$$ = !0);
  this.$f$ = $JSCompiler_StaticMethods_ratioAll$$(this.$d$, this.$meta$.$cost$);
  return $meta$$17_updated$$4$$;
};
function $z$client$facet$ProjectListFacet$$($services$$25$$) {
  $z$client$facet$Facet$$.call(this);
  this.projects = ko.observableArray();
  this.$b$ = function $this$$b$$($entity$$41$$) {
    var $newFacet$$ = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$25$$, "client_project_facet"));
    $JSCompiler_StaticMethods_setEntity$$($newFacet$$, $entity$$41$$);
    return $newFacet$$;
  };
}
$goog$inherits$$($z$client$facet$ProjectListFacet$$, $z$client$facet$Facet$$);
$z$client$facet$ProjectListFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$ProjectListFacet$$$$$setParentEventTarget$$($parent$$24$$) {
  $z$client$facet$ProjectListFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$24$$);
  this.$a$.$listen$($parent$$24$$, "entity_created$3", this.$c$);
  this.$a$.$listen$($parent$$24$$, $z$common$events$EventType$ENTITY_MODIFIED$$, this.$d$);
  this.$a$.$listen$($parent$$24$$, "start_turn$0", this.$e$);
};
$z$client$facet$ProjectListFacet$$.prototype.$e$ = function $$z$client$facet$ProjectListFacet$$$$$e$$() {
  this.projects.remove(function($project$$16$$) {
    return $project$$16$$.remove();
  });
};
$z$client$facet$ProjectListFacet$$.prototype.$c$ = function $$z$client$facet$ProjectListFacet$$$$$c$$($e$$43_entity$$42_projectFacet$$) {
  $e$$43_entity$$42_projectFacet$$ = $e$$43_entity$$42_projectFacet$$.$entity$;
  $e$$43_entity$$42_projectFacet$$ instanceof $z$common$entities$Project$$ && ($e$$43_entity$$42_projectFacet$$ = this.$b$($e$$43_entity$$42_projectFacet$$), $e$$43_entity$$42_projectFacet$$.$setParentEventTarget$(this.$h$), this.projects.push($e$$43_entity$$42_projectFacet$$));
};
$z$client$facet$ProjectListFacet$$.prototype.$d$ = function $$z$client$facet$ProjectListFacet$$$$$d$$() {
};
function $mugd$utils$MersenneTwister$$($seed$$1$$) {
  void 0 == $seed$$1$$ && ($seed$$1$$ = (new Date).getTime());
  this.$a$ = Array(624);
  this.$b$ = 625;
  $JSCompiler_StaticMethods_init_genrand$$(this, $seed$$1$$);
}
function $JSCompiler_StaticMethods_init_genrand$$($JSCompiler_StaticMethods_init_genrand$self$$, $seed$$2$$) {
  $JSCompiler_StaticMethods_init_genrand$self$$.$a$[0] = $seed$$2$$ >>> 0;
  for ($JSCompiler_StaticMethods_init_genrand$self$$.$b$ = 1;624 > $JSCompiler_StaticMethods_init_genrand$self$$.$b$;$JSCompiler_StaticMethods_init_genrand$self$$.$b$++) {
    var $s$$23$$ = $JSCompiler_StaticMethods_init_genrand$self$$.$a$[$JSCompiler_StaticMethods_init_genrand$self$$.$b$ - 1] ^ $JSCompiler_StaticMethods_init_genrand$self$$.$a$[$JSCompiler_StaticMethods_init_genrand$self$$.$b$ - 1] >>> 30;
    $JSCompiler_StaticMethods_init_genrand$self$$.$a$[$JSCompiler_StaticMethods_init_genrand$self$$.$b$] = (1812433253 * (($s$$23$$ & 4294901760) >>> 16) << 16) + 1812433253 * ($s$$23$$ & 65535) + $JSCompiler_StaticMethods_init_genrand$self$$.$b$;
    $JSCompiler_StaticMethods_init_genrand$self$$.$a$[$JSCompiler_StaticMethods_init_genrand$self$$.$b$] >>>= 0;
  }
}
$mugd$utils$MersenneTwister$$.prototype.random = function $$mugd$utils$MersenneTwister$$$$random$() {
  var $y$$inline_361$$, $mag01$$inline_362$$ = [0, 2567483615];
  if (624 <= this.$b$) {
    var $kk$$inline_363$$;
    625 == this.$b$ && $JSCompiler_StaticMethods_init_genrand$$(this, 5489);
    for ($kk$$inline_363$$ = 0;227 > $kk$$inline_363$$;$kk$$inline_363$$++) {
      $y$$inline_361$$ = this.$a$[$kk$$inline_363$$] & 2147483648 | this.$a$[$kk$$inline_363$$ + 1] & 2147483647, this.$a$[$kk$$inline_363$$] = this.$a$[$kk$$inline_363$$ + 397] ^ $y$$inline_361$$ >>> 1 ^ $mag01$$inline_362$$[$y$$inline_361$$ & 1];
    }
    for (;623 > $kk$$inline_363$$;$kk$$inline_363$$++) {
      $y$$inline_361$$ = this.$a$[$kk$$inline_363$$] & 2147483648 | this.$a$[$kk$$inline_363$$ + 1] & 2147483647, this.$a$[$kk$$inline_363$$] = this.$a$[$kk$$inline_363$$ + -227] ^ $y$$inline_361$$ >>> 1 ^ $mag01$$inline_362$$[$y$$inline_361$$ & 1];
    }
    $y$$inline_361$$ = this.$a$[623] & 2147483648 | this.$a$[0] & 2147483647;
    this.$a$[623] = this.$a$[396] ^ $y$$inline_361$$ >>> 1 ^ $mag01$$inline_362$$[$y$$inline_361$$ & 1];
    this.$b$ = 0;
  }
  $y$$inline_361$$ = this.$a$[this.$b$++];
  $y$$inline_361$$ ^= $y$$inline_361$$ >>> 11;
  $y$$inline_361$$ ^= $y$$inline_361$$ << 7 & 2636928640;
  $y$$inline_361$$ ^= $y$$inline_361$$ << 15 & 4022730752;
  return 1 / 4294967296 * (($y$$inline_361$$ ^ $y$$inline_361$$ >>> 18) >>> 0);
};
function $goog$debug$RelativeTimeProvider$$() {
  this.$a$ = $goog$now$$();
}
var $goog$debug$RelativeTimeProvider$defaultInstance_$$ = new $goog$debug$RelativeTimeProvider$$;
$goog$debug$RelativeTimeProvider$$.prototype.reset = function $$goog$debug$RelativeTimeProvider$$$$reset$() {
  this.$a$ = $goog$now$$();
};
function $goog$debug$Formatter$$($opt_prefix$$) {
  this.$c$ = $opt_prefix$$ || "";
  this.$d$ = $goog$debug$RelativeTimeProvider$defaultInstance_$$;
}
$goog$debug$Formatter$$.prototype.$a$ = !0;
$goog$debug$Formatter$$.prototype.$b$ = !1;
function $goog$debug$Formatter$getTwoDigitString_$$($n$$11$$) {
  return 10 > $n$$11$$ ? "0" + $n$$11$$ : String($n$$11$$);
}
function $goog$debug$HtmlFormatter$$($opt_prefix$$1$$) {
  $goog$debug$Formatter$$.call(this, $opt_prefix$$1$$);
}
$goog$inherits$$($goog$debug$HtmlFormatter$$, $goog$debug$Formatter$$);
$goog$debug$HtmlFormatter$$.prototype.$b$ = !0;
function $JSCompiler_StaticMethods_formatRecordAsHtml$$($JSCompiler_StaticMethods_formatRecordAsHtml$self$$, $logRecord$$7$$) {
  if (!$logRecord$$7$$) {
    return $goog$html$SafeHtml$EMPTY$$;
  }
  var $className$$13_recordAndExceptionHtml$$;
  switch($logRecord$$7$$.$b$.value) {
    case $goog$debug$Logger$Level$SHOUT$$.value:
      $className$$13_recordAndExceptionHtml$$ = "dbg-sh";
      break;
    case $goog$debug$Logger$Level$SEVERE$$.value:
      $className$$13_recordAndExceptionHtml$$ = "dbg-sev";
      break;
    case $goog$debug$Logger$Level$WARNING$$.value:
      $className$$13_recordAndExceptionHtml$$ = "dbg-w";
      break;
    case $goog$debug$Logger$Level$INFO$$.value:
      $className$$13_recordAndExceptionHtml$$ = "dbg-i";
      break;
    default:
      $className$$13_recordAndExceptionHtml$$ = "dbg-f";
  }
  var $fullPrefixHtml_sb$$4$$ = [];
  $fullPrefixHtml_sb$$4$$.push($JSCompiler_StaticMethods_formatRecordAsHtml$self$$.$c$, " ");
  if ($JSCompiler_StaticMethods_formatRecordAsHtml$self$$.$a$) {
    var $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ = new Date($logRecord$$7$$.$d$);
    $fullPrefixHtml_sb$$4$$.push("[", $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getFullYear() - 2E3) + $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getMonth() + 1) + $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getDate()) + " " + $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getHours()) + 
    ":" + $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getMinutes()) + ":" + $goog$debug$Formatter$getTwoDigitString_$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getSeconds()) + "." + $goog$debug$Formatter$getTwoDigitString_$$(Math.floor($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.getMilliseconds() / 10)), "] ");
  }
  var $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ = ($logRecord$$7$$.$d$ - $JSCompiler_StaticMethods_formatRecordAsHtml$self$$.$d$.$a$) / 1E3, $str$$inline_374_threwError$$inline_813$$ = $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$.toFixed(3), $spacesToPrepend$$inline_375$$ = 0;
  if (1 > $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$) {
    $spacesToPrepend$$inline_375$$ = 2;
  } else {
    for (;100 > $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$;) {
      $spacesToPrepend$$inline_375$$++, $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ *= 10;
    }
  }
  for (;0 < $spacesToPrepend$$inline_375$$--;) {
    $str$$inline_374_threwError$$inline_813$$ = " " + $str$$inline_374_threwError$$inline_813$$;
  }
  $fullPrefixHtml_sb$$4$$.push("[", $str$$inline_374_threwError$$inline_813$$, "s] ");
  $fullPrefixHtml_sb$$4$$.push("[", $logRecord$$7$$.$e$, "] ");
  $fullPrefixHtml_sb$$4$$ = $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$($fullPrefixHtml_sb$$4$$.join(""));
  $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ = $goog$html$SafeHtml$EMPTY$$;
  if ($JSCompiler_StaticMethods_formatRecordAsHtml$self$$.$b$ && $logRecord$$7$$.$a$) {
    var $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ = $goog$html$SafeHtml$create$$("br"), $JSCompiler_inline_result$$21_logRecordHtml$$;
    try {
      var $e$$inline_379$$;
      var $err$$inline_809_url$$inline_820$$ = $logRecord$$7$$.$a$, $href$$inline_810$$ = $goog$getObjectByName$$("window.location.href");
      if ($goog$isString$$($err$$inline_809_url$$inline_820$$)) {
        $e$$inline_379$$ = {message:$err$$inline_809_url$$inline_820$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_810$$, stack:"Not available"};
      } else {
        var $lineNumber$$inline_811$$, $fileName$$inline_812$$, $str$$inline_374_threwError$$inline_813$$ = !1;
        try {
          $lineNumber$$inline_811$$ = $err$$inline_809_url$$inline_820$$.lineNumber || $err$$inline_809_url$$inline_820$$.$line$ || "Not available";
        } catch ($e$$inline_814$$) {
          $lineNumber$$inline_811$$ = "Not available", $str$$inline_374_threwError$$inline_813$$ = !0;
        }
        try {
          $fileName$$inline_812$$ = $err$$inline_809_url$$inline_820$$.fileName || $err$$inline_809_url$$inline_820$$.filename || $err$$inline_809_url$$inline_820$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_810$$;
        } catch ($e$$inline_815$$) {
          $fileName$$inline_812$$ = "Not available", $str$$inline_374_threwError$$inline_813$$ = !0;
        }
        $e$$inline_379$$ = !$str$$inline_374_threwError$$inline_813$$ && $err$$inline_809_url$$inline_820$$.lineNumber && $err$$inline_809_url$$inline_820$$.fileName && $err$$inline_809_url$$inline_820$$.stack && $err$$inline_809_url$$inline_820$$.message && $err$$inline_809_url$$inline_820$$.name ? $err$$inline_809_url$$inline_820$$ : {message:$err$$inline_809_url$$inline_820$$.message || "Not available", name:$err$$inline_809_url$$inline_820$$.name || "UnknownError", lineNumber:$lineNumber$$inline_811$$, 
        fileName:$fileName$$inline_812$$, stack:$err$$inline_809_url$$inline_820$$.stack || "Not available"};
      }
      var $viewSourceUrl$$inline_380$$;
      var $opt_fileName$$inline_817$$ = $e$$inline_379$$.fileName;
      null != $opt_fileName$$inline_817$$ || ($opt_fileName$$inline_817$$ = "");
      if (/^https?:\/\//i.test($opt_fileName$$inline_817$$)) {
        var $sanitizedFileName$$inline_819$$;
        $err$$inline_809_url$$inline_820$$ = $opt_fileName$$inline_817$$;
        $err$$inline_809_url$$inline_820$$ instanceof $goog$html$SafeUrl$$ ? $sanitizedFileName$$inline_819$$ = $err$$inline_809_url$$inline_820$$ : ($err$$inline_809_url$$inline_820$$ = $err$$inline_809_url$$inline_820$$.$implementsGoogStringTypedString$ ? $err$$inline_809_url$$inline_820$$.$getTypedStringValue$() : String($err$$inline_809_url$$inline_820$$), $err$$inline_809_url$$inline_820$$ = $goog$html$SAFE_URL_PATTERN_$$.test($err$$inline_809_url$$inline_820$$) ? $goog$html$SafeUrl$normalize_$$($err$$inline_809_url$$inline_820$$) : 
        "about:invalid#zClosurez", $sanitizedFileName$$inline_819$$ = $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$$($err$$inline_809_url$$inline_820$$));
        var $justification$$inline_821$$ = $goog$string$Const$create__googStringSecurityPrivate_$$("view-source scheme plus HTTP/HTTPS URL"), $url$$inline_822$$ = "view-source:" + $goog$html$SafeUrl$unwrap$$($sanitizedFileName$$inline_819$$);
        $goog$asserts$assertString$$($goog$string$Const$unwrap$$($justification$$inline_821$$), "must provide justification");
        var $str$$inline_926$$ = $goog$string$Const$unwrap$$($justification$$inline_821$$);
        $goog$asserts$assert$$(!/^[\s\xa0]*$/.test($str$$inline_926$$), "must provide non-empty justification");
        $viewSourceUrl$$inline_380$$ = $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$$($url$$inline_822$$);
      } else {
        var $url$$inline_818$$ = $goog$string$Const$create__googStringSecurityPrivate_$$("sanitizedviewsrc");
        $viewSourceUrl$$inline_380$$ = $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$$($goog$string$Const$unwrap$$($url$$inline_818$$));
      }
      $JSCompiler_inline_result$$21_logRecordHtml$$ = $goog$html$SafeHtml$concat$$($goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$("Message: " + $e$$inline_379$$.message + "\nUrl: "), $goog$html$SafeHtml$create$$("a", {href:$viewSourceUrl$$inline_380$$, target:"_new"}, $e$$inline_379$$.fileName), $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$("\nLine: " + $e$$inline_379$$.lineNumber + "\n\nBrowser stack:\n" + $e$$inline_379$$.stack + "-> [end]\n\nJS stack traversal:\n" + 
      $goog$debug$getStacktrace$$(void 0) + "-> "));
    } catch ($e2$$inline_381$$) {
      $JSCompiler_inline_result$$21_logRecordHtml$$ = $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$("Exception trying to expose exception! You win, we lose. " + $e2$$inline_381$$);
    }
    $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$ = $goog$html$SafeHtml$concat$$($JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$, $JSCompiler_inline_result$$21_logRecordHtml$$);
  }
  $JSCompiler_inline_result$$21_logRecordHtml$$ = $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$$($logRecord$$7$$.$c$);
  $className$$13_recordAndExceptionHtml$$ = $goog$html$SafeHtml$create$$("span", {"class":$className$$13_recordAndExceptionHtml$$}, $goog$html$SafeHtml$concat$$($JSCompiler_inline_result$$21_logRecordHtml$$, $JSCompiler_temp_const$$20_exceptionHtml_sec$$inline_373_time$$inline_369$$));
  return $goog$html$SafeHtml$concat$$($fullPrefixHtml_sb$$4$$, $className$$13_recordAndExceptionHtml$$, $goog$html$SafeHtml$create$$("br"));
}
;function $z$client$ui$widget$MessageLogWidget$$($JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$) {
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$, "client_message_log_facet");
  this.$a$ = new $goog$debug$HtmlFormatter$$;
  this.$a$.$a$ = !1;
  $JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$ = $goog$debug$LogManager$getLogger$$("");
  var $handler$$inline_384$$ = $goog$bind$$(this.$b$, this);
  $JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$.$a$ || ($JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$.$a$ = []);
  $JSCompiler_StaticMethods_addHandler$self$$inline_383_services$$26$$.$a$.push($handler$$inline_384$$);
}
var $z$client$ui$widget$MessageLogWidget$googLogLevelToTag$$ = [["error", 1E3], ["warning", 900], ["info", 800]];
$z$client$ui$widget$MessageLogWidget$$.prototype.$b$ = function $$z$client$ui$widget$MessageLogWidget$$$$$b$$($logRecord$$10$$) {
  var $html$$20$$ = $logRecord$$10$$ ? $JSCompiler_StaticMethods_formatRecordAsHtml$$(this.$a$, $logRecord$$10$$).$getTypedStringValue$() : "", $tags$$ = ["debug"], $level$$18$$ = $goog$array$find$$($z$client$ui$widget$MessageLogWidget$googLogLevelToTag$$, function($level$$19$$) {
    return $level$$19$$[1] <= $logRecord$$10$$.$b$.value;
  });
  null === $level$$18$$ || $tags$$.push($level$$18$$[0]);
  $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$$(this.$c$, $html$$20$$, $tags$$, {});
};
function $z$client$facet$UserInterfaceFacet$$() {
  this.template = "default";
}
$goog$inherits$$($z$client$facet$UserInterfaceFacet$$, $z$client$facet$Facet$$);
function $z$client$facet$ModalFacet$$() {
  this.facet = ko.observable(null);
}
$goog$inherits$$($z$client$facet$ModalFacet$$, $z$client$facet$Facet$$);
$goog$debug$LogManager$getLogger$$("z.client.facet.ModalFacet");
$z$client$facet$ModalFacet$$.prototype.openTest = function $$z$client$facet$ModalFacet$$$$openTest$() {
};
$z$client$facet$ModalFacet$$.prototype.close = function $$z$client$facet$ModalFacet$$$$close$() {
  this.facet(null);
};
function $goog$async$FreeList$$($create$$, $reset$$) {
  this.$c$ = $create$$;
  this.$d$ = $reset$$;
  this.$b$ = 0;
  this.$a$ = null;
}
function $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$$($JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$) {
  var $item$$12$$;
  0 < $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$.$b$ ? ($JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$.$b$--, $item$$12$$ = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$.$a$, $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$.$a$ = $item$$12$$.next, $item$$12$$.next = null) : $item$$12$$ = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$self$$.$c$();
  return $item$$12$$;
}
function $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$, $item$$13$$) {
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$d$($item$$13$$);
  100 > $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$ && ($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$++, $item$$13$$.next = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$a$, $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$a$ = $item$$13$$);
}
;function $goog$async$WorkQueue$$() {
  this.$b$ = this.$a$ = null;
}
var $goog$async$WorkQueue$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$async$WorkItem$$;
}, function($item$$14$$) {
  $item$$14$$.reset();
});
$goog$async$WorkQueue$$.prototype.add = function $$goog$async$WorkQueue$$$$add$($fn$$14$$, $scope$$3$$) {
  var $item$$15$$ = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$$($goog$async$WorkQueue$freelist_$$);
  $item$$15$$.$a$ = $fn$$14$$;
  $item$$15$$.$b$ = $scope$$3$$;
  $item$$15$$.next = null;
  this.$b$ ? this.$b$.next = $item$$15$$ : ($goog$asserts$assert$$(!this.$a$), this.$a$ = $item$$15$$);
  this.$b$ = $item$$15$$;
};
$goog$async$WorkQueue$$.prototype.remove = function $$goog$async$WorkQueue$$$$remove$() {
  var $item$$16$$ = null;
  this.$a$ && ($item$$16$$ = this.$a$, this.$a$ = this.$a$.next, this.$a$ || (this.$b$ = null), $item$$16$$.next = null);
  return $item$$16$$;
};
function $goog$async$WorkItem$$() {
  this.next = this.$b$ = this.$a$ = null;
}
$goog$async$WorkItem$$.prototype.reset = function $$goog$async$WorkItem$$$$reset$() {
  this.next = this.$b$ = this.$a$ = null;
};
function $goog$async$throwException$$($exception$$3$$) {
  $goog$global$$.setTimeout(function() {
    throw $exception$$3$$;
  }, 0);
}
var $goog$async$nextTick$setImmediate_$$;
function $goog$async$nextTick$getSetImmediateEmulator_$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Presto") && ($Channel$$ = function $$Channel$$$() {
    var $doc$$40_iframe_onmessage$$ = document.createElement("IFRAME");
    $doc$$40_iframe_onmessage$$.style.display = "none";
    $doc$$40_iframe_onmessage$$.src = "";
    document.documentElement.appendChild($doc$$40_iframe_onmessage$$);
    var $win$$6$$ = $doc$$40_iframe_onmessage$$.contentWindow, $doc$$40_iframe_onmessage$$ = $win$$6$$.document;
    $doc$$40_iframe_onmessage$$.open();
    $doc$$40_iframe_onmessage$$.write("");
    $doc$$40_iframe_onmessage$$.close();
    var $message$$36$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$$6$$.location.protocol ? "*" : $win$$6$$.location.protocol + "//" + $win$$6$$.location.host, $doc$$40_iframe_onmessage$$ = $goog$bind$$(function($e$$45$$) {
      if (("*" == $origin$$ || $e$$45$$.origin == $origin$$) && $e$$45$$.data == $message$$36$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$6$$.addEventListener("message", $doc$$40_iframe_onmessage$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$6$$.postMessage($message$$36$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !$goog$labs$userAgent$browser$matchIE_$$()) {
    var $channel$$ = new $Channel$$, $head$$1$$ = {}, $tail$$ = $head$$1$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      if ($goog$isDef$$($head$$1$$.next)) {
        $head$$1$$ = $head$$1$$.next;
        var $cb$$2$$ = $head$$1$$.$cb$;
        $head$$1$$.$cb$ = null;
        $cb$$2$$();
      }
    };
    return function($cb$$3$$) {
      $tail$$.next = {$cb$:$cb$$3$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($cb$$4$$) {
    var $script$$7$$ = document.createElement("SCRIPT");
    $script$$7$$.onreadystatechange = function $$script$$7$$$onreadystatechange$() {
      $script$$7$$.onreadystatechange = null;
      $script$$7$$.parentNode.removeChild($script$$7$$);
      $script$$7$$ = null;
      $cb$$4$$();
      $cb$$4$$ = null;
    };
    document.documentElement.appendChild($script$$7$$);
  } : function($cb$$5$$) {
    $goog$global$$.setTimeout($cb$$5$$, 0);
  };
}
var $goog$async$nextTick$wrapCallback_$$ = $goog$functions$identity$$;
function $goog$async$run$$($callback$$58$$, $opt_context$$6$$) {
  $goog$async$run$schedule_$$ || $goog$async$run$initializeRunner_$$();
  $goog$async$run$workQueueScheduled_$$ || ($goog$async$run$schedule_$$(), $goog$async$run$workQueueScheduled_$$ = !0);
  $goog$async$run$workQueue_$$.add($callback$$58$$, $opt_context$$6$$);
}
var $goog$async$run$schedule_$$;
function $goog$async$run$initializeRunner_$$() {
  if ($goog$global$$.Promise && $goog$global$$.Promise.resolve) {
    var $promise$$ = $goog$global$$.Promise.resolve();
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      $promise$$.then($goog$async$run$processWorkQueue$$);
    };
  } else {
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      var $cb$$inline_393$$ = $goog$async$run$processWorkQueue$$, $cb$$inline_393$$ = $goog$async$nextTick$wrapCallback_$$($cb$$inline_393$$);
      !$goog$isFunction$$($goog$global$$.setImmediate) || $goog$global$$.Window && $goog$global$$.Window.prototype && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($cb$$inline_393$$)) : $goog$global$$.setImmediate($cb$$inline_393$$);
    };
  }
}
var $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = new $goog$async$WorkQueue$$;
[].push(function() {
  $goog$async$run$workQueueScheduled_$$ = !1;
  $goog$async$run$workQueue_$$ = new $goog$async$WorkQueue$$;
});
function $goog$async$run$processWorkQueue$$() {
  for (var $item$$18$$ = null;$item$$18$$ = $goog$async$run$workQueue_$$.remove();) {
    try {
      $item$$18$$.$a$.call($item$$18$$.$b$);
    } catch ($e$$46$$) {
      $goog$async$throwException$$($e$$46$$);
    }
    $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$async$WorkQueue$freelist_$$, $item$$18$$);
  }
  $goog$async$run$workQueueScheduled_$$ = !1;
}
;function $goog$Promise$$($resolver$$2$$, $opt_context$$8$$) {
  this.$a$ = $goog$Promise$State_$PENDING$$;
  this.$g$ = void 0;
  this.$c$ = this.$b$ = this.$d$ = null;
  this.$e$ = this.$f$ = !1;
  if ($resolver$$2$$ == $goog$Promise$RESOLVE_FAST_PATH_$$) {
    $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $opt_context$$8$$);
  } else {
    try {
      var $self$$4$$ = this;
      $resolver$$2$$.call($opt_context$$8$$, function($value$$130$$) {
        $JSCompiler_StaticMethods_resolve_$$($self$$4$$, $goog$Promise$State_$FULFILLED$$, $value$$130$$);
      }, function($reason$$) {
        try {
          if ($reason$$ instanceof Error) {
            throw $reason$$;
          }
          throw Error("Promise rejected.");
        } catch ($e$$48$$) {
        }
        $JSCompiler_StaticMethods_resolve_$$($self$$4$$, $goog$Promise$State_$REJECTED$$, $reason$$);
      });
    } catch ($e$$49$$) {
      $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $e$$49$$);
    }
  }
}
var $goog$Promise$State_$PENDING$$ = 0, $goog$Promise$State_$FULFILLED$$ = 2, $goog$Promise$State_$REJECTED$$ = 3;
function $goog$Promise$CallbackEntry_$$() {
  this.next = this.context = this.$c$ = this.$b$ = this.$a$ = null;
  this.$d$ = !1;
}
$goog$Promise$CallbackEntry_$$.prototype.reset = function $$goog$Promise$CallbackEntry_$$$$reset$() {
  this.context = this.$c$ = this.$b$ = this.$a$ = null;
  this.$d$ = !1;
};
var $goog$Promise$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$Promise$CallbackEntry_$$;
}, function($item$$19$$) {
  $item$$19$$.reset();
});
function $goog$Promise$getCallbackEntry_$$($onFulfilled$$, $onRejected$$1$$, $context$$6$$) {
  var $entry$$1$$ = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$get$$($goog$Promise$freelist_$$);
  $entry$$1$$.$b$ = $onFulfilled$$;
  $entry$$1$$.$c$ = $onRejected$$1$$;
  $entry$$1$$.context = $context$$6$$;
  return $entry$$1$$;
}
function $goog$Promise$RESOLVE_FAST_PATH_$$() {
}
function $goog$Promise$all$$($promises$$1$$) {
  return new $goog$Promise$$(function($resolve$$2$$, $reject$$2$$) {
    var $toFulfill$$ = $promises$$1$$.length, $values$$16$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$$66$$, $value$$131$$) {
        $toFulfill$$--;
        $values$$16$$[$index$$66$$] = $value$$131$$;
        0 == $toFulfill$$ && $resolve$$2$$($values$$16$$);
      }, $onReject$$ = function $$onReject$$$($reason$$1$$) {
        $reject$$2$$($reason$$1$$);
      }, $i$$130$$ = 0, $promise$$2$$;$promise$$2$$ = $promises$$1$$[$i$$130$$];$i$$130$$++) {
        $goog$Promise$maybeThenVoid_$$($promise$$2$$, $goog$partial$$($onFulfill$$, $i$$130$$), $onReject$$);
      }
    } else {
      $resolve$$2$$($values$$16$$);
    }
  });
}
$goog$Promise$$.prototype.then = function $$goog$Promise$$$$then$($opt_onFulfilled$$3$$, $opt_onRejected$$3$$, $opt_context$$9$$) {
  null != $opt_onFulfilled$$3$$ && $goog$asserts$assertFunction$$($opt_onFulfilled$$3$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$3$$ && $goog$asserts$assertFunction$$($opt_onRejected$$3$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return $JSCompiler_StaticMethods_addChildPromise_$$(this, $goog$isFunction$$($opt_onFulfilled$$3$$) ? $opt_onFulfilled$$3$$ : null, $goog$isFunction$$($opt_onRejected$$3$$) ? $opt_onRejected$$3$$ : null, $opt_context$$9$$);
};
$goog$Promise$$.prototype.then = $goog$Promise$$.prototype.then;
$goog$Promise$$.prototype.$goog_Thenable = !0;
function $goog$Promise$maybeThenVoid_$$($promise$$5$$, $onFulfilled$$1$$, $onRejected$$2$$, $opt_context$$11$$) {
  $promise$$5$$ instanceof $goog$Promise$$ ? (null != $onFulfilled$$1$$ && $goog$asserts$assertFunction$$($onFulfilled$$1$$, "opt_onFulfilled should be a function."), null != $onRejected$$2$$ && $goog$asserts$assertFunction$$($onRejected$$2$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), $JSCompiler_StaticMethods_addCallbackEntry_$$($promise$$5$$, $goog$Promise$getCallbackEntry_$$($onFulfilled$$1$$ || $goog$nullFunction$$, $onRejected$$2$$ || 
  null, $opt_context$$11$$))) : $promise$$5$$.then($onFulfilled$$1$$, $onRejected$$2$$, $opt_context$$11$$);
}
function $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$, $callbackEntry$$) {
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ || $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$a$ != $goog$Promise$State_$FULFILLED$$ && $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$a$ != $goog$Promise$State_$REJECTED$$ || $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$);
  $goog$asserts$assert$$(null != $callbackEntry$$.$b$);
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$c$ ? $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$c$.next = $callbackEntry$$ : $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ = $callbackEntry$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$c$ = $callbackEntry$$;
}
function $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $onFulfilled$$2$$, $onRejected$$4$$, $opt_context$$14$$) {
  var $callbackEntry$$1$$ = $goog$Promise$getCallbackEntry_$$(null, null, null);
  $callbackEntry$$1$$.$a$ = new $goog$Promise$$(function($resolve$$5$$, $reject$$5$$) {
    $callbackEntry$$1$$.$b$ = $onFulfilled$$2$$ ? function($value$$133$$) {
      try {
        var $result$$20$$ = $onFulfilled$$2$$.call($opt_context$$14$$, $value$$133$$);
        $resolve$$5$$($result$$20$$);
      } catch ($err$$9$$) {
        $reject$$5$$($err$$9$$);
      }
    } : $resolve$$5$$;
    $callbackEntry$$1$$.$c$ = $onRejected$$4$$ ? function($reason$$3$$) {
      try {
        var $result$$21$$ = $onRejected$$4$$.call($opt_context$$14$$, $reason$$3$$);
        $resolve$$5$$($result$$21$$);
      } catch ($err$$10$$) {
        $reject$$5$$($err$$10$$);
      }
    } : $reject$$5$$;
  });
  $callbackEntry$$1$$.$a$.$d$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$$1$$);
  return $callbackEntry$$1$$.$a$;
}
$goog$Promise$$.prototype.$h$ = function $$goog$Promise$$$$$h$$($value$$134$$) {
  $goog$asserts$assert$$(1 == this.$a$);
  this.$a$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $value$$134$$);
};
$goog$Promise$$.prototype.$i$ = function $$goog$Promise$$$$$i$$($reason$$4$$) {
  $goog$asserts$assert$$(1 == this.$a$);
  this.$a$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $reason$$4$$);
};
function $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_resolve_$self$$, $state$$11$$, $x$$91$$) {
  if ($JSCompiler_StaticMethods_resolve_$self$$.$a$ == $goog$Promise$State_$PENDING$$) {
    if ($JSCompiler_StaticMethods_resolve_$self$$ == $x$$91$$) {
      $state$$11$$ = $goog$Promise$State_$REJECTED$$, $x$$91$$ = new TypeError("Promise cannot resolve to itself");
    } else {
      var $JSCompiler_inline_result$$44$$;
      if ($x$$91$$) {
        try {
          $JSCompiler_inline_result$$44$$ = !!$x$$91$$.$goog_Thenable;
        } catch ($e$$inline_410$$) {
          $JSCompiler_inline_result$$44$$ = !1;
        }
      } else {
        $JSCompiler_inline_result$$44$$ = !1;
      }
      if ($JSCompiler_inline_result$$44$$) {
        $JSCompiler_StaticMethods_resolve_$self$$.$a$ = 1;
        $goog$Promise$maybeThenVoid_$$($x$$91$$, $JSCompiler_StaticMethods_resolve_$self$$.$h$, $JSCompiler_StaticMethods_resolve_$self$$.$i$, $JSCompiler_StaticMethods_resolve_$self$$);
        return;
      }
      if ($goog$isObject$$($x$$91$$)) {
        try {
          var $then$$ = $x$$91$$.then;
          if ($goog$isFunction$$($then$$)) {
            $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$91$$, $then$$);
            return;
          }
        } catch ($e$$50$$) {
          $state$$11$$ = $goog$Promise$State_$REJECTED$$, $x$$91$$ = $e$$50$$;
        }
      }
    }
    $JSCompiler_StaticMethods_resolve_$self$$.$g$ = $x$$91$$;
    $JSCompiler_StaticMethods_resolve_$self$$.$a$ = $state$$11$$;
    $JSCompiler_StaticMethods_resolve_$self$$.$d$ = null;
    $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_resolve_$self$$);
    $state$$11$$ != $goog$Promise$State_$REJECTED$$ || $goog$Promise$addUnhandledRejection_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$91$$);
  }
}
function $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_tryThen_$self$$, $thenable$$, $then$$1$$) {
  function $reject$$6$$($reason$$5$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$i$($reason$$5$$));
  }
  function $resolve$$6$$($value$$135$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$h$($value$$135$$));
  }
  $JSCompiler_StaticMethods_tryThen_$self$$.$a$ = 1;
  var $called$$1$$ = !1;
  try {
    $then$$1$$.call($thenable$$, $resolve$$6$$, $reject$$6$$);
  } catch ($e$$51$$) {
    $reject$$6$$($e$$51$$);
  }
}
function $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$) {
  $JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$f$ || ($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$f$ = !0, $goog$async$run$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$j$, $JSCompiler_StaticMethods_scheduleCallbacks_$self$$));
}
function $JSCompiler_StaticMethods_popEntry_$$($JSCompiler_StaticMethods_popEntry_$self$$) {
  var $entry$$6$$ = null;
  $JSCompiler_StaticMethods_popEntry_$self$$.$b$ && ($entry$$6$$ = $JSCompiler_StaticMethods_popEntry_$self$$.$b$, $JSCompiler_StaticMethods_popEntry_$self$$.$b$ = $entry$$6$$.next, $entry$$6$$.next = null);
  $JSCompiler_StaticMethods_popEntry_$self$$.$b$ || ($JSCompiler_StaticMethods_popEntry_$self$$.$c$ = null);
  null != $entry$$6$$ && $goog$asserts$assert$$(null != $entry$$6$$.$b$);
  return $entry$$6$$;
}
$goog$Promise$$.prototype.$j$ = function $$goog$Promise$$$$$j$$() {
  for (var $callbackEntry$$inline_413_entry$$7$$ = null;$callbackEntry$$inline_413_entry$$7$$ = $JSCompiler_StaticMethods_popEntry_$$(this);) {
    var $p$$inline_829_state$$inline_414$$ = this.$a$, $result$$inline_415$$ = this.$g$;
    $callbackEntry$$inline_413_entry$$7$$.$a$ && ($callbackEntry$$inline_413_entry$$7$$.$a$.$d$ = null);
    if ($p$$inline_829_state$$inline_414$$ == $goog$Promise$State_$FULFILLED$$) {
      $callbackEntry$$inline_413_entry$$7$$.$b$.call($callbackEntry$$inline_413_entry$$7$$.context, $result$$inline_415$$);
    } else {
      if (null != $callbackEntry$$inline_413_entry$$7$$.$c$) {
        if (!$callbackEntry$$inline_413_entry$$7$$.$d$) {
          for ($p$$inline_829_state$$inline_414$$ = void 0, $p$$inline_829_state$$inline_414$$ = this;$p$$inline_829_state$$inline_414$$ && $p$$inline_829_state$$inline_414$$.$e$;$p$$inline_829_state$$inline_414$$ = $p$$inline_829_state$$inline_414$$.$d$) {
            $p$$inline_829_state$$inline_414$$.$e$ = !1;
          }
        }
        $callbackEntry$$inline_413_entry$$7$$.$c$.call($callbackEntry$$inline_413_entry$$7$$.context, $result$$inline_415$$);
      }
    }
    $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$Promise$freelist_$$, $callbackEntry$$inline_413_entry$$7$$);
  }
  this.$f$ = !1;
};
function $goog$Promise$addUnhandledRejection_$$($promise$$8$$, $reason$$6$$) {
  $promise$$8$$.$e$ = !0;
  $goog$async$run$$(function() {
    $promise$$8$$.$e$ && $goog$Promise$handleRejection_$$.call(null, $reason$$6$$);
  });
}
var $goog$Promise$handleRejection_$$ = $goog$async$throwException$$;
function $z$client$facet$ProjectManagementFacet$$($services$$29$$) {
  this.template = "project_management";
  var $player$$1$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$29$$, "client_player_facet");
  this.resources = $player$$1$$.resources;
  this.unassignedCharacters = $player$$1$$.unassignedCharactersListFacet;
  this.projects = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$29$$, "client_project_list_facet");
}
$goog$inherits$$($z$client$facet$ProjectManagementFacet$$, $z$client$facet$UserInterfaceFacet$$);
function $z$client$actions$OpenProjectManagement$$($services$$30$$) {
  $z$client$action$Action$$.call(this, "Open project management");
  this.$a$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$30$$, "client_modal_facet");
  this.$e$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$30$$, $z$common$Resources$INJECTOR$$);
  this.$meta$ = {type:"action_open_project_management", category:"action", name:"Projects", description:"Opens the project management view"};
}
$goog$inherits$$($z$client$actions$OpenProjectManagement$$, $z$client$action$Action$$);
$z$client$actions$OpenProjectManagement$$.prototype.$c$ = function $$z$client$actions$OpenProjectManagement$$$$$c$$() {
  return !0;
};
$z$client$actions$OpenProjectManagement$$.prototype.$d$ = function $$z$client$actions$OpenProjectManagement$$$$$d$$() {
  var $facet$$4$$ = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_Compose$$(this.$e$, $z$client$facet$ProjectManagementFacet$$));
  this.$a$.facet($facet$$4$$);
  $JSCompiler_StaticMethods_goog_debug_Logger_prototype$info$$(this.$f$, "Create the project management view");
};
$z$client$actions$OpenProjectManagement$$.prototype.$f$ = $goog$debug$LogManager$getLogger$$("z.client.actions.OpenProjectManagement");
function $z$client$facet$TileFacet$$($x$$92$$, $y$$57$$, $rulebook$$3$$) {
  $z$client$facet$EntityFacet$$.call(this);
  this.$b$ = $rulebook$$3$$;
  this.x = $x$$92$$;
  this.y = $y$$57$$;
  this.terrain = ko.observable({});
}
$goog$inherits$$($z$client$facet$TileFacet$$, $z$client$facet$EntityFacet$$);
function $JSCompiler_StaticMethods_getTerrainMeta$$($JSCompiler_StaticMethods_getTerrainMeta$self$$) {
  var $metas$$3$$ = [], $obj$$100$$ = $JSCompiler_StaticMethods_getTerrainMeta$self$$.terrain();
  $goog$object$forEach$$($obj$$100$$, function($terrain$$11$$) {
    $terrain$$11$$ && $metas$$3$$.push($JSCompiler_StaticMethods_getMetaClass$$(this.$b$, $terrain$$11$$));
  }, $JSCompiler_StaticMethods_getTerrainMeta$self$$);
  return $metas$$3$$;
}
$z$client$facet$TileFacet$$.prototype.$_update$ = function $$z$client$facet$TileFacet$$$$$_update$$() {
  var $tile$$14$$ = this.$entity$();
  this.terrain($tile$$14$$.terrain);
};
function $z$client$facet$MapFacet$$($services$$31$$) {
  $z$client$facet$Facet$$.call(this);
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$31$$, $z$common$Resources$RULEBOOK$$);
  this.$b$ = new $mugd$utils$Grid$$;
  this.tiles = ko.observableArray();
  this.projects = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$31$$, "client_project_list_facet").projects;
}
$goog$inherits$$($z$client$facet$MapFacet$$, $z$client$facet$Facet$$);
$z$client$facet$MapFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$MapFacet$$$$$setParentEventTarget$$($parent$$25$$) {
  $z$client$facet$MapFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$25$$);
  this.$a$.$listen$($parent$$25$$, "entity_created$3", this.$d$);
};
function $JSCompiler_StaticMethods_getTileFacet$$($JSCompiler_StaticMethods_getTileFacet$self$$, $x$$93$$, $y$$58$$) {
  var $facet$$5$$ = $JSCompiler_StaticMethods_getNode$$($JSCompiler_StaticMethods_getTileFacet$self$$.$b$, $x$$93$$, $y$$58$$);
  $facet$$5$$ || ($facet$$5$$ = new $z$client$facet$TileFacet$$($x$$93$$, $y$$58$$, $JSCompiler_StaticMethods_getTileFacet$self$$.$c$), $facet$$5$$.$setParentEventTarget$($JSCompiler_StaticMethods_getTileFacet$self$$), $JSCompiler_StaticMethods_setNode$$($JSCompiler_StaticMethods_getTileFacet$self$$.$b$, $x$$93$$, $y$$58$$, $facet$$5$$), $JSCompiler_StaticMethods_getTileFacet$self$$.tiles.push($facet$$5$$));
  return $facet$$5$$;
}
$z$client$facet$MapFacet$$.prototype.$d$ = function $$z$client$facet$MapFacet$$$$$d$$($event$$13_tile$$15$$) {
  $event$$13_tile$$15$$.$entity$ instanceof $z$common$entities$Tile$$ && ($event$$13_tile$$15$$ = $event$$13_tile$$15$$.$entity$, $JSCompiler_StaticMethods_setEntity$$($JSCompiler_StaticMethods_getTileFacet$$(this, $event$$13_tile$$15$$.position.x, $event$$13_tile$$15$$.position.y), $event$$13_tile$$15$$));
};
function $z$client$facet$MessageLogFacet$$($services$$32$$) {
  $z$client$facet$Facet$$.call(this);
  this.template = "message_log";
  this.messages = ko.observableArray();
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$32$$, "client_info_facet");
  this.any = ko.observable({});
}
$goog$inherits$$($z$client$facet$MessageLogFacet$$, $z$client$facet$Facet$$);
$z$client$facet$MessageLogFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$MessageLogFacet$$$$$setParentEventTarget$$($parent$$26$$) {
  $z$client$facet$MessageLogFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$26$$);
  this.$a$.$listen$($parent$$26$$, "start_turn$0", this.$d$);
  this.$a$.$listen$($parent$$26$$, "before_start_turn$1", this.$b$);
};
$z$client$facet$MessageLogFacet$$.prototype.$d$ = function $$z$client$facet$MessageLogFacet$$$$$d$$($e$$52$$) {
  $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$$(this, "Turn started: " + $e$$52$$.data.$turn$, [], {template:"start_turn"});
};
$z$client$facet$MessageLogFacet$$.prototype.$b$ = function $$z$client$facet$MessageLogFacet$$$$$b$$() {
  this.messages.removeAll();
  this.any({});
};
function $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$$($JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$self$$, $html$$21$$, $tags$$1$$, $message$$38$$) {
  var $messageItem$$ = {};
  $messageItem$$.turn = $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$self$$.$c$.turn();
  $messageItem$$.time = new Date;
  $messageItem$$.html = $html$$21$$;
  $messageItem$$.message = $message$$38$$;
  $messageItem$$.message.template || ($messageItem$$.message.template = "chatter");
  $messageItem$$.tags = {};
  $messageItem$$.class_tags = [];
  $goog$array$forEach$$($tags$$1$$, function($tag$$) {
    $messageItem$$.tags[$tag$$] = !0;
    $messageItem$$.class_tags.push($tag$$);
    var $any$$ = this.any();
    $any$$[$tag$$] = !0;
    this.any($any$$);
  }, $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$self$$);
  $messageItem$$.tags.usual || $messageItem$$.tags.important || $messageItem$$.tags.trivial || ($messageItem$$.tags.usual = !0, $messageItem$$.class_tags.push("usual"));
  $JSCompiler_StaticMethods_z_client_facet_MessageLogFacet_prototype$addMessage$self$$.messages.push($messageItem$$);
}
;function $z$service$world$StaticTerrainGenerator$$($services$$33$$) {
  var $map$$3$$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$33$$, "service_terrain_map");
  this.$d$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$33$$, "service_terrain_random_generator");
  this.$b$ = {};
  this.$a$ = {x:0, y:0};
  $JSCompiler_StaticMethods_parseMap$$(this, $map$$3$$);
}
$z$service$world$StaticTerrainGenerator$$.prototype.$c$ = function $$z$service$world$StaticTerrainGenerator$$$$$c$$($x$$95$$, $y$$60$$) {
  var $terrain$$12$$ = $goog$object$map$$(this.$b$, function($t$$2$$) {
    var $_x$$inline_421$$ = $x$$95$$ + this.$a$.x, $_y$$inline_422$$ = -1 * ($y$$60$$ + this.$a$.y);
    return $t$$2$$[$_y$$inline_422$$] && $t$$2$$[$_y$$inline_422$$][$_x$$inline_421$$] ? $t$$2$$[$_y$$inline_422$$][$_x$$inline_421$$] : "";
  }, this);
  return $terrain$$12$$.base ? new $z$common$data$TileData$$(null, "modified", null, $x$$95$$, $y$$60$$, $terrain$$12$$, "tile", {$density$:10, $defence$:0, $attraction$:0, $activity$:0, $danger$:0}) : this.$d$.$c$($x$$95$$, $y$$60$$);
};
function $JSCompiler_StaticMethods_parseMap$$($JSCompiler_StaticMethods_parseMap$self$$, $map$$4$$) {
  function $terrainRowFromString$$($str$$79$$) {
    return $goog$array$map$$($str$$79$$, $terrainFromChar$$);
  }
  function $terrainFromChar$$($c$$3$$) {
    return $terrainMap$$[$c$$3$$];
  }
  $JSCompiler_StaticMethods_parseMap$self$$.$a$.x = -1 * $map$$4$$.left;
  $JSCompiler_StaticMethods_parseMap$self$$.$a$.y = -1 * $map$$4$$.top;
  var $terrainMap$$ = $map$$4$$.terrains;
  $JSCompiler_StaticMethods_parseMap$self$$.$b$ = $goog$object$map$$($map$$4$$.map, function($arr$$83$$) {
    return $goog$array$map$$($arr$$83$$, $terrainRowFromString$$);
  });
  console.log($JSCompiler_StaticMethods_parseMap$self$$.$b$);
}
;function $z$client$facet$ActionListFacet$$() {
  $z$client$facet$Facet$$.call(this);
  this.actionFacets = ko.observableArray();
}
$goog$inherits$$($z$client$facet$ActionListFacet$$, $z$client$facet$Facet$$);
function $z$client$facet$ContextMenuFacet$$($services$$35$$) {
  $z$client$facet$ActionListFacet$$.call(this);
  this.$b$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$35$$, "client_action_factory");
  this.$c$ = $JSCompiler_StaticMethods_mugd_injector_MicroFactory_prototype$get$$($services$$35$$, "client_current_target");
  this.visible = ko.observable(!1);
  this.position = ko.observable(null);
}
$goog$inherits$$($z$client$facet$ContextMenuFacet$$, $z$client$facet$ActionListFacet$$);
$z$client$facet$ContextMenuFacet$$.prototype.$setParentEventTarget$ = function $$z$client$facet$ContextMenuFacet$$$$$setParentEventTarget$$($parent$$27$$) {
  $z$client$facet$ContextMenuFacet$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$27$$);
  this.$a$.$listen$($parent$$27$$, "show_context_menu$2", function($e$$54_position$$inline_426$$) {
    var $actions$$inline_427_context$$inline_425$$ = $e$$54_position$$inline_426$$.context;
    $e$$54_position$$inline_426$$ = $e$$54_position$$inline_426$$.position;
    $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$$(this);
    this.actionFacets.removeAll();
    $actions$$inline_427_context$$inline_425$$ && ($actions$$inline_427_context$$inline_425$$ = $JSCompiler_StaticMethods__getContextualActions$$(this, $actions$$inline_427_context$$inline_425$$), 0 < $actions$$inline_427_context$$inline_425$$.length && (ko.utils.arrayPushAll(this.actionFacets(), $actions$$inline_427_context$$inline_425$$), this.actionFacets.valueHasMutated(), this.position($e$$54_position$$inline_426$$), this.visible(!0)));
  });
};
function $JSCompiler_StaticMethods__getContextualActions$$($JSCompiler_StaticMethods__getContextualActions$self$$, $context$$8$$) {
  var $actionFacets$$ = [], $actions$$2$$ = $JSCompiler_StaticMethods__createActions$$($JSCompiler_StaticMethods__getContextualActions$self$$.$b$, $context$$8$$);
  $goog$array$forEach$$($actions$$2$$, function($action$$3_actionFacet$$) {
    if ($action$$3_actionFacet$$) {
      $action$$3_actionFacet$$ = new $z$client$facet$ActionFacet$$($action$$3_actionFacet$$);
      if ($action$$3_actionFacet$$.target) {
        var $currentTarget$$1$$ = this.$c$();
        $action$$3_actionFacet$$.target($currentTarget$$1$$);
      }
      $action$$3_actionFacet$$.canExecute() && $actionFacets$$.push($action$$3_actionFacet$$);
    }
  }, $JSCompiler_StaticMethods__getContextualActions$self$$);
  return $actionFacets$$;
}
function $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$$($JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$self$$) {
  $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$self$$.visible(!1);
  $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$self$$.position(null);
}
$z$client$facet$ContextMenuFacet$$.prototype.executeAction = function $$z$client$facet$ContextMenuFacet$$$$executeAction$($action$$4$$) {
  $JSCompiler_StaticMethods_z_client_facet_ContextMenuFacet_prototype$hide$$(this);
  $action$$4$$.execute();
};
var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function $goog$uri$utils$split$$($uri$$11$$) {
  if ($goog$uri$utils$needsPhishingProtection_$$) {
    $goog$uri$utils$needsPhishingProtection_$$ = !1;
    var $location$$inline_928$$ = $goog$global$$.location;
    if ($location$$inline_928$$) {
      var $domain$$inline_930_href$$inline_929_uri$$inline_931$$ = $location$$inline_928$$.href;
      if ($domain$$inline_930_href$$inline_929_uri$$inline_931$$ && ($domain$$inline_930_href$$inline_929_uri$$inline_931$$ = ($domain$$inline_930_href$$inline_929_uri$$inline_931$$ = $goog$uri$utils$split$$($domain$$inline_930_href$$inline_929_uri$$inline_931$$)[3] || null) ? decodeURI($domain$$inline_930_href$$inline_929_uri$$inline_931$$) : $domain$$inline_930_href$$inline_929_uri$$inline_931$$) && $domain$$inline_930_href$$inline_929_uri$$inline_931$$ != $location$$inline_928$$.hostname) {
        throw $goog$uri$utils$needsPhishingProtection_$$ = !0, Error();
      }
    }
  }
  return $uri$$11$$.match($goog$uri$utils$splitRe_$$);
}
var $goog$uri$utils$needsPhishingProtection_$$ = $goog$userAgent$WEBKIT$$;
function $goog$Timer$callOnce$$($listener$$70$$, $opt_delay$$2$$, $opt_handler$$8$$) {
  if ($goog$isFunction$$($listener$$70$$)) {
    $opt_handler$$8$$ && ($listener$$70$$ = $goog$bind$$($listener$$70$$, $opt_handler$$8$$));
  } else {
    if ($listener$$70$$ && "function" == typeof $listener$$70$$.handleEvent) {
      $listener$$70$$ = $goog$bind$$($listener$$70$$.handleEvent, $listener$$70$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < $opt_delay$$2$$ ? -1 : $goog$global$$.setTimeout($listener$$70$$, $opt_delay$$2$$ || 0);
}
;function $goog$json$parse$$($o$$1_s$$26$$) {
  $o$$1_s$$26$$ = String($o$$1_s$$26$$);
  if (/^\s*$/.test($o$$1_s$$26$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o$$1_s$$26$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + $o$$1_s$$26$$ + ")");
    } catch ($ex$$10$$) {
    }
  }
  throw Error("Invalid JSON string: " + $o$$1_s$$26$$);
}
;function $goog$net$XmlHttpFactory$$() {
}
$goog$net$XmlHttpFactory$$.prototype.$a$ = null;
function $JSCompiler_StaticMethods_getOptions$$($JSCompiler_StaticMethods_getOptions$self$$) {
  var $JSCompiler_temp$$48_options$$inline_430$$;
  ($JSCompiler_temp$$48_options$$inline_430$$ = $JSCompiler_StaticMethods_getOptions$self$$.$a$) || ($JSCompiler_temp$$48_options$$inline_430$$ = {}, $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getOptions$self$$) && ($JSCompiler_temp$$48_options$$inline_430$$[0] = !0, $JSCompiler_temp$$48_options$$inline_430$$[1] = !0), $JSCompiler_temp$$48_options$$inline_430$$ = $JSCompiler_StaticMethods_getOptions$self$$.$a$ = $JSCompiler_temp$$48_options$$inline_430$$);
  return $JSCompiler_temp$$48_options$$inline_430$$;
}
;var $goog$net$XmlHttp$factory_$$;
function $goog$net$DefaultXmlHttpFactory$$() {
}
$goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
function $JSCompiler_StaticMethods_createInstance$$($JSCompiler_StaticMethods_createInstance$self_progId$$1$$) {
  return ($JSCompiler_StaticMethods_createInstance$self_progId$$1$$ = $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_createInstance$self_progId$$1$$)) ? new ActiveXObject($JSCompiler_StaticMethods_createInstance$self_progId$$1$$) : new XMLHttpRequest;
}
function $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getProgId_$self$$) {
  if (!$JSCompiler_StaticMethods_getProgId_$self$$.$b$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$$136$$ = 0;$i$$136$$ < $ACTIVE_X_IDENTS$$.length;$i$$136$$++) {
      var $candidate$$1$$ = $ACTIVE_X_IDENTS$$[$i$$136$$];
      try {
        return new ActiveXObject($candidate$$1$$), $JSCompiler_StaticMethods_getProgId_$self$$.$b$ = $candidate$$1$$;
      } catch ($e$$55$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return $JSCompiler_StaticMethods_getProgId_$self$$.$b$;
}
$goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$;
function $goog$log$fine$$($logger$$10$$, $msg$$23$$) {
  $logger$$10$$ && $logger$$10$$.log($goog$debug$Logger$Level$FINE$$, $msg$$23$$, void 0);
}
;function $goog$net$XhrIo$$($opt_xmlHttpFactory$$) {
  $goog$events$EventTarget$$.call(this);
  this.$t$ = new $goog$structs$Map$$;
  this.$n$ = $opt_xmlHttpFactory$$ || null;
  this.$b$ = !1;
  this.$m$ = this.$a$ = null;
  this.$c$ = this.$q$ = this.$i$ = "";
  this.$d$ = this.$p$ = this.$f$ = this.$o$ = !1;
  this.$e$ = 0;
  this.$k$ = null;
  this.$r$ = $goog$net$XhrIo$ResponseType$DEFAULT$$;
  this.$l$ = this.$u$ = !1;
}
$goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$);
var $goog$net$XhrIo$ResponseType$DEFAULT$$ = "", $JSCompiler_temp_const$$51$$ = $goog$net$XhrIo$$.prototype, $logger$$inline_443$$ = $goog$debug$LogManager$getLogger$$("goog.net.XhrIo");
$JSCompiler_temp_const$$51$$.$logger_$ = $logger$$inline_443$$;
var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$METHODS_WITH_FORM_DATA$$ = ["POST", "PUT"], $goog$net$XhrIo$sendInstances_$$ = [];
function $goog$net$XhrIo$send$$($url$$33$$, $opt_callback$$6$$) {
  var $x$$97$$ = new $goog$net$XhrIo$$;
  $goog$net$XhrIo$sendInstances_$$.push($x$$97$$);
  $opt_callback$$6$$ && $x$$97$$.$listen$("complete", $opt_callback$$6$$);
  $x$$97$$.$eventTargetListeners_$.add("ready", $x$$97$$.$cleanupSend_$, !0, void 0, void 0);
  $x$$97$$.send($url$$33$$, void 0, void 0, void 0);
}
$JSCompiler_prototypeAlias$$ = $goog$net$XhrIo$$.prototype;
$JSCompiler_prototypeAlias$$.$cleanupSend_$ = function $$JSCompiler_prototypeAlias$$$$cleanupSend_$$() {
  $JSCompiler_StaticMethods_dispose$$(this);
  $goog$array$remove$$($goog$net$XhrIo$sendInstances_$$, this);
};
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($content$$9_url$$34$$, $method$$3_opt_method$$1$$, $contentIsFormData_opt_content$$5$$, $contentTypeKey_opt_headers$$1$$) {
  if (this.$a$) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$i$ + "; newUri=" + $content$$9_url$$34$$);
  }
  $method$$3_opt_method$$1$$ = $method$$3_opt_method$$1$$ ? $method$$3_opt_method$$1$$.toUpperCase() : "GET";
  this.$i$ = $content$$9_url$$34$$;
  this.$c$ = "";
  this.$q$ = $method$$3_opt_method$$1$$;
  this.$o$ = !1;
  this.$b$ = !0;
  this.$a$ = this.$n$ ? $JSCompiler_StaticMethods_createInstance$$(this.$n$) : $JSCompiler_StaticMethods_createInstance$$($goog$net$XmlHttp$factory_$$);
  this.$m$ = this.$n$ ? $JSCompiler_StaticMethods_getOptions$$(this.$n$) : $JSCompiler_StaticMethods_getOptions$$($goog$net$XmlHttp$factory_$$);
  this.$a$.onreadystatechange = $goog$bind$$(this.$onReadyStateChange_$, this);
  try {
    $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Opening Xhr")), this.$p$ = !0, this.$a$.open($method$$3_opt_method$$1$$, String($content$$9_url$$34$$), !0), this.$p$ = !1;
  } catch ($err$$13$$) {
    $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Error opening Xhr: " + $err$$13$$.message));
    $JSCompiler_StaticMethods_error_$$(this, $err$$13$$);
    return;
  }
  $content$$9_url$$34$$ = $contentIsFormData_opt_content$$5$$ || "";
  var $headers$$ = this.$t$.clone();
  $contentTypeKey_opt_headers$$1$$ && $goog$structs$forEach$$($contentTypeKey_opt_headers$$1$$, function($value$$142$$, $key$$86$$) {
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$$($headers$$, $key$$86$$, $value$$142$$);
  });
  $contentTypeKey_opt_headers$$1$$ = $goog$array$find$$($headers$$.$getKeys$(), $goog$net$XhrIo$isContentTypeHeader_$$);
  $contentIsFormData_opt_content$$5$$ = $goog$global$$.FormData && $content$$9_url$$34$$ instanceof $goog$global$$.FormData;
  !(0 <= $goog$array$indexOf$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $method$$3_opt_method$$1$$)) || $contentTypeKey_opt_headers$$1$$ || $contentIsFormData_opt_content$$5$$ || $JSCompiler_StaticMethods_goog_structs_Map_prototype$set$$($headers$$, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  $headers$$.forEach(function($value$$143$$, $key$$87$$) {
    this.$a$.setRequestHeader($key$$87$$, $value$$143$$);
  }, this);
  this.$r$ && (this.$a$.responseType = this.$r$);
  "withCredentials" in this.$a$ && (this.$a$.withCredentials = this.$u$);
  try {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$(this), 0 < this.$e$ && (this.$l$ = $goog$net$XhrIo$shouldUseXhr2Timeout_$$(this.$a$), $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Will abort after " + this.$e$ + "ms if incomplete, xhr2 " + this.$l$)), this.$l$ ? (this.$a$.timeout = this.$e$, this.$a$.ontimeout = $goog$bind$$(this.$timeout_$, this)) : this.$k$ = $goog$Timer$callOnce$$(this.$timeout_$, this.$e$, this)), $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, 
    "Sending request")), this.$f$ = !0, this.$a$.send($content$$9_url$$34$$), this.$f$ = !1;
  } catch ($err$$14$$) {
    $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Send error: " + $err$$14$$.message)), $JSCompiler_StaticMethods_error_$$(this, $err$$14$$);
  }
};
function $goog$net$XhrIo$shouldUseXhr2Timeout_$$($xhr$$1$$) {
  return $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(9) && $goog$isNumber$$($xhr$$1$$.timeout) && $goog$isDef$$($xhr$$1$$.ontimeout);
}
function $goog$net$XhrIo$isContentTypeHeader_$$($header$$4$$) {
  return "content-type" == $header$$4$$.toLowerCase();
}
$JSCompiler_prototypeAlias$$.$timeout_$ = function $$JSCompiler_prototypeAlias$$$$timeout_$$() {
  "undefined" != typeof $goog$$ && this.$a$ && (this.$c$ = "Timed out after " + this.$e$ + "ms, aborting", $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, this.$c$)), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "timeout"), this.$a$ && this.$b$ && ($goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Aborting")), this.$b$ = !1, this.$d$ = !0, this.$a$.abort(), this.$d$ = !1, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, 
  "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this)));
};
function $JSCompiler_StaticMethods_error_$$($JSCompiler_StaticMethods_error_$self$$, $err$$15$$) {
  $JSCompiler_StaticMethods_error_$self$$.$b$ = !1;
  $JSCompiler_StaticMethods_error_$self$$.$a$ && ($JSCompiler_StaticMethods_error_$self$$.$d$ = !0, $JSCompiler_StaticMethods_error_$self$$.$a$.abort(), $JSCompiler_StaticMethods_error_$self$$.$d$ = !1);
  $JSCompiler_StaticMethods_error_$self$$.$c$ = $err$$15$$;
  $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_error_$self$$);
  $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_error_$self$$);
}
function $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_dispatchErrors_$self$$) {
  $JSCompiler_StaticMethods_dispatchErrors_$self$$.$o$ || ($JSCompiler_StaticMethods_dispatchErrors_$self$$.$o$ = !0, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "error"));
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$a$ && (this.$b$ && (this.$b$ = !1, this.$d$ = !0, this.$a$.abort(), this.$d$ = !1), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, !0));
  $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
};
$JSCompiler_prototypeAlias$$.$onReadyStateChange_$ = function $$JSCompiler_prototypeAlias$$$$onReadyStateChange_$$() {
  this.$g$ || (this.$p$ || this.$f$ || this.$d$ ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this) : this.$onReadyStateChangeEntryPoint_$());
};
$JSCompiler_prototypeAlias$$.$onReadyStateChangeEntryPoint_$ = function $$JSCompiler_prototypeAlias$$$$onReadyStateChangeEntryPoint_$$() {
  $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
};
function $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) {
  if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$ && "undefined" != typeof $goog$$) {
    if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$m$[1] && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) && 2 == $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
      $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Local request error detected and ignored"));
    } else {
      if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$f$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
        $goog$Timer$callOnce$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$onReadyStateChange_$, 0, $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
      } else {
        if ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
          $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Request complete"));
          $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$ = !1;
          try {
            if ($JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
              $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "success");
            } else {
              var $JSCompiler_inline_result$$59$$;
              try {
                $JSCompiler_inline_result$$59$$ = 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$a$.statusText : "";
              } catch ($e$$inline_463$$) {
                $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, "Can not get status: " + $e$$inline_463$$.message), $JSCompiler_inline_result$$59$$ = "";
              }
              $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$c$ = $JSCompiler_inline_result$$59$$ + " [" + $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) + "]";
              $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
            }
          } finally {
            $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
          }
        }
      }
    }
  }
}
function $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$, $opt_fromDispose$$) {
  if ($JSCompiler_StaticMethods_cleanUpXhr_$self$$.$a$) {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$);
    var $logger$$inline_465_xhr$$2$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$a$, $clearedOnReadyStateChange$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$m$[0] ? $goog$nullFunction$$ : null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$a$ = null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$m$ = null;
    $opt_fromDispose$$ || $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$, "ready");
    try {
      $logger$$inline_465_xhr$$2$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$$56$$) {
      ($logger$$inline_465_xhr$$2$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$logger_$) && $logger$$inline_465_xhr$$2$$.log($goog$debug$Logger$Level$SEVERE$$, "Problem encountered resetting onreadystatechange: " + $e$$56$$.message, void 0);
    }
  }
}
function $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$a$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$l$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$a$.ontimeout = null);
  $goog$isNumber$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$k$) && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$k$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$k$ = null);
}
function $JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$) {
  var $JSCompiler_temp$$56_status$$1$$ = $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$), $JSCompiler_inline_result$$47_JSCompiler_temp$$55$$;
  a: {
    switch($JSCompiler_temp$$56_status$$1$$) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        $JSCompiler_inline_result$$47_JSCompiler_temp$$55$$ = !0;
        break a;
      default:
        $JSCompiler_inline_result$$47_JSCompiler_temp$$55$$ = !1;
    }
  }
  if (!$JSCompiler_inline_result$$47_JSCompiler_temp$$55$$) {
    if ($JSCompiler_temp$$56_status$$1$$ = 0 === $JSCompiler_temp$$56_status$$1$$) {
      $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$ = $goog$uri$utils$split$$(String($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$.$i$))[1] || null, !$JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$ && self.location && ($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$ = self.location.protocol, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$ = 
      $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$.substr(0, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$.length - 1)), $JSCompiler_temp$$56_status$$1$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$ ? $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_844_scheme$$inline_843$$.toLowerCase() : "");
    }
    $JSCompiler_inline_result$$47_JSCompiler_temp$$55$$ = $JSCompiler_temp$$56_status$$1$$;
  }
  return $JSCompiler_inline_result$$47_JSCompiler_temp$$55$$;
}
function $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getReadyState$self$$) {
  return $JSCompiler_StaticMethods_getReadyState$self$$.$a$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$a$.readyState : 0;
}
function $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_getStatus$self$$) {
  try {
    return 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getStatus$self$$) ? $JSCompiler_StaticMethods_getStatus$self$$.$a$.status : -1;
  } catch ($e$$57$$) {
    return -1;
  }
}
function $JSCompiler_StaticMethods_getResponseJson$$($JSCompiler_StaticMethods_getResponseJson$self$$) {
  if ($JSCompiler_StaticMethods_getResponseJson$self$$.$a$) {
    return $goog$json$parse$$($JSCompiler_StaticMethods_getResponseJson$self$$.$a$.responseText);
  }
}
function $JSCompiler_StaticMethods_getLastError$$($JSCompiler_StaticMethods_getLastError$self$$) {
  return $goog$isString$$($JSCompiler_StaticMethods_getLastError$self$$.$c$) ? $JSCompiler_StaticMethods_getLastError$self$$.$c$ : String($JSCompiler_StaticMethods_getLastError$self$$.$c$);
}
function $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_formatMsg_$self$$, $msg$$24$$) {
  return $msg$$24$$ + " [" + $JSCompiler_StaticMethods_formatMsg_$self$$.$q$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.$i$ + " " + $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_formatMsg_$self$$) + "]";
}
;function $z$client$Client$$($targetId$$) {
  this.$c$ = new $z$client$User$$;
  this.$c$.name = "John Doe";
  this.$b$ = $goog$dom$getElementHelper_$$(document, $targetId$$);
}
$goog$inherits$$($z$client$Client$$, $goog$events$EventTarget$$);
function $JSCompiler_StaticMethods_run$$($JSCompiler_StaticMethods_run$self$$) {
  var $rulesetPromise$$ = new $goog$Promise$$(function($resolve$$9$$, $reject$$9$$) {
    $goog$net$XhrIo$send$$("../ruleset/main.json", function($r$$7_ruleset$$4$$) {
      var $conn$$ = $r$$7_ruleset$$4$$.target;
      $JSCompiler_StaticMethods_isSuccess$$($conn$$) ? ($r$$7_ruleset$$4$$ = $JSCompiler_StaticMethods_getResponseJson$$($r$$7_ruleset$$4$$.target), console.log("ruleset", $r$$7_ruleset$$4$$), $resolve$$9$$($r$$7_ruleset$$4$$)) : $reject$$9$$($JSCompiler_StaticMethods_getLastError$$($conn$$));
    });
  }), $texturePromise$$ = new $goog$Promise$$(function($resolve$$10$$, $reject$$10$$) {
    $goog$net$XhrIo$send$$("../ruleset/textures.json", function($r$$8_textures$$1$$) {
      var $conn$$1$$ = $r$$8_textures$$1$$.target;
      $JSCompiler_StaticMethods_isSuccess$$($conn$$1$$) ? ($r$$8_textures$$1$$ = $JSCompiler_StaticMethods_getResponseJson$$($r$$8_textures$$1$$.target), console.log("textures", $r$$8_textures$$1$$), $resolve$$10$$($r$$8_textures$$1$$)) : $reject$$10$$($JSCompiler_StaticMethods_getLastError$$($conn$$1$$));
    });
  }), $mapPromise$$ = new $goog$Promise$$(function($resolve$$11$$, $reject$$11$$) {
    $goog$net$XhrIo$send$$("../ruleset/map.json", function($map$$8_r$$9$$) {
      var $conn$$2$$ = $map$$8_r$$9$$.target;
      $JSCompiler_StaticMethods_isSuccess$$($conn$$2$$) ? ($map$$8_r$$9$$ = $JSCompiler_StaticMethods_getResponseJson$$($map$$8_r$$9$$.target), console.log("map", $map$$8_r$$9$$), $resolve$$11$$($map$$8_r$$9$$)) : $reject$$11$$($JSCompiler_StaticMethods_getLastError$$($conn$$2$$));
    });
  });
  $goog$Promise$all$$([$rulesetPromise$$, $texturePromise$$, $mapPromise$$]).then(function($map$$9_param$$3$$) {
    var $ruleset$$5$$ = $map$$9_param$$3$$[0], $textures$$2$$ = $map$$9_param$$3$$[1];
    $map$$9_param$$3$$ = $map$$9_param$$3$$[2];
    console.log("startNewGame");
    $JSCompiler_StaticMethods_startNewGame$$($JSCompiler_StaticMethods_run$self$$, $ruleset$$5$$, $textures$$2$$, $map$$9_param$$3$$);
  });
}
function $JSCompiler_StaticMethods_startNewGame$$($JSCompiler_StaticMethods_startNewGame$self$$, $ruleset$$6_tileVariationStrategy$$1$$, $textures$$3$$, $map$$10$$) {
  var $injector$$3$$ = new $mugd$injector$Injector$$;
  $injector$$3$$.$b$.common_ruleset = $ruleset$$6_tileVariationStrategy$$1$$;
  $injector$$3$$.$a$[$z$common$Resources$REPOSITORY$$] = $z$common$EntityRepository$$;
  $injector$$3$$.$a$.common_world = $z$client$WorldProxy$$;
  $injector$$3$$.$a$[$z$common$Resources$RULEBOOK$$] = $z$common$rulebook$Rulebook$$;
  $injector$$3$$.$b$.client_textures = $textures$$3$$;
  $injector$$3$$.$b$.client_imap = IsogenicMap;
  $injector$$3$$.$b$["client_world service"] = $z$client$Client$newInitWorldService$$($ruleset$$6_tileVariationStrategy$$1$$, $map$$10$$);
  $ruleset$$6_tileVariationStrategy$$1$$ = function($seed$$3_twister$$) {
    $seed$$3_twister$$ = new $mugd$utils$MersenneTwister$$($seed$$3_twister$$);
    var $noise$$ = new $mugd$utils$SimplexNoise$$($seed$$3_twister$$);
    return function($x$$98$$, $y$$62$$) {
      var $n0$$inline_509_x0$$inline_517$$, $n1$$inline_510_x1$$inline_521$$, $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$;
      $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ = .5 * ($x$$98$$ + $y$$62$$) * (Math.sqrt(3) - 1);
      var $gi0$$inline_527_i$$inline_513$$ = Math.floor($x$$98$$ + $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$), $j$$inline_514_jj$$inline_526_t0$$inline_530$$ = Math.floor($y$$62$$ + $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$), $G2$$inline_515_y2$$inline_524$$ = (3 - Math.sqrt(3)) / 6;
      $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ = ($gi0$$inline_527_i$$inline_513$$ + $j$$inline_514_jj$$inline_526_t0$$inline_530$$) * $G2$$inline_515_y2$$inline_524$$;
      $n0$$inline_509_x0$$inline_517$$ = $x$$98$$ - ($gi0$$inline_527_i$$inline_513$$ - $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$);
      var $t1$$inline_531_y0$$inline_518$$ = $y$$62$$ - ($j$$inline_514_jj$$inline_526_t0$$inline_530$$ - $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$), $gi1$$inline_528_i1$$inline_519$$, $gi2$$inline_529_j1$$inline_520$$;
      $n0$$inline_509_x0$$inline_517$$ > $t1$$inline_531_y0$$inline_518$$ ? ($gi1$$inline_528_i1$$inline_519$$ = 1, $gi2$$inline_529_j1$$inline_520$$ = 0) : ($gi1$$inline_528_i1$$inline_519$$ = 0, $gi2$$inline_529_j1$$inline_520$$ = 1);
      $n1$$inline_510_x1$$inline_521$$ = $n0$$inline_509_x0$$inline_517$$ - $gi1$$inline_528_i1$$inline_519$$ + $G2$$inline_515_y2$$inline_524$$;
      var $t2$$inline_532_y1$$inline_522$$ = $t1$$inline_531_y0$$inline_518$$ - $gi2$$inline_529_j1$$inline_520$$ + $G2$$inline_515_y2$$inline_524$$;
      $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ = $n0$$inline_509_x0$$inline_517$$ - 1 + 2 * $G2$$inline_515_y2$$inline_524$$;
      var $G2$$inline_515_y2$$inline_524$$ = $t1$$inline_531_y0$$inline_518$$ - 1 + 2 * $G2$$inline_515_y2$$inline_524$$, $ii$$inline_525$$ = $gi0$$inline_527_i$$inline_513$$ & 255, $j$$inline_514_jj$$inline_526_t0$$inline_530$$ = $j$$inline_514_jj$$inline_526_t0$$inline_530$$ & 255, $gi0$$inline_527_i$$inline_513$$ = $noise$$.$a$[$ii$$inline_525$$ + $noise$$.$a$[$j$$inline_514_jj$$inline_526_t0$$inline_530$$]] % 12;
      $gi1$$inline_528_i1$$inline_519$$ = $noise$$.$a$[$ii$$inline_525$$ + $gi1$$inline_528_i1$$inline_519$$ + $noise$$.$a$[$j$$inline_514_jj$$inline_526_t0$$inline_530$$ + $gi2$$inline_529_j1$$inline_520$$]] % 12;
      $gi2$$inline_529_j1$$inline_520$$ = $noise$$.$a$[$ii$$inline_525$$ + 1 + $noise$$.$a$[$j$$inline_514_jj$$inline_526_t0$$inline_530$$ + 1]] % 12;
      $j$$inline_514_jj$$inline_526_t0$$inline_530$$ = .5 - $n0$$inline_509_x0$$inline_517$$ * $n0$$inline_509_x0$$inline_517$$ - $t1$$inline_531_y0$$inline_518$$ * $t1$$inline_531_y0$$inline_518$$;
      0 > $j$$inline_514_jj$$inline_526_t0$$inline_530$$ ? $n0$$inline_509_x0$$inline_517$$ = 0 : ($j$$inline_514_jj$$inline_526_t0$$inline_530$$ *= $j$$inline_514_jj$$inline_526_t0$$inline_530$$, $n0$$inline_509_x0$$inline_517$$ = $j$$inline_514_jj$$inline_526_t0$$inline_530$$ * $j$$inline_514_jj$$inline_526_t0$$inline_530$$ * $JSCompiler_StaticMethods_dot$$($noise$$.$b$[$gi0$$inline_527_i$$inline_513$$], $n0$$inline_509_x0$$inline_517$$, $t1$$inline_531_y0$$inline_518$$));
      $t1$$inline_531_y0$$inline_518$$ = .5 - $n1$$inline_510_x1$$inline_521$$ * $n1$$inline_510_x1$$inline_521$$ - $t2$$inline_532_y1$$inline_522$$ * $t2$$inline_532_y1$$inline_522$$;
      0 > $t1$$inline_531_y0$$inline_518$$ ? $n1$$inline_510_x1$$inline_521$$ = 0 : ($t1$$inline_531_y0$$inline_518$$ *= $t1$$inline_531_y0$$inline_518$$, $n1$$inline_510_x1$$inline_521$$ = $t1$$inline_531_y0$$inline_518$$ * $t1$$inline_531_y0$$inline_518$$ * $JSCompiler_StaticMethods_dot$$($noise$$.$b$[$gi1$$inline_528_i1$$inline_519$$], $n1$$inline_510_x1$$inline_521$$, $t2$$inline_532_y1$$inline_522$$));
      $t2$$inline_532_y1$$inline_522$$ = .5 - $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ * $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ - $G2$$inline_515_y2$$inline_524$$ * $G2$$inline_515_y2$$inline_524$$;
      0 > $t2$$inline_532_y1$$inline_522$$ ? $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ = 0 : ($t2$$inline_532_y1$$inline_522$$ *= $t2$$inline_532_y1$$inline_522$$, $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$ = $t2$$inline_532_y1$$inline_522$$ * $t2$$inline_532_y1$$inline_522$$ * $JSCompiler_StaticMethods_dot$$($noise$$.$b$[$gi2$$inline_529_j1$$inline_520$$], $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$, $G2$$inline_515_y2$$inline_524$$));
      return Math.abs(7E7 * ($n0$$inline_509_x0$$inline_517$$ + $n1$$inline_510_x1$$inline_521$$ + $n2$$inline_511_s$$inline_512_t$$inline_516_x2$$inline_523$$) | 0);
    };
  }(34567893657824);
  $injector$$3$$.$b$.client_tile_variation_strategy = $ruleset$$6_tileVariationStrategy$$1$$;
  $injector$$3$$.$a$["client_map widget"] = $z$client$ui$widget$MapWidget$$;
  $injector$$3$$.$a$.client_game_session_widget = $z$client$ui$widget$GameSessionWidget$$;
  $injector$$3$$.$a$.client_context_menu_widget = $z$client$ui$widget$ContextMenuWidget$$;
  $injector$$3$$.$a$.client_debug_log_widget = $z$client$ui$widget$MessageLogWidget$$;
  $injector$$3$$.$a$.client_message_log_widget = $z$client$ui$widget$MessageLogWidget$$;
  $injector$$3$$.$a$.client_gem = $z$client$facet$Gem$$;
  $injector$$3$$.$a$.client_action_factory = $z$client$ActionFactory$$;
  $injector$$3$$.$a$.client_map_facet = $z$client$facet$MapFacet$$;
  $injector$$3$$.$a$.client_context_menu_facet = $z$client$facet$ContextMenuFacet$$;
  $injector$$3$$.$b$.client_game_dom_element = $JSCompiler_StaticMethods_startNewGame$self$$.$b$;
  $JSCompiler_StaticMethods_addResource$$($injector$$3$$, "client_current_target");
  $JSCompiler_StaticMethods_addResource$$($injector$$3$$, "client_current_action");
  $injector$$3$$.$a$.client_toolbar = $z$client$facet$ToolbarFacet$$;
  $injector$$3$$.$a$.client_info_facet = $z$client$facet$InfoFacet$$;
  $injector$$3$$.$a$.client_message_log_facet = $z$client$facet$MessageLogFacet$$;
  $injector$$3$$.$a$.client_end_turn_action = $z$client$actions$EndTurn$$;
  $injector$$3$$.$a$.client_open_project_management_action = $z$client$actions$OpenProjectManagement$$;
  $injector$$3$$.$c$.client_project_facet = $z$client$facet$ProjectFacet$$;
  $injector$$3$$.$a$.client_project_list_facet = $z$client$facet$ProjectListFacet$$;
  $injector$$3$$.$a$.client_modal_facet = $z$client$facet$ModalFacet$$;
  $injector$$3$$.$a$.client_player_facet = $z$client$facet$ActorFacet$$;
  $injector$$3$$.$c$.project = $z$common$entities$Project$$;
  $injector$$3$$.$c$.tile = $z$common$entities$Tile$$;
  $injector$$3$$.$c$[$z$common$rulebook$category$CHARACTER_TYPE$$] = $z$common$entities$Character$$;
  $injector$$3$$.$c$[$z$common$rulebook$category$ACTOR$$] = $z$common$entities$Actor$$;
  $JSCompiler_StaticMethods_startNewGame$self$$.$a$ = $JSCompiler_StaticMethods_New$$($JSCompiler_StaticMethods_Compose$$($injector$$3$$, $z$client$GameSession$$));
  $JSCompiler_StaticMethods_z_client_GameSession_prototype$start$$($JSCompiler_StaticMethods_startNewGame$self$$.$a$);
}
function $z$client$Client$newInitWorldService$$($ruleset$$7$$, $map$$11$$) {
  return function() {
    var $injector$$inline_632$$ = new $mugd$injector$Injector$$;
    $injector$$inline_632$$.$b$.common_ruleset = $ruleset$$7$$;
    $injector$$inline_632$$.$a$.common_world = $z$service$world$World$$;
    $injector$$inline_632$$.$a$[$z$common$Resources$RULEBOOK$$] = $z$common$rulebook$Rulebook$$;
    $injector$$inline_632$$.$a$.service_character_generator = $z$service$world$CharacterGenerator$$;
    $injector$$inline_632$$.$a$[$z$common$Resources$REPOSITORY$$] = $z$common$EntityRepository$$;
    $injector$$inline_632$$.$a$.service_terrain_generator = $z$service$world$StaticTerrainGenerator$$;
    $injector$$inline_632$$.$a$.service_terrain_random_generator = $z$service$world$RandomTerrainGenerator$$;
    $injector$$inline_632$$.$b$.service_terrain_seed = "ASDGW3E45RG";
    $injector$$inline_632$$.$b$.service_terrain_map = $map$$11$$;
    $injector$$inline_632$$.$a$.game_ender = $z$service$world$GameEnder$$;
    $injector$$inline_632$$.$c$.project = $z$common$entities$Project$$;
    $injector$$inline_632$$.$c$.tile = $z$common$entities$Tile$$;
    $injector$$inline_632$$.$c$[$z$common$rulebook$category$CHARACTER_TYPE$$] = $z$common$entities$Character$$;
    $injector$$inline_632$$.$c$[$z$common$rulebook$category$ACTOR$$] = $z$common$entities$Actor$$;
    return $JSCompiler_StaticMethods_getResource$$($injector$$inline_632$$, "common_world");
  };
}
;function $mugd$bindings$markdown$addMarkdown$$() {
  ko.bindingHandlers.markdown = {update:function $ko$bindingHandlers$markdown$update$($element$$87$$, $valueAccessor$$4$$) {
    return ko.bindingHandlers.html.update($element$$87$$, function() {
      return markdown.toHTML(ko.utils.unwrapObservable($valueAccessor$$4$$()));
    });
  }};
}
;$goog$exportPath_$$("zed.init", function($initElement$$) {
  $mugd$bindings$dragndrop$addDragNDrop$$();
  $mugd$bindings$markdown$addMarkdown$$();
  var $client$$1$$ = new $z$client$Client$$($initElement$$);
  $goog$net$XhrIo$send$$("all.html", function($e$$63_xhr$$3$$) {
    $e$$63_xhr$$3$$ = $e$$63_xhr$$3$$.target;
    if ($JSCompiler_StaticMethods_isSuccess$$($e$$63_xhr$$3$$)) {
      var $html$$22$$;
      try {
        $html$$22$$ = $e$$63_xhr$$3$$.$a$ ? $e$$63_xhr$$3$$.$a$.responseText : "";
      } catch ($e$$inline_691$$) {
        $goog$log$fine$$($e$$63_xhr$$3$$.$logger_$, "Can not get responseText: " + $e$$inline_691$$.message), $html$$22$$ = "";
      }
      $goog$dom$getElementHelper_$$(document, $initElement$$).innerHTML = $html$$22$$;
    } else {
      infuser.defaults.templatePrefix = "tpl/";
    }
    console.log("running");
    $JSCompiler_StaticMethods_run$$($client$$1$$);
  });
  return $client$$1$$;
});
window.triggerZed && (window.triggerZed(), window.triggerZed = !1);

