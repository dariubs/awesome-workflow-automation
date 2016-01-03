do ($ = Zepto ? jQuery) ->
  inherit = ['font', 'letter-spacing']

  $.fn.autoGrow = (options) ->

    remove = options in ['remove', no] or !!options?.remove
    comfortZone = options?.comfortZone ? options
    comfortZone = +comfortZone if comfortZone?

    this.each ->
      input = $(this)
      input_pre_id = input.data('autogrow-id')
      pre_id = input_pre_id || Math.floor((1 + Math.random()) * 0x10000000).toString(16)
      input.data('autogrow-id', pre_id)
      testSubject = $('#' + pre_id)

      if testSubject.length and remove # unbind
        input.unbind('input.autogrow')
        testSubject.remove()

      else if testSubject.length # update
        styles = {}
        styles[prop] = input.css(prop) for prop in inherit
        testSubject.css(styles)

        if comfortZone?
          check = ->
            testSubject.text(input.val())
            input.width(testSubject.width() + comfortZone)
          input.unbind('input.autogrow')
          input.bind('input.autogrow', check)
          check()

      else if not remove # bind
        if input.css('min-width') == '0px'
          input.css('min-width', "#{input.width()}px")

        styles =
          position: 'absolute'
          top: -99999
          left: -99999
          width: 'auto'
          visibility: 'hidden'
        styles[prop] = input.css(prop) for prop in inherit

        testSubject = $('<pre id="' + pre_id + '" class="autogrow"/>').css(styles)
        testSubject.appendTo('body')

        cz = comfortZone ? 70
        check = ->
          testSubject.text(input.val())
          input.width(testSubject.width() + cz)
        input.bind('input.autogrow', check)
        check()
