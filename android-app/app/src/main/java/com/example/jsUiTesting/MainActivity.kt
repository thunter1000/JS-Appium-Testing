package com.example.jsUiTesting

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun onTestButtonClick(view: View) {
        tv_test_text.visibility = if (tv_test_text.visibility == View.VISIBLE) View.GONE else View.VISIBLE
    }
}